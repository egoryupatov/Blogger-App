import React, { useEffect, useRef, useState } from "react";
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
import { Link, useLocation, useParams } from "react-router-dom";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { SERVER_URL } from "../../constants/constants";
import { ThreeDotsMenu } from "../ThreeDotsMenu/ThreeDotsMenu";
import { getCategoryName } from "../../utils/getCategoryName";

export interface IAuthor {
  login: string;
  avatar: string;
}

export interface IComment {
  id?: number;
  text: string;
  rating: number;
  author: IAuthor;
  publishDate: Date;
  article: {
    id: number;
    title: string;
  };
}

export interface IPostCategory {
  id: number;
  name: string;
}

export interface IPostInfo {
  id: number;
  author: {
    login: string;
    id: number;
  };
  login: string;
  category: IPostCategory;
  publishDate: Date;
  categoryImage: string;
  postImage: string;
  title: string;
  description: string;
  rating: number;
  text: string;
}

export const BlogPostsList: React.FC = () => {
  const [posts, setPosts] = useState<IPostInfo[]>([]);

  const location = useLocation();

  //адекватно ли это? или надо делать по другому?

  useEffect(() => {
    location.pathname !== "/"
      ? fetch(`${SERVER_URL}${location.pathname}`)
          .then((response) => response.json())
          .then((posts) => setPosts(posts))
      : fetch(`${SERVER_URL}/posts/all`)
          .then((response) => response.json())
          .then((posts) => setPosts(posts));
  }, [location]);

  const [isThreeDotsMenuActive, setIsThreeDotsMenuActive] =
    useState<boolean>(false);

  const onPostRatingIncrement = (postID: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    };

    fetch(`${SERVER_URL}/posts/${postID}/rating/increment`, options);

    setPosts(
      posts.map((post) => {
        if (post.id === postID) {
          return { ...post, rating: post.rating + 1 };
        }
        return post;
      })
    );
  };

  const onPostRatingDecrement = (postID: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    };

    fetch(`${SERVER_URL}/posts/${postID}/rating/decrement`, options);

    setPosts(
      posts.map((post) => {
        if (post.id === postID) {
          return { ...post, rating: post.rating - 1 };
        }
        return post;
      })
    );
  };

  const onPostHideClick = (postID: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        postId: postID,
        userId: Number(localStorage.getItem("id")),
      }),
    };

    fetch(`${SERVER_URL}/users/hide`, options).then((response) => {
      setPosts(
        posts.filter((e) => {
          return e.id != postID;
        })
      );

      setIsThreeDotsMenuActive(!isThreeDotsMenuActive);
    });
  };

  const onThreeDotsClick = () => {
    setIsThreeDotsMenuActive(!isThreeDotsMenuActive);
  };

  return (
    <>
      {/**/}

      {posts.map((elem: IPostInfo) => (
        <BlogPostsListStyled key={elem.id}>
          <div>
            <BlogPostTitleStyled>
              <BlogPostTitleAuthorStyled>
                <img src={elem.categoryImage} />
                <p style={{ fontWeight: "500" }}>
                  {getCategoryName(elem.category.name)}
                </p>
              </BlogPostTitleAuthorStyled>

              <BlogPostTitleMiddleStyled>
                <div>{/*{elem.author.login}*/}</div>
                <div>{getTimeAgo(elem.publishDate)}</div>
              </BlogPostTitleMiddleStyled>
              <BlogPostTitleEndStyled>
                <img onClick={onThreeDotsClick} src={"/dots.svg"} />
                {isThreeDotsMenuActive ? (
                  <ThreeDotsMenu
                    onPostHideClick={() => onPostHideClick(elem.id)}
                  />
                ) : (
                  ""
                )}
              </BlogPostTitleEndStyled>
            </BlogPostTitleStyled>

            <BlogPostBodyStyled>
              <Link to={`/posts/${elem.category.name}/${elem.id}`}>
                <h1>{elem.title}</h1>
              </Link>
              <p>{elem.description}</p>
              <img src={elem.postImage} />
            </BlogPostBodyStyled>

            <BlogPostFooterStyled>
              <BlogPostCommentsStyled>
                <span className="material-symbols-outlined">mode_comment</span>
                <span>999</span>
              </BlogPostCommentsStyled>
              <BlogPostRatingStyled>
                <span
                  onClick={() => onPostRatingDecrement(elem.id)}
                  style={{ cursor: "pointer" }}
                  className="material-symbols-outlined"
                >
                  keyboard_arrow_down
                </span>
                {elem.rating}
                <span
                  onClick={() => onPostRatingIncrement(elem.id)}
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

      {/**/}
    </>
  );
};
