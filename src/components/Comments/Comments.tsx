import React from "react";
import { IComments, IPostInfo } from "../BlogPostsList/BlogPostsList";
import {
  CommentStyled,
  CommentTitleAuthorStyled,
  CommentTitleStyled,
} from "./Comment.styled";

interface CommentProps {
  selectedPost: IPostInfo | undefined;
}

export const Comment: React.FC<CommentProps> = (props) => {
  return (
    <>
      {props.selectedPost?.comments.map((comment: IComments) => (
        <CommentStyled>
          <CommentTitleStyled>
            <CommentTitleAuthorStyled>
              <img src={comment.userAvatar} />
              <p>{comment.user}</p>
            </CommentTitleAuthorStyled>

            <p>{comment.timeAgo} ago</p>
          </CommentTitleStyled>

          <p>{comment.text}</p>
        </CommentStyled>
      ))}
    </>
  );
};
