import React, { useState, createContext } from "react";

import {
  NavbarStyled,
  LogoStyled,
  SearchbarStyled,
  NavbarMiddleStyled,
  AuthSectionContainerStyled,
} from "./Navbar.styled";
import { AddButton } from "./AddButton";
import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import {
  getSearchQuery,
  selectLoginFormDisplayed,
} from "../../store/userSlice";
import { LoginButton } from "./LoginButton";
import { useDispatch } from "react-redux";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isLoginFormVisible = useAppSelector(selectLoginFormDisplayed);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("sad");

  const onSearchQueryEnter = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const onSearchClick = (e: any) => {
    if (e.key === "Enter") {
      dispatch(getSearchQuery(searchQuery));
      navigate("search");
    }
  };

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
            <input
              onChange={onSearchQueryEnter}
              onKeyDown={onSearchClick}
              type="search"
              placeholder="Search"
            />
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
