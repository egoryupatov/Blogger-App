import React, { useState } from "react";
import {
  AddPostStyled,
  AddPostWrapperStyled,
  ButtonsContainerStyled,
} from "./AddPostPage.styled";
import { MainContainerStyled } from "../../styles/general.styled";
import {
  ButtonStyled,
  InputStyled,
} from "../../components/Navbar/Navbar.styled";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

export const AddPostPage: React.FC = () => {
  const [newBlogPost, setNewBlogPost] = useState({
    author: Number(localStorage.getItem("id")),
    category: 1,
    time: new Date(),
    postImage: "",
    title: "",
    description: "",
    text: "",
  });

  const [attachedImage, setAttachedImage] = useState<string>("");
  const [attachedImageName, setAttachedImageName] = useState<string>("");

  const navigate = useNavigate();

  const onTitleChange = (e: any) => {
    setNewBlogPost({ ...newBlogPost, title: e.target.value });
  };

  const onTextChange = (e: any) => {
    setNewBlogPost({ ...newBlogPost, text: e.target.value });
  };

  const onDescriptionChange = (e: any) => {
    setNewBlogPost({ ...newBlogPost, description: e.target.value });
  };

  const onCategorySelect = (e: any) => {
    setNewBlogPost({ ...newBlogPost, category: e.target.value });
  };

  const onPostImageAttach = (e: any) => {
    setAttachedImage(e.target.files[0]);
    setAttachedImageName(e.target.files[0].name);
  };

  const onAddPostClick = async () => {
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
        postImage: `${SERVER_URL}/pictures/${imageURL}`,
      }),
    }).then((response) => navigate("/"));
  };

  return (
    <MainContainerStyled>
      <AddPostWrapperStyled>
        <AddPostStyled>
          <h1>Add a new post</h1>

          <label htmlFor="category">Choose a category:</label>
          <select id="category" onChange={onCategorySelect}>
            <option value="1">Business</option>
            <option value="2">Health</option>
            <option value="3">Travel</option>
            <option value="4">Entertainment</option>
          </select>

          <label htmlFor="title">Title:</label>
          <input
            onChange={onTitleChange}
            type="text"
            id="title"
            placeholder="Enter the post title"
          />

          <label htmlFor="description">Description:</label>
          <textarea
            onChange={onDescriptionChange}
            id="description"
            placeholder="Enter the post description"
          />

          <label htmlFor="text">Text:</label>
          <textarea
            onChange={onTextChange}
            id="text"
            placeholder="Enter the post text"
          />

          <ButtonsContainerStyled>
            <ButtonStyled onClick={onAddPostClick}>
              <button>Add a post</button>
            </ButtonStyled>

            <InputStyled>
              <input
                style={{ display: "none" }}
                onChange={onPostImageAttach}
                type="file"
              />
              <span>Attach an image</span>
            </InputStyled>
          </ButtonsContainerStyled>
        </AddPostStyled>
      </AddPostWrapperStyled>
    </MainContainerStyled>
  );
};
