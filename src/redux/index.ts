import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import bracketReducer from "./slices/bracket/bracketSlice";
import userReducer from "./slices/user/userSlice";
import modalReducer from "./slices/modal/modalSlice";

export const store = configureStore({
  reducer: {
    bracket: bracketReducer,
    user: userReducer,
    modal: modalReducer,
  },
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
