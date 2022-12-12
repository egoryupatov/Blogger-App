import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import {
  ButtonStyled,
  TextFormStyled,
  TextAreaStyled,
} from "../../styles/general.styled";
import { IComment } from "../../store/userSlice";

interface CommentFormProps {
  setIsAnswerWindowOpened: Dispatch<SetStateAction<boolean>>;
  onAnswerChange: (e: any) => void;
  onAnswerAdd: (id: number) => void;
  comment: IComment;
}

export const CommentForm: React.FC<CommentFormProps> = (props) => {
  return (
    <TextFormStyled marginLeft="15px">
      <TextAreaStyled
        id="description"
        placeholder="Write an answer..."
        onChange={props.onAnswerChange}
      ></TextAreaStyled>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <ButtonStyled
          color="gray"
          bg="transparent"
          border="none"
          shadow="none"
          hover="none"
          onClick={() => props.setIsAnswerWindowOpened(false)}
        >
          Cancel
        </ButtonStyled>
        <ButtonStyled onClick={() => props.onAnswerAdd(props.comment.id)}>
          Answer
        </ButtonStyled>
      </div>
    </TextFormStyled>
  );
};
