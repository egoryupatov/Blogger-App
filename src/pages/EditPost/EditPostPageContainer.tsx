import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";
import { deleteBlogPost } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { EditPostPage } from "./EditPostPage";

export const EditPostPageContainer: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${SERVER_URL}/posts/${params.id}`)
      .then((response) => response.json())
      .then((response) => setEditedPost(response));
  }, []);

  const [editedPost, setEditedPost] = useState({
    user: Number(localStorage.getItem("id")),
    category: 1, //категория должна быть изначальная
    time: new Date(), // дата тоже
    title: "",
    description: "",
    text: "",
  });

  const dispatch = useDispatch();

  const handleTitleChange = (e: any) => {
    setEditedPost({ ...editedPost, title: e.target.value });
  };

  const handleDescriptionChange = (e: any) => {
    setEditedPost({ ...editedPost, description: e.target.value });
  };

  /*const onImageUpload = (e: any) => {
      setNewPost({ ...newPost, postImage: e.target.value });
    };*/

  const handleCategorySelect = (e: any) => {
    setEditedPost({ ...editedPost, category: e.target.value });
  };

  const handleUpdatePostClick = () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(editedPost),
    };

    fetch(`http://localhost:3005/posts/${params.id}`, options).then(
      (response) => navigate("/dashboard")
    );
  };

  const handleDeletePostClick = () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ id: params.id }),
    };

    fetch(`${SERVER_URL}/posts`, options)
      .then(() => dispatch(deleteBlogPost(Number(params.id))))
      .then(() => navigate("/dashboard"));
  };

  return (
    <EditPostPage
      onCategorySelect={handleCategorySelect}
      editedPost={editedPost}
      onTitleChange={handleTitleChange}
      onDescriptionChange={handleDescriptionChange}
      onUpdatePostClick={handleUpdatePostClick}
      onDeletePostClick={handleDeletePostClick}
    />
  );
};
