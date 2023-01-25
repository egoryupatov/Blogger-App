import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";
import { AddPostPage } from "./AddPostPage";

export const AddPostPageContainer: React.FC = () => {
  const [newBlogPost, setNewBlogPost] = useState({
    user: Number(localStorage.getItem("id")),
    category: 1,
    time: new Date(),
    image: "",
    title: "",
    description: "",
    text: "",
  });

  const [attachedImage, setAttachedImage] = useState<string>("");
  const [attachedImageName, setAttachedImageName] = useState<string>("");
  const navigate = useNavigate();

  const handleTitleChange = (e: any) => {
    setNewBlogPost({ ...newBlogPost, title: e.target.value });
  };

  const handleTextChange = (e: any) => {
    setNewBlogPost({ ...newBlogPost, text: e.target.value });
  };

  const handleDescriptionChange = (e: any) => {
    setNewBlogPost({ ...newBlogPost, description: e.target.value });
  };

  const handleCategorySelect = (e: any) => {
    setNewBlogPost({ ...newBlogPost, category: e.target.value });
  };

  const handlePostImageAttach = (e: any) => {
    setAttachedImage(e.target.files[0]);
    setAttachedImageName(e.target.files[0].name);
  };

  const handleAddPostClick = async () => {
    const formData = new FormData();
    formData.append("file", attachedImage, attachedImageName);

    const response = await fetch(`${SERVER_URL}/posts/image`, {
      method: "POST",
      body: formData,
    });

    const imageURL = await response.json();

    await fetch(`${SERVER_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        ...newBlogPost,
        image: `${SERVER_URL}/pictures/${imageURL}`,
      }),
    }).then((response) => navigate("/"));
  };

  return (
    <AddPostPage
      onCategorySelect={handleCategorySelect}
      onTitleChange={handleTitleChange}
      onDescriptionChange={handleDescriptionChange}
      onTextChange={handleTextChange}
      onAddPostClick={handleAddPostClick}
      onPostImageAttach={handlePostImageAttach}
    />
  );
};
