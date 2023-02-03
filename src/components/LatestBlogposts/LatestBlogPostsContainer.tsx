import React, { useEffect } from "react";
import { ContainerStyled } from "../../styles/general.styled";
import { SERVER_URL } from "../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getLatestBlogPosts,
  getMoreLatestBlogPosts,
  selectLatestBlogPosts,
} from "../../store/userSlice";
import {
  LatestBlogPostComments,
  LatestBlogPostsListStyled,
  LatestBlogPostStyled,
  LatestBlogPostTitle,
  ShowMoreStyled,
} from "./LatestBlogPosts.styled";
import { IBlogPost } from "../../types/general.types";
import { Link } from "react-router-dom";
import { LatestBlogPosts } from "./LatestBlogPosts";

export const LatestBlogPostsContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`${SERVER_URL}/posts/latest`).then((answer) =>
      answer.json().then((answer) => dispatch(getLatestBlogPosts(answer)))
    );
  }, []);

  const onShowMoreClick = () => {
    fetch(`${SERVER_URL}/posts/latest`).then((answer) =>
      answer.json().then((answer) => dispatch(getMoreLatestBlogPosts(answer)))
    );
  };

  const latestPosts = useAppSelector(selectLatestBlogPosts);

  return (
    <LatestBlogPosts
      onShowMoreClick={onShowMoreClick}
      latestPosts={latestPosts}
    />
  );
};
