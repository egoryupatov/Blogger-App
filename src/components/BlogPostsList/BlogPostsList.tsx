import React, { useEffect, useState } from "react";
import {
  BlogPostStyled,
  BlogPostTitleStyled,
  BlogPostBodyStyled,
  BlogPostTitleAuthorStyled,
  BlogPostFooterStyled,
  BlogPostCommentsStyled,
  BlogPostRatingStyled,
} from "./BlogPost.styled";

interface PostInfo {
  user: string;
  category: string;
  time: string;
  avatar: string;
  postImage: string;
  title: string;
  description: string;
  id: number;
  comments: number;
  rating: number;
}

export const BlogPostsList: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <BlogPostStyled>
      {posts.map((elem: PostInfo) => (
        <>
          <BlogPostTitleStyled>
            <BlogPostTitleAuthorStyled>
              <img src={elem.avatar} />
              <p>
                {elem.user} in {elem.category}
              </p>
            </BlogPostTitleAuthorStyled>

            <p>{elem.time} ago</p>
          </BlogPostTitleStyled>

          <BlogPostBodyStyled>
            <h1>{elem.title}</h1>
            <p>{elem.description}</p>
            <img src={elem.postImage} />
          </BlogPostBodyStyled>

          <BlogPostFooterStyled>
            <BlogPostCommentsStyled>
              <span className="material-symbols-outlined">mode_comment</span>
              <span>{elem.comments}</span>
            </BlogPostCommentsStyled>
            <BlogPostRatingStyled>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
              {elem.rating}
              <span className="material-symbols-outlined">
                keyboard_arrow_up
              </span>
            </BlogPostRatingStyled>
          </BlogPostFooterStyled>
        </>
      ))}
    </BlogPostStyled>
  );
};
