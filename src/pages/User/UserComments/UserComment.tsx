import React from "react";
import {
  UserCommentStyled,
  UserCommentTitleStyled,
  UserCommentAuthorInfoStyled,
} from "../User.styled";
import { Link } from "react-router-dom";
import { getTimeAgo } from "../../../utils/getTimeAgo";
import { userCommentProps } from "./UserComments.types";

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
          <img src={props.comment.user.avatar} alt={""} />
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
