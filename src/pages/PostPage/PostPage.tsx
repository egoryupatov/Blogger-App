import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IComment,
  IPostInfo,
} from "../../components/BlogPostsList/BlogPostsList";
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

export const PostPage: React.FC = () => {
  const params = useParams();
  const [isPostFound, setIsPostFound] = useState(true);

  const [selectedPost, setSelectedPost] = useState<IPostInfo>();
  const [comments, setComments] = useState<IComment[]>([]);
  const [newComment, setNewComment] = useState({
    text: "",
    rating: 0,
  });

  useEffect(() => {
    fetch(`http://localhost:3005/posts/${params.id}`)
      .then((response) => {
        if (response.status === 500) {
          throw new Error();
        } else {
          return response.json();
          setIsPostFound(true);
        }
      })
      .then((response) => setSelectedPost(response))
      .catch((error) => setIsPostFound(false));
  }, []);

  useEffect(() => {
    fetch(`${SERVER_URL}/comments/${params.id}`).then((response) =>
      response.json().then((response) => setComments(response))
    );
  }, []);

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

  return (
    <MainContainerStyled>
      <WrapperStyled>
        <PostPageStyled>
          <BlogPostTitleStyled>
            <BlogPostTitleAuthorStyled>
              <img src={selectedPost?.categoryImage} />
              <p style={{ fontWeight: "500" }}>{selectedPost?.category}</p>
              <p>{/*{selectedPost?.author.login}*/}</p>
            </BlogPostTitleAuthorStyled>

            {/* <p>{getTimeAgo(selectedPost!.time)}</p>*/}
          </BlogPostTitleStyled>

          <BlogPostBodyStyled>
            <h1>{selectedPost?.title}</h1>

            <p>{selectedPost?.description}</p>
            <img src={selectedPost?.postImage} />

            <p>{selectedPost?.text}</p>
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
              {selectedPost?.rating}
              <span className="material-symbols-outlined">
                keyboard_arrow_up
              </span>
            </BlogPostRatingStyled>
          </BlogPostFooterStyled>
        </PostPageStyled>
        <PostPageComments>
          <h2>Comments</h2>
          <textarea
            id="description"
            placeholder="What are your thoughts?"
            onChange={handleAddingComment}
          />
          <button onClick={onCommentAdd}>Add a comment</button>
          {comments.map((comment: IComment) => (
            <Comment comment={comment} />
          ))}
        </PostPageComments>
      </WrapperStyled>
    </MainContainerStyled>
  );
};
