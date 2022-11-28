import React from "react";
import { IComment } from "../BlogPostsList/BlogPostsList";
import {
  CommentTitleAuthorStyled,
  CommentTitleStyled,
  CommentStyled,
  CommentTextStyled,
  CommentRatingStyled,
} from "./Comment.styled";

interface CommentProps {
  comment: IComment;
}

export const Comment: React.FC<CommentProps> = (props) => {
  return (
    <>
      <CommentStyled>
        <CommentTitleStyled>
          <CommentTitleAuthorStyled>
            <img src="/avatar.png" />
            <p>User Name</p>
          </CommentTitleAuthorStyled>

          <p>{/*{comment.timeAgo}*/} Long ago</p>
        </CommentTitleStyled>

        <CommentTextStyled>
          <p>{props.comment.text}</p>
          <CommentRatingStyled>
            <span
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              keyboard_arrow_down
            </span>
            <p>{props.comment.rating}</p>
            <span
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              keyboard_arrow_up
            </span>
          </CommentRatingStyled>
        </CommentTextStyled>
      </CommentStyled>
    </>
  );
};
