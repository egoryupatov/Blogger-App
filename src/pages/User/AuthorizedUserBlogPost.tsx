import React from "react";
import { DashboardPostsList } from "./UserStyled";
import { Link } from "react-router-dom";
import { IBlogPost } from "../../store/userSlice";
import { IconsContainerStyled } from "./AuthorizedUserBlogPostsList.styled";

interface DashboardPostProps {
  blogPost: IBlogPost;
  onDeleteArticleClick: (id: number) => void;
  onUnhideArticleClick: (id: number) => void;
  isBannedPosts: boolean;
}

export const AuthorizedUserBlogPost: React.FC<DashboardPostProps> = (props) => {
  console.log(props.blogPost);
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
              props.onUnhideArticleClick(props.blogPost.id);
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
              props.onDeleteArticleClick(props.blogPost.id);
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
