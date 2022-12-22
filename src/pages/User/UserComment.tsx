import React from "react";
import { IComment } from "../../store/userSlice";
import {
  UserCommentStyled,
  UserCommentTitleStyled,
  UserCommentAuthorInfoStyled,
} from "./UserStyled";
import { Link } from "react-router-dom";
import { getTimeAgo } from "../../utils/getTimeAgo";

interface userCommentProps {
  comment: IComment;
  login: string;
}

export const UserComment: React.FC<userCommentProps> = (props) => {
  return (
    <UserCommentStyled>
      <UserCommentTitleStyled>
        <Link
          to={`/posts/${props.comment.article.category.name}/${props.comment.article.id}`}
        >
          <div style={{ fontWeight: "bold" }}>
            {props.comment.article.title}
          </div>
        </Link>
      </UserCommentTitleStyled>

      <UserCommentAuthorInfoStyled>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <img src={props.comment.author.avatar} />
          <Link to={`/user/${props.comment.author.id}`}>
            <div>{props.comment.author.login}</div>
          </Link>
          <div>{getTimeAgo(props.comment.publishDate)}</div>
        </div>
        <div>{props.comment.rating}</div>
      </UserCommentAuthorInfoStyled>
      <div>{props.comment.text}</div>
    </UserCommentStyled>
  );
};
