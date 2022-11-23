import React, { useEffect, useState } from "react";
import { PostPageStyled } from "./PostPage.styled";
import { useLocation, useParams } from "react-router-dom";
import {
  IComments,
  IPostInfo,
} from "../../components/BlogPostsList/BlogPostsList";
import {
  MainContainerStyled,
  WrapperStyled,
} from "../../styles/general.styled";
import {
  BlogPostBodyStyled,
  BlogPostCommentsStyled,
  BlogPostFooterStyled,
  BlogPostRatingStyled,
  BlogPostTitleAuthorStyled,
  BlogPostTitleStyled,
} from "../../components/BlogPostsList/BlogPostsList.styled";
import { PostPageComments } from "./PostPage.styled";
import { Comments } from "../../components/Comments/Comments";
import { getTimeAgo } from "../../utils/getTimeAgo";

export const PostPage: React.FC = () => {
  const params = useParams();
  const [isPostFound, setIsPostFound] = useState(true);

  const [selectedPost, setSelectedPost] = useState<IPostInfo>();
  /*const [comment, setComment] = useState("");*/

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

  //Как побороть ошибку TS что объект может быть undefined?

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
              <span>{selectedPost?.numberOfComments}</span>
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
        {/*<PostPageComments>
          <h2>{selectedPost?.numberOfComments} comments</h2>
          <textarea id="description" placeholder="What are your thoughts?" />
          <button>Add a comment</button>
          <Comments selectedPost={selectedPost} />
        </PostPageComments>*/}
      </WrapperStyled>
    </MainContainerStyled>
  );
};
