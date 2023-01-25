import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  selectBlogPost,
  selectLoginFormDisplayed,
  selectPostComments,
} from "../../store/userSlice";
import { useGetBlogPost } from "../../utils/useGetBlogPost";
import { useGetComments } from "../../utils/useGetComments";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { PostPage } from "./PostPage";

export const PostPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useGetComments();
  useGetBlogPost();

  const comments = useAppSelector(selectPostComments);
  const blogPost = useAppSelector(selectBlogPost);
  const isLoginFormDisplayed = useAppSelector(selectLoginFormDisplayed);

  const [newComment, setNewComment] = useState<any>({
    text: "",
    user: {
      id: Number(localStorage.getItem("id")),
    },
    blogPost: {
      id: 0,
      title: "",
    },
    publishDate: new Date(),
  });

  const handleAddingComment = (event: any) => {
    setNewComment({ ...newComment, text: event.target.value });
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
