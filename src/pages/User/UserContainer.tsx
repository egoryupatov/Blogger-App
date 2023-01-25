import React, { useEffect } from "react";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import {
  deleteBlogPost,
  getUserInfo,
  selectAuthorizedUserInfo,
  selectIsUserLoggedIn,
  selectUserInfo,
} from "../../store/userSlice";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { User } from "./User";

export const UserContainer: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userInfo = useAppSelector(selectUserInfo);
  const authorizedUserInfo = useAppSelector(selectAuthorizedUserInfo);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

  useEffect(() => {
    fetch(`${SERVER_URL}/users/info/${params.id}`)
      .then((response) => response.json())
      .then((user) => dispatch(getUserInfo(user)));
  }, []);

  const handleDeleteBlogPostClick = (blogPostId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ id: blogPostId }),
    };

    fetch(`${SERVER_URL}/posts`, options).then((response) =>
      dispatch(deleteBlogPost(blogPostId))
    );
  };

  const handleUnhideBlogPostClick = (blogPostId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        postId: blogPostId,
        userId: Number(localStorage.getItem("id")),
      }),
    };

    fetch(`${SERVER_URL}/users/unhide`, options).then((response) =>
      userInfo.hiddenBlogPosts?.filter(
        (hiddenBlogPost) => hiddenBlogPost.id !== blogPostId
      )
    );
  };

  return (
    <User
      userInfo={userInfo}
      params={params}
      isUserLoggedIn={isUserLoggedIn}
      authorizedUserInfo={authorizedUserInfo}
      onDeleteBlogPostClick={handleDeleteBlogPostClick}
      onUnhideBlogPostClick={handleUnhideBlogPostClick}
    />
  );
};
