import React from "react";
import {
  ContentBodyStyled,
  BlogPostCommentsStyled,
  ContentFooterStyled,
  BlogPostRatingStyled,
  BlogFeedStyled,
  ContentHeaderLeftPartStyled,
  ContentHeaderRightPartStyled,
  BlogPostTitleMiddleStyled,
  ContentHeaderStyled,
  CategoryNameStyled,
  BlogPostDataStyled,
  BlogPostTitleTimeUser,
  ContentBodyTitleStyled,
} from "../BlogFeed/BlogFeed.styled";
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
import { SubscribeButton } from "../SubscribeButton/SubscribeButton";

export const BlogPost: React.FC<BlogPostProps> = (props) => {
  const location = useLocation();
  return (
    <BlogFeedStyled key={props.blogPost.id}>
      <div>
        <ContentHeaderStyled>
          <ContentHeaderLeftPartStyled>
            <img src={props.blogPost.category.image} />
            <BlogPostTitleMiddleStyled>
              <Link to={`/posts/${props.blogPost.category.name}`}>
                <CategoryNameStyled>
                  {getCategoryName(props.blogPost.category.name)}
                </CategoryNameStyled>
              </Link>
              <BlogPostTitleTimeUser>
                <Link to={`/user/${props.blogPost.user.id}`}>
                  {props.blogPost.user.login}
                </Link>
                {getTimeAgo(props.blogPost.publishDate)}
              </BlogPostTitleTimeUser>
            </BlogPostTitleMiddleStyled>
          </ContentHeaderLeftPartStyled>

          {localStorage.getItem("token") ? (
            <ContentHeaderRightPartStyled>
              {props.isUserSubscribed ? (
                <span className="material-symbols-outlined">done</span>
              ) : (
                <SubscribeButton text={"Subscribe"} />
                /*<span
                  onClick={() => props.onSubscribeClick(props.blogPost.user.id)}
                  className="material-symbols-outlined"
                >
                  person_add
                </span>*/
              )}

              {/* <img onClick={props.onThreeDotsMenuClick} src={"/dots.svg"} />
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
              ) : null}*/}
            </ContentHeaderRightPartStyled>
          ) : null}
        </ContentHeaderStyled>

        <ContentBodyStyled>
          <Link
            to={`/posts/${props.blogPost.category.name}/${props.blogPost.id}`}
          >
            <ContentBodyTitleStyled>
              {props.blogPost.title}
            </ContentBodyTitleStyled>
          </Link>
          <div style={{ marginBottom: "20px" }}>
            {props.blogPost.description}
          </div>

          {location.pathname === "/search" ? null : (
            <img style={{ marginBottom: "10px" }} src={props.blogPost.image} />
          )}

          {location.pathname ===
          `/posts/${props.blogPost.category.name}/${props.blogPost.id}` ? (
            <div dangerouslySetInnerHTML={{ __html: props.blogPost.text }} />
          ) : null}
        </ContentBodyStyled>

        <ContentFooterStyled>
          <Link
            to={`/posts/${props.blogPost.category.name}/${props.blogPost.id}#comments`}
          >
            <BlogPostCommentsStyled>
              <BlogPostDataStyled>
                <object
                  data="./hearth.svg"
                  type="image/svg+xml"
                  width="20"
                  height="20"
                ></object>
                <span>{props.blogPost.rating}</span>
              </BlogPostDataStyled>
              <BlogPostDataStyled>
                <object
                  data="./comments.svg"
                  type="image/svg+xml"
                  width="20"
                  height="20"
                ></object>
                <span>{props.blogPost.comments.length}</span>
              </BlogPostDataStyled>
            </BlogPostCommentsStyled>
          </Link>

          <BlogPostRatingStyled>
            {/* <span
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
            </span>*/}
            <object
              data="./download.svg"
              type="image/svg+xml"
              width="20"
              height="20"
            ></object>
          </BlogPostRatingStyled>
        </ContentFooterStyled>
      </div>
    </BlogFeedStyled>
  );
};
