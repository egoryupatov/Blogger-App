import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../Navbar.styled";
import { setIsLoginFormDisplayed } from "../../../store/userSlice";
import { AddNewBlogpostButtonProps } from "./AddNewBlogpostButton.types";

export const AddNewBlogpostButton: React.FC<AddNewBlogpostButtonProps> = (
  props
) => {
  return (
    <>
      {props.isUserLogged ? (
        <Link to={"/add-new-post"}>
          <ButtonStyled>
            <button>
              <span className="material-symbols-outlined">add</span> Add a post
            </button>
          </ButtonStyled>
        </Link>
      ) : (
        <ButtonStyled
          onClick={() => props.dispatch(setIsLoginFormDisplayed(true))}
        >
          <button>
            <span className="material-symbols-outlined">add</span> Add a post
          </button>
        </ButtonStyled>
      )}
    </>
  );
};
