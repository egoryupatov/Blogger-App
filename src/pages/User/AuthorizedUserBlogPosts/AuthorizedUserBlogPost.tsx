import React from "react";
import { DashboardPostsList } from "../User.styled";
import { Link } from "react-router-dom";
import { IconsContainerStyled } from "./AuthorizedUserBlogPosts.styled";
import { AuthorizedUserBlogPostProps } from "./AuthorizedUserBlogPost.types";

export const AuthorizedUserBlogPost: React.FC<AuthorizedUserBlogPostProps> = (
  props
) => {
  return (
    <DashboardPostsList key={props.blogPost.id}>
      <Link to={`/posts/${props.blogPost.category.name}/${props.blogPost.id}`}>
        <div>{props.blogPost.title}</div>
      </Link>

      {props.isBannedPosts ? (
        <IconsContainerStyled>
          <span
            className="material-symbols-outlined"
            onClick={() => {
              props.onUnhideBlogPostClick(props.blogPost.id);
            }}
          >
            undo
          </span>
        </IconsContainerStyled>
      ) : (
        <IconsContainerStyled>
          <Link to={`/edit-post/${props.blogPost.id}`}>
            <span className="material-symbols-outlined">edit</span>
          </Link>

          <span
            onClick={() => {
              props.onDeleteBlogPostClick(props.blogPost.id);
            }}
            className="material-symbols-outlined"
          >
            delete
          </span>
        </IconsContainerStyled>
      )}
    </DashboardPostsList>
  );
};
