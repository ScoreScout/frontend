import React, { useEffect, type ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledActivationContainer } from "./style";
import { useAppDispatch } from "../../redux/hooks";
import { activate } from "../../redux/slices/user/userSlice";
import { toast } from "react-toastify";

const ProfileActivationPage = (): ReactElement => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (uid == null || token == null) {
      toast.error("Unknow token and user ID are given, try to regiester again");
    } else {
      dispatch(activate({ uid, token }));
    }
    // TODO: redirect to signup in case of failure
    navigate(`/score-scout/sign-in`);
  }, []);
  // TODO: maybe create some UI for activation
  return <StyledActivationContainer></StyledActivationContainer>;
};

export default ProfileActivationPage;
