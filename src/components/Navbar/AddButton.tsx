import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../Navbar/Navbar.styled";
import {
  selectIsUserLoggedIn,
  setIsLoginFormDisplayed,
} from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";

export const AddButton: React.FC = () => {
  const dispatch = useDispatch();
  const isUserLogged = useAppSelector(selectIsUserLoggedIn);

  return (
    <>
      {isUserLogged ? (
        <Link to={"/add-new-post"}>
          <ButtonStyled>
            <button>
              <span className="material-symbols-outlined">add</span> Add a post
            </button>
          </ButtonStyled>
        </Link>
      ) : (
        <ButtonStyled onClick={() => dispatch(setIsLoginFormDisplayed(true))}>
          <button>
            <span className="material-symbols-outlined">add</span> Add a post
          </button>
        </ButtonStyled>
      )}
    </>
  );
};
