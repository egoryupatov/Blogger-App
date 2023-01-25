import React from "react";
import {
  CommentBoardCommentTitleStyled,
  CommentBoardCommentStyled,
  CommentBoardAuthorStyled,
  CommentBoardTimeAgoStyled,
  CommentBoardTextStyled,
  CommentBoardTitleStyled,
} from "./CommentsBoard.styled";
import { getTimeAgoShort } from "../../utils/getTimeAgoShort";
import { Link } from "react-router-dom";
import { CommentBoardCommentProps } from "./CommentBoardComment.types";

export const CommentBoardComment: React.FC<CommentBoardCommentProps> = (
  props
) => {
  return (
    <CommentBoardCommentStyled key={props.comment.id}>
      <CommentBoardCommentTitleStyled>
        <div>
          <img src={props.comment.user.avatar} alt={""} />
        </div>
        <Link to={`/user/${props.comment.user.id}`}>
          <CommentBoardAuthorStyled>
            {props.comment.user.login}
          </CommentBoardAuthorStyled>
        </Link>
        <CommentBoardTimeAgoStyled>
          {getTimeAgoShort(props.comment.publishDate)}
        </CommentBoardTimeAgoStyled>
      </CommentBoardCommentTitleStyled>

      <CommentBoardTextStyled>
        {props.comment.text.length > 65
          ? props.comment.text.split("").splice(0, 65).join("") + "..."
          : props.comment.text}
      </CommentBoardTextStyled>
      <Link
        to={`/posts/${props.comment.blogPost.category.name}/${props.comment.blogPost.id}`}
      >
        <CommentBoardTitleStyled>
          {props.comment.blogPost.title.length > 35
            ? props.comment.blogPost.title.split("").splice(0, 35).join("") +
              "..."
            : props.comment.blogPost.title}
        </CommentBoardTitleStyled>
      </Link>
    </CommentBoardCommentStyled>
  );
};
