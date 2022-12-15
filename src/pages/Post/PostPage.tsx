import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  addNewComment,
  getPostComments,
  IComment,
  selectBlogPost,
  selectLoginFormDisplayed,
  selectPostComments,
  setIsLoginFormDisplayed,
} from "../../store/userSlice";
import { SERVER_URL } from "../../constants/constants";
import {
  MainContainerStyled,
  WrapperStyled,
  PositiveRatingStyled,
  NegativeRatingStyled,
} from "../../styles/general.styled";
import { PostPageStyled, PostPageComments } from "./PostPage.styled";
import {
  BlogPostTitleStyled,
  BlogPostBodyStyled,
  BlogPostTitleAuthorStyled,
  BlogPostFooterStyled,
  BlogPostCommentsStyled,
  BlogPostRatingStyled,
} from "../../components/BlogPostsList/BlogPostsList.styled";
import { Comment } from "../../components/Comment/Comment";
import { getCategoryName } from "../../utils/getCategoryName";
import { getTimeAgo } from "../../utils/getTimeAgo";
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
        <PostPageStyled>
          <BlogPostTitleStyled>
            <BlogPostTitleAuthorStyled>
              <img alt={""} src={blogPost.categoryImage} />
              <Link to={`/posts/${blogPost.category.name}`}>
                <p style={{ fontWeight: "500" }}>
                  {getCategoryName(blogPost.category.name)}
                </p>
              </Link>
              <Link to={`/user/${blogPost.author.id}`}>
                <p>{blogPost.author.login}</p>
              </Link>
              <p>{getTimeAgo(blogPost.publishDate)}</p>
            </BlogPostTitleAuthorStyled>
          </BlogPostTitleStyled>

          <BlogPostBodyStyled>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.description}</p>
            <img alt={""} src={blogPost.postImage} />
            <p>{blogPost.text}</p>
          </BlogPostBodyStyled>

          <BlogPostFooterStyled>
            <BlogPostCommentsStyled>
              <span className="material-symbols-outlined">mode_comment</span>
              <span>{comments.length}</span>
            </BlogPostCommentsStyled>
            <BlogPostRatingStyled>
              <span
                className="material-symbols-outlined"
                style={{ cursor: "pointer" }}
              >
                keyboard_arrow_down
              </span>
              {blogPost.rating > 0 ? (
                <PositiveRatingStyled>{blogPost.rating}</PositiveRatingStyled>
              ) : (
                <NegativeRatingStyled>{blogPost.rating}</NegativeRatingStyled>
              )}

              <span
                className="material-symbols-outlined"
                style={{ cursor: "pointer" }}
              >
                keyboard_arrow_up
              </span>
            </BlogPostRatingStyled>
          </BlogPostFooterStyled>
        </PostPageStyled>

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
              /*onCommentRatingIncrement={onCommentRatingIncrement}*/
              // onCommentRatingDecrement={onCommentRatingDecrement}
            />
          ))}
        </PostPageComments>
      </WrapperStyled>
      <CommentsBoard />
    </MainContainerStyled>
  );
};
