import React from "react";
import {
  selectAuthorizedUserInfo,
  selectIsUserLoggedIn,
} from "../../../store/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "./LoginButton";

export const LoginButtonContainer: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLogged = useAppSelector(selectIsUserLoggedIn);
  const userId = localStorage.getItem("id");
  const authorizedUser = useAppSelector(selectAuthorizedUserInfo);

  return (
    <LoginButton
      isUserLogged={isUserLogged}
      navigate={navigate}
      userId={userId}
      authorizedUser={authorizedUser}
      dispatch={dispatch}
    />
  );
};
