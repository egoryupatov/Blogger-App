import React from "react";
import { DashboardMiddlePartStyled, UserStyled } from "../User.styled";
import { IBlogPost } from "../../../types/general.types";
import { AuthorizedUserBlogPost } from "./AuthorizedUserBlogPost";
import { AuthorizedUserBlogPostsProps } from "./AuthorizedUserBlogPost.types";

export const AuthorizedUserBlogPosts: React.FC<AuthorizedUserBlogPostsProps> = (
  props
) => {
  return (
    <DashboardMiddlePartStyled>
      <UserStyled>
        {props.userInfo.blogPosts.length > 0 ? (
          <h3>Published posts</h3>
        ) : (
          <h3>This user hasn't published anything yet!</h3>
        )}

        {props.userInfo.blogPosts
          .filter((blogPost: IBlogPost) => blogPost.id)
          .map((blogPost: IBlogPost) => (
            <AuthorizedUserBlogPost
              blogPost={blogPost}
              isBannedPosts={false}
              onDeleteBlogPostClick={props.onDeleteBlogPostClick}
              onUnhideBlogPostClick={props.onUnhideBlogPostClick}
            />
          ))}
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
