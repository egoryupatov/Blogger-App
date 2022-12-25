import React, { useState } from "react";
import {
  LoginFormContainerStyled,
  LoginFormStyled,
  LoginFormCloseStyled,
} from "./LoginForm.styled";
import { useDispatch } from "react-redux";
import {
  setIsLoginFormDisplayed,
  setIsUserLoggedIn,
} from "../../store/userSlice";

export const LoginForm: React.FC = () => {
  const [userData, setUserData] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const onUsernameChange = (e: any) => {
    {
      setUserData({ ...userData, login: e.target.value });
    }
  };

  const onPasswordChange = (e: any) => {
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

  const onSignInClick = () => {
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
    <LoginFormStyled>
      <LoginFormContainerStyled>
        <LoginFormCloseStyled>
          <span
            onClick={() => dispatch(setIsLoginFormDisplayed(false))}
            className="material-symbols-outlined"
          >
            close
          </span>
        </LoginFormCloseStyled>
        <h1>Sign in to your account</h1>
        <input onChange={onUsernameChange} placeholder="Username" />
        <input onChange={onPasswordChange} placeholder="Password" />
        <button onClick={onSignInClick}>Sign in</button>
        {error ? "No user found!" : ""}
      </LoginFormContainerStyled>
    </LoginFormStyled>
  );
};
