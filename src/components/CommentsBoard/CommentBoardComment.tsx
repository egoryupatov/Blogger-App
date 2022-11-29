import React from "react";
import { IComment } from "../BlogPostsList/BlogPostsList";
import {
  CommentBoardCommentTitleStyled,
  CommentBoardCommentStyled,
} from "./CommentsBoard.styled";
import { getTimeAgoShort } from "../../utils/getTimeAgoShort";
import { Link } from "react-router-dom";

interface CommentProps {
  comment: IComment;
}

export const CommentBoardComment: React.FC<CommentProps> = (props) => {
  return (
    <CommentBoardCommentStyled key={props.comment.id}>
      <CommentBoardCommentTitleStyled>
        <p>
          <img src={props.comment.author.avatar} />
        </p>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>
          {props.comment.author.login}
        </p>
        <p style={{ fontSize: "12px" }}>
          {getTimeAgoShort(props.comment.publishDate)}
        </p>
      </CommentBoardCommentTitleStyled>

      {/*ссылка на пост не будет работать пока я не добавлю category как relations и не помещу категорию поста в урл перед id*/}

      <p style={{ fontSize: "16px" }}>{props.comment.text}</p>
      <Link to={`posts/${props.comment.article.id}`}>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>
          {props.comment.article.title}
        </p>
      </Link>
    </CommentBoardCommentStyled>
  );
};
