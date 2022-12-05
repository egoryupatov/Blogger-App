import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IComment } from "../../store/userSlice";
import { SERVER_URL } from "../../constants/constants";
import {
  MainContainerStyled,
  WrapperStyled,
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

export const PostPage: React.FC = () => {
  const params = useParams();

  useEffect(() => {
    fetch(`${SERVER_URL}/posts/${params.category}/${params.id}`).then(
      (response) =>
        response.json().then((response) => setSelectedPost(response))
    );
  }, []);

  useEffect(() => {
    fetch(`${SERVER_URL}/comments/${params.id}`).then((response) =>
      response.json().then((response) => setComments(response))
    );
  }, []);

  const [selectedPost, setSelectedPost] = useState({
    category: {
      name: "",
    },
    author: {
      login: "",
      avatar: "",
      id: 0,
    },
    categoryImage: "",
    title: "",
    description: "",
    rating: 0,
    postImage: "",
    text: "",
    publishDate: new Date(),
  });

  const [comments, setComments] = useState<any>([]);

  const [newComment, setNewComment] = useState({
    id: 0,
    text: "",
    rating: 0,
    author: {
      login: "",
      avatar: "",
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

    fetch(`${SERVER_URL}/comments/${params.id}`, options).then((response) =>
      setComments([...comments, newComment])
    );
  };

  const onCommentRatingIncrement = (commentID: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id: commentID }),
    };

    fetch(`${SERVER_URL}/comments/rating/increment`, options);

    setComments(
      comments.map((comment: IComment) => {
        if (comment.id === commentID) {
          return { ...comment, rating: comment.rating + 1 };
        }
        return comment;
      })
    );
  };

  const onCommentRatingDecrement = (commentID: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id: commentID }),
    };

    fetch(`${SERVER_URL}/comments/rating/decrement`, options);

    setComments(
      comments.map((comment: IComment) => {
        if (comment.id === commentID) {
          return { ...comment, rating: comment.rating - 1 };
        }
        return comment;
      })
    );
  };

  return (
    <MainContainerStyled>
      <Categories />
      <WrapperStyled>
        <PostPageStyled>
          <BlogPostTitleStyled>
            <BlogPostTitleAuthorStyled>
              <img src={selectedPost.categoryImage} />
              <Link to={`/posts/${selectedPost.category.name}`}>
                <p style={{ fontWeight: "500" }}>
                  {getCategoryName(selectedPost.category.name)}
                </p>
              </Link>
              <Link to={`/user/${selectedPost.author.id}`}>
                <p>{selectedPost.author.login}</p>
              </Link>
              <p>{getTimeAgo(selectedPost.publishDate)}</p>
            </BlogPostTitleAuthorStyled>
          </BlogPostTitleStyled>

          <BlogPostBodyStyled>
            <h1>{selectedPost.title}</h1>
            <p>{selectedPost.description}</p>
            <img src={selectedPost.postImage} />
            <p>{selectedPost.text}</p>
          </BlogPostBodyStyled>

          <BlogPostFooterStyled>
            <BlogPostCommentsStyled>
              <span className="material-symbols-outlined">mode_comment</span>
              <span>{comments.length}</span>
            </BlogPostCommentsStyled>
            <BlogPostRatingStyled>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
              {selectedPost.rating > 0 ? (
                <p style={{ color: "#2EA839" }}>{selectedPost.rating}</p>
              ) : (
                <p style={{ color: "red" }}>{selectedPost.rating}</p>
              )}

              <span className="material-symbols-outlined">
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
              comment={comment}
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
