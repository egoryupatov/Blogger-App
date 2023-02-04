import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  selectAuthorizedUserInfo,
  selectBlogPost,
  selectLoginFormDisplayed,
  selectPostComments,
  selectUserInfo,
} from "../../store/userSlice";
import { useGetBlogPost } from "../../utils/useGetBlogPost";
import { useGetComments } from "../../utils/useGetComments";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { PostPage } from "./PostPage";
import { IBlogPost, IComment, IUser } from "../../types/general.types";

export const PostPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useGetComments();
  useGetBlogPost();

  const comments = useAppSelector(selectPostComments);
  const blogPost = useAppSelector(selectBlogPost);
  const authorizedUser = useAppSelector(selectAuthorizedUserInfo);
  const isLoginFormDisplayed = useAppSelector(selectLoginFormDisplayed);

  const [newComment, setNewComment] = useState<any>({
    text: "",
    blogPost: {
      id: params.id,
    },
    rating: 0,
    children: [],
    publishDate: new Date(),
  });
  console.log("newComment", newComment);

  const handleAddingComment = (event: any) => {
    setNewComment({
      ...newComment,
      text: event.target.value,
      user: {
        id: authorizedUser.id,
        avatar: authorizedUser.avatar,
        login: authorizedUser.login,
      },
    });
  };

  //добавление нового комментария в базу данных перестало работать потому что комментарии теперь идут деревом

  return (
    <PostPage
      blogPost={blogPost}
      handleAddingComment={handleAddingComment}
      dispatch={dispatch}
      comments={comments}
      isLoginFormDisplayed={isLoginFormDisplayed}
      params={params}
      newComment={newComment}
    />
  );
};
