import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import {
  ButtonStyled,
  TextFormStyled,
  TextAreaStyled,
} from "../../styles/general.styled";
import { IComment, setIsLoginFormDisplayed } from "../../store/userSlice";
import { AnswerButtonsContainerStyled } from "./Comment.styled";
import { useDispatch } from "react-redux";
interface CommentFormProps {
  setIsAnswerWindowOpened: Dispatch<SetStateAction<boolean>>;
  onAnswerChange: (e: any) => void;
  onAnswerAdd: (id: number) => void;
  comment: IComment;
}

export const AnswerForm: React.FC<CommentFormProps> = (props) => {
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
