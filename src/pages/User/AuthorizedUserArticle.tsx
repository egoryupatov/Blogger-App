import React from "react";
import { DashboardPostsList } from "./UserStyled";
import { Link } from "react-router-dom";
import { IBlogPost } from "../../store/userSlice";

interface DashboardPostProps {
  article: IBlogPost;
  onDeleteArticleClick: (id: number) => void;
  onUnhideArticleClick: (id: number) => void;
  isBannedPosts: boolean;
}

export const AuthorizedUserArticle: React.FC<DashboardPostProps> = (props) => {
  return (
    <DashboardPostsList key={props.article.id}>
      <Link to={`/posts/${props.article.id}`}>
        <div>{props.article.title}</div>
      </Link>

      {props.isBannedPosts ? (
        <span
          style={{ cursor: "pointer" }}
          className="material-symbols-outlined"
          onClick={() => {
            props.onUnhideArticleClick(props.article.id);
          }}
        >
          undo
        </span>
      ) : (
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to={`/edit-post/${props.article.id}`}>
            <span
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              edit
            </span>
          </Link>

          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.onDeleteArticleClick(props.article.id);
            }}
            className="material-symbols-outlined"
          >
            delete
          </span>
        </div>
      )}
    </DashboardPostsList>
  );
};
