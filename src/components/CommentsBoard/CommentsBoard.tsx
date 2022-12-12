import React, { useEffect, useState } from "react";
import {
  CommentsBoardContainerStyled,
  CommentsBoardStyled,
} from "./CommentsBoard.styled";
import { IComment } from "../../store/userSlice";
import { SERVER_URL } from "../../constants/constants";
import { CommentBoardComment } from "./CommentBoardComment";

export const CommentsBoard: React.FC = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/comments`)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  return (
    <CommentsBoardContainerStyled>
      <CommentsBoardStyled>
        {comments.map((comment: IComment) => (
          <CommentBoardComment key={comment.id} comment={comment} />
        ))}
      </CommentsBoardStyled>
    </CommentsBoardContainerStyled>
  );
};
