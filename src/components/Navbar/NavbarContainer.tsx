import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import {
  getSearchQuery,
  selectLoginFormDisplayed,
} from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { Navbar } from "./Navbar";

export const NavbarContainer: React.FC = () => {
  const navigate = useNavigate();
  const isLoginFormVisible = useAppSelector(selectLoginFormDisplayed);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchQueryEnter = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = (event: any) => {
    if (event.key === "Enter") {
      dispatch(getSearchQuery(searchQuery));
      navigate("search");
    }
  };

  return (
    <Navbar
      onSearchQueryEnter={handleSearchQueryEnter}
      onSearchClick={handleSearchClick}
      isLoginFormVisible={isLoginFormVisible}
    />
  );
};
