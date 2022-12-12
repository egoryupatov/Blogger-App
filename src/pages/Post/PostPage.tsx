import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getPostComments,
  IComment,
  selectPostComments,
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

export const PostPage: React.FC = () => {
  const dispatch = useDispatch();

  useGetComments();

  const comments = useAppSelector(selectPostComments);

  const blogPost = useGetBlogPost();

  // перенести как минимум комментарии в redux чтобы всегда иметь доступ к их стейту
  //а потом убрать лишний код и оставить только кастомный хук

  const params = useParams();

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
  const onCommentAdd = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    };

    fetch(`${SERVER_URL}/comments/${params.id}`, options).then(
      (response) => /*setComments(*/ [...comments, newComment] /*)*/
    );
  };

  const onCommentRatingIncrement = (commentID: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };

    fetch(`${SERVER_URL}/comments/${commentID}/increment`, options);

    const increment = (comment: IComment): IComment => {
      if (comment.id === commentID) {
        return { ...comment, rating: comment.rating + 1 };
      }
      return { ...comment, children: comment.children.map(increment) };
    };

    // переделать на отдельный экшен увеличения и уменьшения рейтинга и пофиксить хук useCommentRatingDecrement

    dispatch(
      getPostComments(
        comments.map((comment: IComment) => {
          return increment(comment);
        })
      )
    );
  };

  const onCommentRatingDecrement = (commentID: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };

    fetch(`${SERVER_URL}/comments/${commentID}/decrement`, options);

    const decrement = (comment: IComment): IComment => {
      if (comment.id === commentID) {
        return { ...comment, rating: comment.rating - 1 };
      }
      return { ...comment, children: comment.children.map(decrement) };
    };

    //сделать отдельный экшн для понижения рейтинга

    dispatch(
      getPostComments(
        comments.map((comment: IComment) => {
          return decrement(comment);
        })
      )
    );
  };

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
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "end",
                width: "100%",
              }}
            >
              <ButtonStyled onClick={onCommentAdd}>Add a comment</ButtonStyled>
            </div>
          </TextFormStyled>

          <span id="comments"></span>
          {comments.map((comment: IComment) => (
            <Comment
              key={comment.id}
              comment={comment}
              comments={comments}
              /*setComments={setComments}*/
              onCommentRatingIncrement={onCommentRatingIncrement}
              onCommentRatingDecrement={onCommentRatingDecrement}
            />
          ))}
        </PostPageComments>
      </WrapperStyled>
      <CommentsBoard />
    </MainContainerStyled>
  );
};
