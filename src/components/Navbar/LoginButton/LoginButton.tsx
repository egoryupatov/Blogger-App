import React from "react";
import {
  AuthSectionStyled,
  LoginContainerStyled,
  NavbarIconsContainerStyled,
} from "../Navbar.styled";
import {
  setIsLoginFormDisplayed,
  setIsUserLoggedIn,
} from "../../../store/userSlice";
import { LoginButtonProps } from "./LoginButton.types";

export const LoginButton: React.FC<LoginButtonProps> = (props) => {
  return (
    <>
      {props.isUserLogged ? (
        <>
          <AuthSectionStyled
            onClick={() => {
              props.navigate(`/user/${props.userId}`);
            }}
          >
            <img src={props.authorizedUser.avatar} alt={""} />
          </AuthSectionStyled>

          <AuthSectionStyled>
            <NavbarIconsContainerStyled>
              <img src={"/bell.svg"} alt={""} />
            </NavbarIconsContainerStyled>
          </AuthSectionStyled>
          <AuthSectionStyled
            onClick={() => {
              props.dispatch(setIsUserLoggedIn(false));
              localStorage.clear();
              props.navigate("/");
            }}
          >
            <LoginContainerStyled>
              <img src={"/login.svg"} alt={""} />
              <span>Logout</span>
            </LoginContainerStyled>
          </AuthSectionStyled>
        </>
      ) : (
        <>
          <AuthSectionStyled
            onClick={() => props.dispatch(setIsLoginFormDisplayed(true))}
          >
            <NavbarIconsContainerStyled>
              <img src={"/bell.svg"} alt={""} />
              <LoginContainerStyled>
                <img src={"/login.svg"} alt={""} />
                <span>Login</span>
              </LoginContainerStyled>
            </NavbarIconsContainerStyled>
          </AuthSectionStyled>
        </>
      )}
    </>
  );
};
