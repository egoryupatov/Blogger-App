import React from "react";
import {
  CommentsBoardContainerStyled,
  CommentsBoardStyled,
} from "./CommentsBoard.styled";
import { IComment } from "../../types/general.types";
import { CommentBoardComment } from "./CommentBoardComment";
import { CommentsBoardProps } from "./CommentsBoard.types";

export const CommentsBoard: React.FC<CommentsBoardProps> = (props) => {
  return (
    <CommentsBoardContainerStyled>
      <CommentsBoardStyled>
        {props.comments.map((comment: IComment) => (
          <CommentBoardComment key={comment.id} comment={comment} />
        ))}
      </CommentsBoardStyled>
    </CommentsBoardContainerStyled>
  );
};
