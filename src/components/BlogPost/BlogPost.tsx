import React from "react";
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
  CategoryNameStyled,
} from "../BlogPostsList/BlogPostsList.styled";
import { Link, useLocation } from "react-router-dom";
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
import { BlogPostProps } from "./BlogPost.types";

export const BlogPost: React.FC<BlogPostProps> = (props) => {
  const location = useLocation();
  return (
    <BlogPostsListStyled key={props.blogPost.id}>
      <div>
        <BlogPostTitleStyled>
          <BlogPostTitleAuthorStyled>
            <img src={props.blogPost.category.image} />

            <Link to={`/posts/${props.blogPost.category.name}`}>
              <CategoryNameStyled>
                {getCategoryName(props.blogPost.category.name)}
              </CategoryNameStyled>
            </Link>
          </BlogPostTitleAuthorStyled>

          <BlogPostTitleMiddleStyled>
            <Link to={`/user/${props.blogPost.user.id}`}>
              <div>{props.blogPost.user.login}</div>
            </Link>
            <div>{getTimeAgo(props.blogPost.publishDate)}</div>
          </BlogPostTitleMiddleStyled>

          {localStorage.getItem("token") ? (
            <BlogPostTitleEndStyled>
              {props.isUserSubscribed ? (
                <span className="material-symbols-outlined">done</span>
              ) : (
                <span
                  onClick={() => props.onSubscribeClick(props.blogPost.user.id)}
                  className="material-symbols-outlined"
                >
                  person_add
                </span>
              )}

              <img onClick={props.onThreeDotsMenuClick} src={"/dots.svg"} />
              {props.isThreeDotsMenuActive ? (
                <ThreeDotsMenu
                  onPostHideClick={() =>
                    onPostHideClick(
                      props.blogPost.id,
                      props.dispatch,
                      props.blogPosts,
                      props.isThreeDotsMenuActive
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
            <h1 style={{ marginBottom: "10px" }}>{props.blogPost.title}</h1>
          </Link>
          <div style={{ marginBottom: "10px" }}>
            {props.blogPost.description}
          </div>

          {location.pathname === "/search" ? null : (
            <img style={{ marginBottom: "10px" }} src={props.blogPost.image} />
          )}

          {location.pathname ===
          `/posts/${props.blogPost.category.name}/${props.blogPost.id}` ? (
            <div dangerouslySetInnerHTML={{ __html: props.blogPost.text }} />
          ) : null}
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
                onPostRatingDecrement(
                  props.blogPost.id,
                  props.dispatch,
                  props.blogPosts,
                  location
                )
              }
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
                onPostRatingIncrement(
                  props.blogPost.id,
                  props.dispatch,
                  props.blogPosts,
                  location
                )
              }
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
