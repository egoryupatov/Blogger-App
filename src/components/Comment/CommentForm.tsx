import React from "react";
import {
  ButtonStyled,
  TextFormStyled,
  TextAreaStyled,
} from "../../styles/general.styled";

export const CommentForm: React.FC = () => {
  return (
    <TextFormStyled marginLeft="15px">
      <TextAreaStyled
        id="description"
        placeholder="Write an answer..."
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
        >
          Cancel
        </ButtonStyled>
        <ButtonStyled>Answer</ButtonStyled>
      </div>
    </TextFormStyled>
  );
};
