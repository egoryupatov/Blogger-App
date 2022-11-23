import React from "react";
import { IComments, IPostInfo } from "../BlogPostsList/BlogPostsList";
import {
  CommentsStyled,
  CommentTitleAuthorStyled,
  CommentTitleStyled,
} from "./Comments.styled";

interface CommentProps {
  selectedPost: IPostInfo | undefined;
}

export const Comments: React.FC<CommentProps> = (props) => {
  return (
    <>
      {props.selectedPost?.comments.map((comment: IComments) => (
        <CommentsStyled>
          <CommentTitleStyled>
            <CommentTitleAuthorStyled>
              <img src={comment.userAvatar} />
              <p>{comment.user}</p>
            </CommentTitleAuthorStyled>

            <p>{comment.timeAgo} ago</p>
          </CommentTitleStyled>

          <p>{comment.text}</p>
        </CommentsStyled>
      ))}
    </>
  );
};
