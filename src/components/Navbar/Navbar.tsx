import React from "react";
import {
  AuthSectionContainerStyled,
  HamburgerStyled,
  LogoImageStyled,
  LogoStyled,
  NavbarMiddleStyled,
  NavbarStyled,
  SearchbarStyled,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import { AddNewBlogpostButtonContainer } from "./AddNewBlogpostButton/AddNewBlogpostButtonContainer";
import { LoginButtonContainer } from "./LoginButton/LoginButtonContainer";
import { LoginFormContainer } from "../LoginForm/LoginFormContainer";
import { NavbarProps } from "./Navbar.types";

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <>
      <NavbarStyled>
        <LogoStyled>
          <HamburgerStyled src={"/hamburger.svg"} />
          <Link to={"/"}>
            <LogoImageStyled src={"/logo.svg"} />
          </Link>
        </LogoStyled>

        <NavbarMiddleStyled>
          <SearchbarStyled>
            <input
              onChange={props.onSearchQueryEnter}
              onKeyDown={props.onSearchClick}
              type="search"
              placeholder="Search"
            />
          </SearchbarStyled>
          <AddNewBlogpostButtonContainer />
        </NavbarMiddleStyled>
        <AuthSectionContainerStyled>
          <LoginButtonContainer />
        </AuthSectionContainerStyled>
      </NavbarStyled>
      {props.isLoginFormVisible ? <LoginFormContainer /> : ""}
    </>
  );
};
