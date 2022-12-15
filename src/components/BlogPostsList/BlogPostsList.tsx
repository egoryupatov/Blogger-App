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
import {
  getAllBlogPosts,
  IBlogPost,
  selectAllBlogPosts,
  selectIsThreeDotsMenuActive,
  setIsThreeDotsMenuActive,
} from "../../store/userSlice";
import {
  PositiveRatingStyled,
  NegativeRatingStyled,
} from "../../styles/general.styled";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { useGetAllPosts } from "../../utils/useGetAllPosts";
import { onPostRatingIncrement } from "../../utils/onPostRatingIncrement";
import { onPostRatingDecrement } from "../../utils/onPostRatingDecrement";
import { onPostHideClick } from "../../utils/onPostHideClick";

export const BlogPostsList: React.FC = () => {
  useGetAllPosts();
  const dispatch = useDispatch();
  const blogPosts = useAppSelector(selectAllBlogPosts);
  const isThreeDotsMenuActive = useAppSelector(selectIsThreeDotsMenuActive);

  const onThreeDotsMenuClick = () => {
    dispatch(setIsThreeDotsMenuActive(!isThreeDotsMenuActive));
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
                <img onClick={onThreeDotsMenuClick} src={"/dots.svg"} />
                {isThreeDotsMenuActive ? (
                  <ThreeDotsMenu
                    onPostHideClick={() =>
                      onPostHideClick(
                        blogPost.id,
                        dispatch,
                        blogPosts,
                        isThreeDotsMenuActive
                      )
                    }
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
                  onClick={() =>
                    onPostRatingDecrement(blogPost.id, dispatch, blogPosts)
                  }
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
                  onClick={() =>
                    onPostRatingIncrement(blogPost.id, dispatch, blogPosts)
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
      ))}
    </>
  );
};
