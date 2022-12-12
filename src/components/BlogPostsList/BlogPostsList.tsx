import React, { useEffect, useState } from "react";
import {
  BlogPostsListStyled,
  BlogPostTitleStyled,
  BlogPostBodyStyled,
  BlogPostTitleAuthorStyled,
  BlogPostFooterStyled,
  BlogPostCommentsStyled,
  BlogPostRatingStyled,
  BlogPostTitleMiddleStyled,
  BlogPostTitleEndStyled,
} from "./BlogPostsList.styled";
import { Link, useLocation } from "react-router-dom";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { SERVER_URL } from "../../constants/constants";
import { ThreeDotsMenu } from "../ThreeDotsMenu/ThreeDotsMenu";
import { getCategoryName } from "../../utils/getCategoryName";
import { IBlogPost } from "../../store/userSlice";
import {
  PositiveRatingStyled,
  NegativeRatingStyled,
} from "../../styles/general.styled";

export const BlogPostsList: React.FC = () => {
  // вынести в редакс получение постов
  //сделать кастомный хук нау увеличение и уменьшение рейтинга поста

  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);
  const location = useLocation();

  useEffect(() => {
    location.pathname !== "/"
      ? fetch(`${SERVER_URL}${location.pathname}`)
          .then((response) => response.json())
          .then((posts) => setBlogPosts(posts))
      : fetch(`${SERVER_URL}/posts/all`)
          .then((response) => response.json())
          .then((posts) => setBlogPosts(posts));
  }, [location]);

  const [isThreeDotsMenuActive, setIsThreeDotsMenuActive] =
    useState<boolean>(false);

  const onPostRatingIncrement = (postID: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id: postID }),
    };

    fetch(`${SERVER_URL}/posts/rating/increment`, options);

    setBlogPosts(
      blogPosts.map((blogPost: IBlogPost) => {
        if (blogPost.id === postID) {
          return { ...blogPost, rating: blogPost.rating + 1 };
        }
        return blogPost;
      })
    );
  };
  const onPostRatingDecrement = (blogPostId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id: blogPostId }),
    };

    fetch(`${SERVER_URL}/posts/rating/decrement`, options);

    setBlogPosts(
      blogPosts.map((blogPost: IBlogPost) => {
        if (blogPost.id === blogPostId) {
          return { ...blogPost, rating: blogPost.rating - 1 };
        }
        return blogPost;
      })
    );
  };

  const onPostHideClick = (blogPostId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        postId: blogPostId,
        userId: Number(localStorage.getItem("id")),
      }),
    };

    fetch(`${SERVER_URL}/users/hide`, options).then((response) => {
      setBlogPosts(
        blogPosts.filter((blogPost: IBlogPost) => {
          return blogPost.id != blogPostId;
        })
      );

      setIsThreeDotsMenuActive((prevState) => !prevState);
    });
  };

  const onThreeDotsClick = () => {
    setIsThreeDotsMenuActive((prevState) => !prevState);
  };

  return (
    <>
      {blogPosts.map((blogPost: IBlogPost) => (
        <BlogPostsListStyled key={blogPost.id}>
          <div>
            <BlogPostTitleStyled>
              <BlogPostTitleAuthorStyled>
                <img src={blogPost.categoryImage} />

                <Link to={`/posts/${blogPost.category.name}`}>
                  <p style={{ fontWeight: "500" }}>
                    {getCategoryName(blogPost.category.name)}
                  </p>
                </Link>
              </BlogPostTitleAuthorStyled>

              <BlogPostTitleMiddleStyled>
                <Link to={`/user/${blogPost.author.id}`}>
                  <div>{blogPost.author.login}</div>
                </Link>
                <div>{getTimeAgo(blogPost.publishDate)}</div>
              </BlogPostTitleMiddleStyled>
              <BlogPostTitleEndStyled>
                <img onClick={onThreeDotsClick} src={"/dots.svg"} />
                {isThreeDotsMenuActive ? (
                  <ThreeDotsMenu
                    onPostHideClick={() => onPostHideClick(blogPost.id)}
                  />
                ) : null}
              </BlogPostTitleEndStyled>
            </BlogPostTitleStyled>

            <BlogPostBodyStyled>
              <Link to={`/posts/${blogPost.category.name}/${blogPost.id}`}>
                <h1>{blogPost.title}</h1>
              </Link>
              <p>{blogPost.description}</p>
              <img src={blogPost.postImage} />
            </BlogPostBodyStyled>

            <BlogPostFooterStyled>
              <Link
                to={`/posts/${blogPost.category.name}/${blogPost.id}#comments`}
              >
                <BlogPostCommentsStyled>
                  <span className="material-symbols-outlined">
                    mode_comment
                  </span>
                  <span>{blogPost.comments.length}</span>
                </BlogPostCommentsStyled>
              </Link>
              <BlogPostRatingStyled>
                <span
                  onClick={() => onPostRatingDecrement(blogPost.id)}
                  style={{ cursor: "pointer" }}
                  className="material-symbols-outlined"
                >
                  keyboard_arrow_down
                </span>

                {blogPost.rating > 0 ? (
                  <PositiveRatingStyled>{blogPost.rating}</PositiveRatingStyled>
                ) : (
                  <NegativeRatingStyled>{blogPost.rating}</NegativeRatingStyled>
                )}

                <span
                  onClick={() => onPostRatingIncrement(blogPost.id)}
                  style={{ cursor: "pointer" }}
                  className="material-symbols-outlined"
                >
                  keyboard_arrow_up
                </span>
              </BlogPostRatingStyled>
            </BlogPostFooterStyled>
          </div>
        </BlogPostsListStyled>
      ))}
    </>
  );
};
