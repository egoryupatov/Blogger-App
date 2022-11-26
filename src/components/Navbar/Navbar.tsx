import React from "react";

import {
  NavbarStyled,
  LogoStyled,
  AuthSectionStyled,
  SearchbarStyled,
  ButtonStyled,
  NavbarMiddleStyled,
  AuthSectionContainerStyled,
} from "./Navbar.styled";
import { AddButton } from "./AddButton";

import { Link } from "react-router-dom";

import { LoginForm } from "../LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import { selectLoginFormDisplayed } from "../../store/userSlice";
import { LoginButton } from "./LoginButton";

export const Navbar: React.FC = () => {
  const isLoginFormVisible = useAppSelector(selectLoginFormDisplayed);

  return (
    <>
      <NavbarStyled>
        <LogoStyled>
          <img
            style={{ height: "24px", width: "24px" }}
            src={"/hamburger.svg"}
          />
          <Link to={"/"}>
            <img
              style={{ height: "50px", width: "70px", marginTop: "4px" }}
              src={"/logo.svg"}
            />
          </Link>
        </LogoStyled>

        <NavbarMiddleStyled>
          <SearchbarStyled>
            <input type="search" placeholder="Search" />
          </SearchbarStyled>
          <AddButton />
        </NavbarMiddleStyled>
        <AuthSectionContainerStyled>
          <LoginButton />
        </AuthSectionContainerStyled>
      </NavbarStyled>
      {isLoginFormVisible ? <LoginForm /> : ""}
    </>
  );
};
