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
          to={`/posts/${props.comment.blogPost.category.name}/${props.comment.blogPost.id}`}
        >
          <div style={{ fontWeight: "bold" }}>
            {props.comment.blogPost.title}
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
          <img src={props.comment.user.avatar} />
          <Link to={`/user/${props.comment.user.id}`}>
            <div>{props.comment.user.login}</div>
          </Link>
          <div>{getTimeAgo(props.comment.publishDate)}</div>
        </div>
        <div>{props.comment.rating}</div>
      </UserCommentAuthorInfoStyled>
      <div>{props.comment.text}</div>
    </UserCommentStyled>
  );
};
