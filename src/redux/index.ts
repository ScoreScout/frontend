import { configureStore } from "@reduxjs/toolkit";
import bracketReducer from "./slices/bracket/bracketSlice";
import modalReducer from "./slices/modal/modalSlice";

export const store = configureStore({
  reducer: {
    bracket: bracketReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
