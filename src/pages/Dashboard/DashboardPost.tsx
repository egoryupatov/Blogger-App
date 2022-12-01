import React from "react";
import { DashboardPostsList } from "./DashboardStyled";
import { Link } from "react-router-dom";
import { Post } from "../../store/userSlice";

interface DashboardPostProps {
  post: Post;
  onDeletePostClick: (id: number) => void;
  onUnhidePostClick: (id: number) => void;
  isBannedPosts: boolean;
}

export const DashboardPost: React.FC<DashboardPostProps> = (props) => {
  return (
    <DashboardPostsList key={props.post.id}>
      <Link to={`/posts/${props.post.id}`}>
        <p>{props.post.title}</p>
      </Link>

      {props.isBannedPosts ? (
        <span
          style={{ cursor: "pointer" }}
          className="material-symbols-outlined"
          onClick={() => {
            props.onUnhidePostClick(props.post.id);
          }}
        >
          undo
        </span>
      ) : (
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to={`/edit-post/${props.post.id}`}>
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
              props.onDeletePostClick(props.post.id);
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
