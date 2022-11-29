import React, { useEffect, useState } from "react";
import {
  CommentsBoardContainerStyled,
  CommentsBoardStyled,
} from "./CommentsBoard.styled";
import { IComment } from "../BlogPostsList/BlogPostsList";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { CommentBoardComment } from "./CommentBoardComment";

export const CommentsBoard: React.FC = () => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/comments`)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  return (
    <CommentsBoardContainerStyled>
      <CommentsBoardStyled>
        {comments.map((comment) => (
          <CommentBoardComment comment={comment} />
        ))}
      </CommentsBoardStyled>
    </CommentsBoardContainerStyled>
  );
};
