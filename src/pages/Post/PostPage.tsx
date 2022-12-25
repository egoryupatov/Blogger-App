import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  IComment,
  selectBlogPost,
  selectLoginFormDisplayed,
  selectPostComments,
  setIsLoginFormDisplayed,
} from "../../store/userSlice";
import {
  MainContainerStyled,
  WrapperStyled,
} from "../../styles/general.styled";
import { PostPageComments } from "./PostPage.styled";
import { Comment } from "../../components/Comment/Comment";
import { Categories } from "../../components/Categories/Categories";
import { CommentsBoard } from "../../components/CommentsBoard/CommentsBoard";
import { ButtonStyled } from "../../styles/general.styled";
import { TextAreaStyled, TextFormStyled } from "../../styles/general.styled";
import { useGetBlogPost } from "../../utils/useGetBlogPost";
import { useGetComments } from "../../utils/useGetComments";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { onNewCommentAdd } from "../../utils/onNewCommentAdd";
import { onCommentRatingDecrement } from "../../utils/onCommentRatingDecrement";
import { onCommentRatingIncrement } from "../../utils/onCommentRatingIncrement";
import { BlogPost } from "../../components/BlogPostsList/BlogPost";

export const PostPage: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useGetComments();
  useGetBlogPost();

  const comments = useAppSelector(selectPostComments);
  const blogPost = useAppSelector(selectBlogPost);
  const isLoginFormDisplayed = useAppSelector(selectLoginFormDisplayed);

  const [newComment, setNewComment] = useState<any>({
    text: "",
    author: {
      id: Number(localStorage.getItem("id")),
    },
    article: {
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
    <MainContainerStyled>
      <Categories />
      <WrapperStyled>
        <BlogPost blogPost={blogPost} />

        {/* Вынести комментарии к посту к в отдельный компонент  */}

        <PostPageComments>
          <h2>Comments</h2>

          <TextFormStyled>
            <TextAreaStyled
              id="description"
              placeholder="What are your thoughts?"
              onChange={handleAddingComment}
            />

            {localStorage.getItem("token") ? (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "end",
                  width: "100%",
                }}
              >
                <ButtonStyled
                  hover="yes"
                  onClick={() => onNewCommentAdd(newComment, params, dispatch)}
                >
                  Add a comment
                </ButtonStyled>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "end",
                  width: "100%",
                }}
              >
                <ButtonStyled
                  hover="yes"
                  onClick={() => dispatch(setIsLoginFormDisplayed(true))}
                >
                  Add a comment
                </ButtonStyled>
              </div>
            )}

            {isLoginFormDisplayed ? <LoginForm /> : null}
          </TextFormStyled>

          <span id="comments"></span>
          {comments.map((comment: IComment) => (
            <Comment
              key={comment.id}
              comment={comment}
              comments={comments}
              onCommentRatingIncrement={() =>
                onCommentRatingIncrement(comment.id, dispatch)
              }
              onCommentRatingDecrement={() =>
                onCommentRatingDecrement(comment.id, dispatch)
              }
            />
          ))}
        </PostPageComments>
      </WrapperStyled>
      <CommentsBoard />
    </MainContainerStyled>
  );
};
