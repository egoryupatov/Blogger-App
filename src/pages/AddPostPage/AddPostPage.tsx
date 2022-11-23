import React, { useState } from "react";
import { AddPostStyled } from "./AddPostPage.styled";
import { MainContainerStyled } from "../../styles/general.styled";
import { WrapperStyled } from "../../styles/general.styled";
import {
  ButtonStyled,
  InputStyled,
} from "../../components/Navbar/Navbar.styled";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

export const AddPostPage: React.FC = () => {
  const [newPost, setNewPost] = useState({
    author: Number(localStorage.getItem("id")),
    category: "Business",
    categoryImage: "/category1.png",
    time: new Date(),
    avatar: "-",
    postImage: "",
    title: "",
    description: "",
    numberOfComments: 0,
    rating: 0,
    text: "",
  });

  const [attachedImage, setAttachedImage] = useState("");
  const [attachedImageName, setAttachedImageName] = useState("");

  const navigate = useNavigate();

  const onTitleChange = (e: any) => {
    setNewPost({ ...newPost, title: e.target.value });
  };

  const onDescriptionChange = (e: any) => {
    setNewPost({ ...newPost, description: e.target.value });
  };

  const onCategorySelect = (e: any) => {
    setNewPost({ ...newPost, category: e.target.value });
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
        ...newPost,
        postImage: `${SERVER_URL}/pictures/${imageURL}`,
      }),
    });

    navigate("/");
  };

  console.log(newPost.postImage);

  return (
    <MainContainerStyled>
      <WrapperStyled>
        <AddPostStyled>
          <h1>Add a new post</h1>

          <label htmlFor="category">Choose a category:</label>
          <select id="category" onChange={onCategorySelect}>
            <option value="Business">Design</option>
            <option value="Health">JavaScript</option>
            <option value="Entertainment">Node.js</option>
            <option value="Travel">Node.js</option>
          </select>

          <label htmlFor="title">Title:</label>
          <input
            onChange={onTitleChange}
            type="text"
            id="title"
            placeholder="Enter the post title"
          />

          <label htmlFor="description">Text:</label>
          <textarea
            onChange={onDescriptionChange}
            id="description"
            placeholder="Enter the post text"
          />

          <div style={{ display: "flex", gap: "10px" }}>
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
          </div>
        </AddPostStyled>
      </WrapperStyled>
    </MainContainerStyled>
  );
};
