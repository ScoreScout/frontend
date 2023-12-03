export interface User {
  email?: string;
  password?: string;
  rePassword?: string;
  accessToken?: string;
  refreshToken?: string;
  activeState?: boolean;
  signupState?: "pending" | "idle" | "error" | "success";
  message?: string;
  loadState?: "pending" | "idle" | "error" | "success";
}
