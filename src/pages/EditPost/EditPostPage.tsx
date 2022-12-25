import React, { useEffect, useState } from "react";
import { EditPostStyled, EditPostWrapperStyled } from "./EditPostPage.styled";
import { MainContainerStyled } from "../../styles/general.styled";
import { ButtonStyled } from "../../components/Navbar/Navbar.styled";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";
import { deleteBlogPost } from "../../store/userSlice";
import { useDispatch } from "react-redux";

export const EditPostPage: React.FC = () => {
  const params = useParams();

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
  const navigate = useNavigate();

  const onTitleChange = (e: any) => {
    setEditedPost({ ...editedPost, title: e.target.value });
  };

  const onDescriptionChange = (e: any) => {
    setEditedPost({ ...editedPost, description: e.target.value });
  };

  /*const onImageUpload = (e: any) => {
      setNewPost({ ...newPost, postImage: e.target.value });
    };*/

  const onCategorySelect = (e: any) => {
    setEditedPost({ ...editedPost, category: e.target.value });
  };

  const onUpdatePostClick = () => {
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

  const onDeletePostClick = () => {
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
    <MainContainerStyled>
      <EditPostWrapperStyled>
        <EditPostStyled>
          <h1>Edit post</h1>

          <label htmlFor="category">Choose a category:</label>
          <select
            id="category"
            onChange={onCategorySelect}
            defaultValue={editedPost.category}
          >
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
            value={editedPost.title}
          />

          <label htmlFor="description">Text:</label>
          <textarea
            onChange={onDescriptionChange}
            id="description"
            value={editedPost.description}
          />

          {/*<label htmlFor="image">Image:</label>
          <input
            onChange={onImageUpload}
            type="file"
            id="image"
            placeholder="Enter the post title"
          />*/}
          <div style={{ display: "flex", gap: "10px" }}>
            <ButtonStyled onClick={onUpdatePostClick}>
              <button>Update post</button>
            </ButtonStyled>
            <ButtonStyled onClick={onDeletePostClick}>
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
