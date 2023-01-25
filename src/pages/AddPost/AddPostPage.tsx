import React from "react";
import {
  AddPostStyled,
  AddPostWrapperStyled,
  ButtonsContainerStyled,
} from "./AddPostPage.styled";
import {
  ButtonStyled,
  InputStyled,
} from "../../components/Navbar/Navbar.styled";
import { MainContainerStyled } from "../../styles/general.styled";
import { AddPostPageProps } from "./AddPostPage.types";

export const AddPostPage: React.FC<AddPostPageProps> = (props) => {
  return (
    <MainContainerStyled>
      <AddPostWrapperStyled>
        <AddPostStyled>
          <h1>Add a new post</h1>

          <label htmlFor="category">Choose a category:</label>
          <select id="category" onChange={props.onCategorySelect}>
            <option value="1">Business</option>
            <option value="2">Health</option>
            <option value="3">Travel</option>
            <option value="4">Entertainment</option>
          </select>

          <label htmlFor="title">Title:</label>
          <input
            onChange={props.onTitleChange}
            type="text"
            id="title"
            placeholder="Enter the post title"
          />

          <label htmlFor="description">Description:</label>
          <textarea
            onChange={props.onDescriptionChange}
            id="description"
            placeholder="Enter the post description"
          />

          <label htmlFor="text">Text:</label>
          <textarea
            onChange={props.onTextChange}
            id="text"
            placeholder="Enter the post text"
          />

          <ButtonsContainerStyled>
            <ButtonStyled onClick={props.onAddPostClick}>
              <button>Add a post</button>
            </ButtonStyled>

            <InputStyled>
              <input
                style={{ display: "none" }}
                onChange={props.onPostImageAttach}
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
