import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import bracketReducer from "./slices/bracket/bracketSlice";
import userReducer from "./slices/user/userSlice";
import modalReducer from "./slices/modal/modalSlice";
import tournamentsReducer from "./slices/tournament/tournamentSlice";

import tournamentApi from "./apis/tournament/tournamentApi";

export const store = configureStore({
  reducer: {
    [tournamentApi.reducerPath]: tournamentApi.reducer,
    bracket: bracketReducer,
    user: userReducer,
    modal: modalReducer,
    tournaments: tournamentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tournamentApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
