import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { User } from "../../types/userTypes";

const selectUser = (state: RootState): User => {
  return state.user;
};

export const getUser = createSelector([selectUser], (user) => {
  return user;
});
