import React from "react";
import {
  AuthSectionStyled,
  NavbarIconsContainerStyled,
  LoginContainerStyled,
} from "./Navbar.styled";
import {
  selectAuthorizedUserInfo,
  selectIsUserLoggedIn,
  setIsLoginFormDisplayed,
  setIsUserLoggedIn,
} from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { createInstance } from "@testing-library/user-event/setup/setup";

export const LoginButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLogged = useAppSelector(selectIsUserLoggedIn);
  const userId = localStorage.getItem("id");
  const authorizedUser = useAppSelector(selectAuthorizedUserInfo);

  return (
    <>
      {isUserLogged ? (
        <>
          <AuthSectionStyled
            onClick={() => {
              navigate(`/user/${userId}`);
            }}
          >
            <img src={authorizedUser.avatar} />
          </AuthSectionStyled>

          <AuthSectionStyled>
            <NavbarIconsContainerStyled>
              <img src={"/bell.svg"} />
            </NavbarIconsContainerStyled>
          </AuthSectionStyled>
          <AuthSectionStyled
            onClick={() => {
              dispatch(setIsUserLoggedIn(false));
              localStorage.clear();
              navigate("/");
            }}
          >
            <LoginContainerStyled>
              <img src={"/login.svg"} />
              <span>Logout</span>
            </LoginContainerStyled>
          </AuthSectionStyled>
        </>
      ) : (
        <>
          <AuthSectionStyled
            onClick={() => dispatch(setIsLoginFormDisplayed(true))}
          >
            <NavbarIconsContainerStyled>
              <img src={"/bell.svg"} />
              <LoginContainerStyled>
                <img src={"/login.svg"} />
                <span>Login</span>
              </LoginContainerStyled>
            </NavbarIconsContainerStyled>
          </AuthSectionStyled>
        </>
      )}
    </>
  );
};
