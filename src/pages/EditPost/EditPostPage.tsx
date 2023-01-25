import React from "react";
import { MainContainerStyled } from "../../styles/general.styled";
import { EditPostStyled, EditPostWrapperStyled } from "./EditPostPage.styled";
import { ButtonStyled } from "../../components/Navbar/Navbar.styled";
import { useNavigate } from "react-router-dom";
import { EditPostPageProps } from "./EditPostPage.types";

export const EditPostPage: React.FC<EditPostPageProps> = (props) => {
  const navigate = useNavigate();

  return (
    <MainContainerStyled>
      <EditPostWrapperStyled>
        <EditPostStyled>
          <h1>Edit post</h1>

          <label htmlFor="category">Choose a category:</label>
          <select
            id="category"
            onChange={props.onCategorySelect}
            defaultValue={props.editedPost.category}
          >
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
            value={props.editedPost.title}
          />

          <label htmlFor="description">Text:</label>
          <textarea
            onChange={props.onDescriptionChange}
            id="description"
            value={props.editedPost.description}
          />

          {/*<label htmlFor="image">Image:</label>
          <input
            onChange={onImageUpload}
            type="file"
            id="image"
            placeholder="Enter the post title"
          />*/}

          <div style={{ display: "flex", gap: "10px" }}>
            <ButtonStyled onClick={props.onUpdatePostClick}>
              <button>Update post</button>
            </ButtonStyled>
            <ButtonStyled onClick={props.onDeletePostClick}>
              <button>Delete post</button>
            </ButtonStyled>
            <ButtonStyled onClick={() => navigate("/dashboard")}>
              <button>Cancel</button>
            </ButtonStyled>
          </div>
        </EditPostStyled>
      </EditPostWrapperStyled>
    </MainContainerStyled>
  );
};
