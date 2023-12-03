import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../../types/userTypes";
import axios from "axios";
import { getConfigValue } from "@ijl/cli";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const headers = {
  "Content-Type": "application/json",
};
const cookies = new Cookies();
const initialState: User = {
  email: "",
  password: "",
  rePassword: "",
  accessToken: cookies.get("access"),
  refreshToken: cookies.get("refresh"),
  activeState: false,
  signupState: "idle",
};

export const loadUser = createAsyncThunk(
  "user/getUser",
  async (state: User, { rejectWithValue, fulfillWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${state.accessToken}`,
      },
    };
    return await axios
      .get(`${getConfigValue("score-scout.url")}/auth/users/me/`, config)
      .then(async (res) => {
        return fulfillWithValue(res.data);
      })
      .catch(async (e) => {
        config.headers.Authorization = "";
        const body = JSON.stringify({
          refresh: state.refreshToken,
        });
        return await axios
          .post(`${getConfigValue("score-scout.url")}/auth/jwt/refresh/`, body, config)
          .then(async (res) => {
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${res.data.access}`,
              },
            };
            return await axios
              .get(`${getConfigValue("score-scout.url")}/auth/users/me/`, config)
              .then((ret) => {
                return fulfillWithValue({ ...ret.data, ...res.data });
              })
              .catch((e) => {
                return rejectWithValue(res.data);
              });
          })
          .catch((e) => {
            let err = e;
            if (e.response?.data?.email != null) {
              err = `Error in email: ${e.response.data.email[0]}`;
            } else if (e.response?.data?.password != null) {
              err = `Error in password: ${e.response.data.password[0]}`;
            } else if (e.response?.data?.detail != null) {
              err = `Error: ${e.response.data.detail}`;
            } else {
              err = "An error occured, please try again";
            }
            return rejectWithValue(err);
          });
      });
  },
);

export const signIn = createAsyncThunk(
  "user/loginUser",
  async (state: User, { rejectWithValue, fulfillWithValue }) => {
    const body = JSON.stringify({
      email: state.email,
      password: state.password,
    });
    return await axios
      .post(`${getConfigValue("score-scout.url")}/auth/jwt/create/`, body, { headers })
      .then(async (res) => {
        return fulfillWithValue(res.data);
      })
      .catch((e) => {
        let err = e;
        if (e.response?.data?.email != null) {
          err = `Error in email: ${e.response.data.email[0]}`;
        } else if (e.response?.data?.password != null) {
          err = `Error in password: ${e.response.data.password[0]}`;
        } else if (e.response?.data?.detail != null) {
          err = `Error: ${e.response.data.detail}`;
        } else {
          err = "An error occured, please try again";
        }
        return rejectWithValue(err);
      });
  },
);

export const signUp = createAsyncThunk(
  "user/registerUser",
  async (state: User, { rejectWithValue, fulfillWithValue }) => {
    const body = JSON.stringify({
      email: state.email,
      password: state.password,
      re_password: state.rePassword,
    });
    return await axios
      .post(`${getConfigValue("score-scout.url")}/auth/users/`, body, { headers })
      .then(async (res) => {
        return fulfillWithValue(res.data);
      })
      .catch((e) => {
        let err: string = e.message;
        if (e?.response?.data != null) {
          const response = e.response.data;
          if (response.email?.includes("user account with this email already exists.") === true) {
            err = "You are already registered, try to log in.";
          } else if (response.email?.includes("Enter a valid email address.") === true) {
            err = "Please enter a valid email address";
          } else if (response.email?.includes("This field may not be blank.") === true) {
            err = "Please write your email";
          } else if (response.password?.includes("This field may not be blank.") === true) {
            err = "Please write your password";
          } else if (response.re_password?.includes("This field may not be blank.") === true) {
            err = "Please re-type your password";
          } else if (response.email != null) {
            err = response.email[0];
          } else if (response.password != null) {
            err = response.password[0];
          } else if (response.re_password != null) {
            err = response.re_password[0];
          }
        }
        return rejectWithValue(err);
      });
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCredintials: (state, action: PayloadAction<User>) => {
      const email = action.payload.email ?? state.email;
      const password = action.payload.password ?? state.password;
      const rePassword = action.payload.rePassword ?? state.rePassword;
      const accessToken = action.payload.accessToken ?? state.accessToken;
      const refreshToken = action.payload.refreshToken ?? state.refreshToken;
      const activeState = action.payload.activeState ?? state.activeState;
      state = {
        ...state,
        email,
        password,
        rePassword,
        accessToken,
        refreshToken,
        activeState,
      };
      return state;
    },
    activate: (state, action: PayloadAction<{ uid: string; token: string }>) => {
      const body = JSON.stringify({
        uid: action.payload.uid,
        token: action.payload.token,
      });
      axios
        .post(`${getConfigValue("score-scout.url")}/auth/users/activation/`, body, { headers })
        .then((res) => {
          toast.success("Your account is successfully activated");
          state = { ...state, activeState: true };
        })
        .catch((e) => {
          if (state.activeState != null) return state;
          if (e.response?.data != null) {
            if (e.response.data.uid != null) {
              toast.error(`An error occured: ${e.response.data.uid[0]}`);
            } else if (e.response.data.token != null) {
              toast.error(`An error occured: ${e.response.data.token[0]}`);
            }
          } else {
            toast.error("An error occured");
          }
          state = { ...state, activeState: false };
        });
      return state;
    },
    logout: (state) => {
      state = { ...initialState };
      state.accessToken = "";
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.signupState = "success";
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.signupState = "error";
    });
    builder.addCase(signUp.pending, (state, action) => {
      state.signupState = "pending";
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(signIn.rejected, (state, action) => {});
    builder.addCase(signIn.pending, (state, action) => {});
    builder.addCase(loadUser.fulfilled, (state, action) => {
      if (action.payload.access != null) state.accessToken = action.payload.access;
      state.email = action.payload.email;
      state.loadState = "success";
    });
    builder.addCase(loadUser.pending, (state, action) => {
      state.loadState = "pending";
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.loadState = "error";
    });
  },
});

export const { setUserCredintials, activate, logout } = userSlice.actions;

export default userSlice.reducer;
