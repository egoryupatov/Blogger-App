import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setIsLoginFormDisplayed,
  setIsUserLoggedIn,
} from "../../store/userSlice";
import { LoginForm } from "./LoginForm";

export const LoginFormContainer: React.FC = () => {
  const [userData, setUserData] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState<boolean>(false);

  const handleUserNameChange = (e: any) => {
    {
      setUserData({ ...userData, login: e.target.value });
    }
  };

  const handlePasswordChange = (e: any) => {
    {
      setUserData({ ...userData, password: e.target.value });
    }
  };

  const dispatch = useDispatch();

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      login: userData.login,
      password: userData.password,
    }),
  };

  const handleSignInClick = () => {
    fetch("http://localhost:3005/auth/login", options)
      .then((response) => {
        if (response.status === 401) {
          throw new Error();
        } else {
          return response.json();
        }
      })
      .then((response) => {
        localStorage.setItem("token", response.access_token);
        localStorage.setItem("id", response.id);
        dispatch(setIsLoginFormDisplayed(false));
        dispatch(setIsUserLoggedIn(true));
      })
      .catch((error) => setError(true));
  };

  return (
    <LoginForm
      dispatch={dispatch}
      onUsernameChange={handleUserNameChange}
      onPasswordChange={handlePasswordChange}
      onSignInClick={handleSignInClick}
      error={error}
    />
  );
};
