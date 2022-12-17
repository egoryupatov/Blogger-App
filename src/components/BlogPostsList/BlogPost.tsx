import React, { useState } from "react";
import {
  BlogPostBodyStyled,
  BlogPostCommentsStyled,
  BlogPostFooterStyled,
  BlogPostRatingStyled,
  BlogPostsListStyled,
  BlogPostTitleAuthorStyled,
  BlogPostTitleEndStyled,
  BlogPostTitleMiddleStyled,
  BlogPostTitleStyled,
} from "./BlogPostsList.styled";
import { Link } from "react-router-dom";
import { getCategoryName } from "../../utils/getCategoryName";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { ThreeDotsMenu } from "../ThreeDotsMenu/ThreeDotsMenu";
import { onPostHideClick } from "../../utils/onPostHideClick";
import { onPostRatingDecrement } from "../../utils/onPostRatingDecrement";
import {
  NegativeRatingStyled,
  PositiveRatingStyled,
} from "../../styles/general.styled";
import { onPostRatingIncrement } from "../../utils/onPostRatingIncrement";
import {
  IBlogPost,
  selectAllBlogPosts,
  selectIsThreeDotsMenuActive,
  setIsThreeDotsMenuActive,
} from "../../store/userSlice";
import { SERVER_URL } from "../../constants/constants";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";

interface BlogPostProps {
  blogPost: IBlogPost;
}

export const BlogPost: React.FC<BlogPostProps> = (props) => {
  const [isUserSubscribed, setIsUserSubscribed] = useState(false);
  const isThreeDotsMenuActive = useAppSelector(selectIsThreeDotsMenuActive);
  const dispatch = useDispatch();
  const blogPosts = useAppSelector(selectAllBlogPosts);

  const onThreeDotsMenuClick = () => {
    dispatch(setIsThreeDotsMenuActive(!isThreeDotsMenuActive));
  };

  const onSubscribeClick = (subId: number) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: Number(localStorage.getItem("id")),
        subId: subId,
      }),
    };

    fetch(`${SERVER_URL}/users/subscribe`, options).then((response) =>
      setIsUserSubscribed((prevState) => !prevState)
    );
  };

  return (
    <BlogPostsListStyled key={props.blogPost.id}>
      <div>
        <BlogPostTitleStyled>
          <BlogPostTitleAuthorStyled>
            <img src={props.blogPost.categoryImage} />

            <Link to={`/posts/${props.blogPost.category.name}`}>
              <p style={{ fontWeight: "500" }}>
                {getCategoryName(props.blogPost.category.name)}
              </p>
            </Link>
          </BlogPostTitleAuthorStyled>

          <BlogPostTitleMiddleStyled>
            <Link to={`/user/${props.blogPost.author.id}`}>
              <div>{props.blogPost.author.login}</div>
            </Link>
            <div>{getTimeAgo(props.blogPost.publishDate)}</div>
          </BlogPostTitleMiddleStyled>

          {/*///////////////*/}

          {localStorage.getItem("token") ? (
            <BlogPostTitleEndStyled>
              {isUserSubscribed ? (
                <span className="material-symbols-outlined">done</span>
              ) : (
                <span
                  onClick={() => onSubscribeClick(props.blogPost.author.id)}
                  className="material-symbols-outlined"
                  style={{ cursor: "pointer" }}
                >
                  person_add
                </span>
              )}

              {/*//////////////*/}

              <img onClick={onThreeDotsMenuClick} src={"/dots.svg"} />
              {isThreeDotsMenuActive ? (
                <ThreeDotsMenu
                  onPostHideClick={() =>
                    onPostHideClick(
                      props.blogPost.id,
                      dispatch,
                      blogPosts,
                      isThreeDotsMenuActive
                    )
                  }
                />
              ) : null}
            </BlogPostTitleEndStyled>
          ) : null}
        </BlogPostTitleStyled>

        <BlogPostBodyStyled>
          <Link
            to={`/posts/${props.blogPost.category.name}/${props.blogPost.id}`}
          >
            <h1>{props.blogPost.title}</h1>
          </Link>
          <p>{props.blogPost.description}</p>
          <img src={props.blogPost.postImage} />
        </BlogPostBodyStyled>

        <BlogPostFooterStyled>
          <Link
            to={`/posts/${props.blogPost.category.name}/${props.blogPost.id}#comments`}
          >
            <BlogPostCommentsStyled>
              <span className="material-symbols-outlined">mode_comment</span>
              <span>{props.blogPost.comments.length}</span>
            </BlogPostCommentsStyled>
          </Link>
          <BlogPostRatingStyled>
            <span
              onClick={() =>
                onPostRatingDecrement(props.blogPost.id, dispatch, blogPosts)
              }
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              keyboard_arrow_down
            </span>

            {props.blogPost.rating > 0 ? (
              <PositiveRatingStyled>
                {props.blogPost.rating}
              </PositiveRatingStyled>
            ) : (
              <NegativeRatingStyled>
                {props.blogPost.rating}
              </NegativeRatingStyled>
            )}

            <span
              onClick={() =>
                onPostRatingIncrement(props.blogPost.id, dispatch, blogPosts)
              }
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              keyboard_arrow_up
            </span>
          </BlogPostRatingStyled>
        </BlogPostFooterStyled>
      </div>
    </BlogPostsListStyled>
  );
};
