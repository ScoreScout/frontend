import React from "react";
import { useAppSelector } from "../redux/hooks";
import { getUser } from "../redux/selectors/userSelection";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (): JSX.Element => {
  const user = useAppSelector(getUser);
  return user.accessToken != null && user.accessToken !== "" ? (
    <Outlet />
  ) : (
    <Navigate to='/score-scout/sign-in' replace />
  );
};

export default ProtectedRoute;
