import React from "react";
import {
  ButtonStyled,
  TextFormStyled,
  TextAreaStyled,
} from "../../styles/general.styled";
import { setIsLoginFormDisplayed } from "../../store/userSlice";
import { AnswerButtonsContainerStyled } from "../Comment/Comment.styled";
import { useDispatch } from "react-redux";
import { AnswerFormProps } from "./AnswerForm.types";

export const AnswerForm: React.FC<AnswerFormProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <TextFormStyled marginLeft="15px">
      <TextAreaStyled
        id="description"
        placeholder="Write an answer..."
        onChange={props.onAnswerChange}
      ></TextAreaStyled>
      <AnswerButtonsContainerStyled>
        <ButtonStyled
          color="gray"
          bg="transparent"
          border="none"
          shadow="none"
          onClick={() => props.setIsAnswerWindowOpened(false)}
        >
          Cancel
        </ButtonStyled>

        {localStorage.getItem("token") ? (
          <ButtonStyled
            hover="yes"
            onClick={() => props.onAnswerAdd(props.comment.id)}
          >
            Answer
          </ButtonStyled>
        ) : (
          <ButtonStyled
            hover="yes"
            onClick={() => dispatch(setIsLoginFormDisplayed(true))}
          >
            Answer
          </ButtonStyled>
        )}
      </AnswerButtonsContainerStyled>
    </TextFormStyled>
  );
};
