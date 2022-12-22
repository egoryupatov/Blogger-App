import React from "react";
import {
  CommentBoardCommentTitleStyled,
  CommentBoardCommentStyled,
} from "./CommentsBoard.styled";
import { getTimeAgoShort } from "../../utils/getTimeAgoShort";
import { Link } from "react-router-dom";
import { IComment } from "../../store/userSlice";

interface CommentProps {
  comment: IComment;
}

export const CommentBoardComment: React.FC<CommentProps> = (props) => {
  return (
    <CommentBoardCommentStyled key={props.comment.id}>
      <CommentBoardCommentTitleStyled>
        <div>
          <img src={props.comment.author.avatar} />
        </div>
        <Link to={`/user/${props.comment.author.id}`}>
          <div style={{ fontSize: "14px", fontWeight: "bold" }}>
            {props.comment.author.login}
          </div>
        </Link>
        <div style={{ fontSize: "12px" }}>
          {getTimeAgoShort(props.comment.publishDate)}
        </div>
      </CommentBoardCommentTitleStyled>

      <div style={{ fontSize: "16px" }}>
        {props.comment.text.length > 65
          ? props.comment.text.split("").splice(0, 65).join("") + "..."
          : props.comment.text}
      </div>
      <Link
        to={`/posts/${props.comment.article.category.name}/${props.comment.article.id}`}
      >
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>
          {props.comment.article.title.length > 35
            ? props.comment.article.title.split("").splice(0, 35).join("") +
              "..."
            : props.comment.article.title}
        </div>
      </Link>
    </CommentBoardCommentStyled>
  );
};
