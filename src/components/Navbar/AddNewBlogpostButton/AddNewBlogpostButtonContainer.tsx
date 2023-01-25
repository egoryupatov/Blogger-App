import React from "react";
import { selectIsUserLoggedIn } from "../../../store/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/hooks";
import { AddNewBlogpostButton } from "./AddNewBlogpostButton";

export const AddNewBlogpostButtonContainer: React.FC = () => {
  const dispatch = useDispatch();
  const isUserLogged = useAppSelector(selectIsUserLoggedIn);

  return (
    <AddNewBlogpostButton isUserLogged={isUserLogged} dispatch={dispatch} />
  );
};
