import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import bracketReducer from "./slices/bracket/bracketSlice";
import modalReducer from "./slices/modal/modalSlice";
import tournamentSlice from "./slices/tournament/tournamentSlice";

export const store = configureStore({
  reducer: {
    [tournamentSlice.reducerPath]: tournamentSlice.reducer,
    bracket: bracketReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tournamentSlice.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
