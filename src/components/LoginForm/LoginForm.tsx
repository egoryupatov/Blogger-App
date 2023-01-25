import React from "react";
import {
  LoginFormCloseStyled,
  LoginFormContainerStyled,
  LoginFormStyled,
} from "./LoginForm.styled";
import { setIsLoginFormDisplayed } from "../../store/userSlice";
import { LoginFormProps } from "./LoginForm.types";

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  return (
    <LoginFormStyled>
      <LoginFormContainerStyled>
        <LoginFormCloseStyled>
          <span
            onClick={() => props.dispatch(setIsLoginFormDisplayed(false))}
            className="material-symbols-outlined"
          >
            close
          </span>
        </LoginFormCloseStyled>
        <h1>Sign in to your account</h1>
        <input onChange={props.onUsernameChange} placeholder="Username" />
        <input onChange={props.onPasswordChange} placeholder="Password" />
        <button onClick={props.onSignInClick}>Sign in</button>
        {props.error ? "No user found!" : ""}
      </LoginFormContainerStyled>
    </LoginFormStyled>
  );
};
