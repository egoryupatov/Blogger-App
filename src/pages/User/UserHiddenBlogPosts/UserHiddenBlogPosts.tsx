import React from "react";
import { DashboardMiddlePartStyled, UserStyled } from "../User.styled";
import { IBlogPost } from "../../../types/general.types";
import { AuthorizedUserBlogPost } from "../AuthorizedUserBlogPosts/AuthorizedUserBlogPost";
import { UserHiddenBlogPostsProps } from "./UserHiddenBlogPosts.types";

export const UserHiddenBlogPosts: React.FC<UserHiddenBlogPostsProps> = (
  props
) => {
  return (
    <DashboardMiddlePartStyled>
      <UserStyled>
        <h3>Hidden posts</h3>

        {props.userInfo.hiddenBlogPosts.map((hiddenBlogPost: IBlogPost) => (
          <AuthorizedUserBlogPost
            key={hiddenBlogPost.id}
            blogPost={hiddenBlogPost}
            isBannedPosts={true}
            onDeleteBlogPostClick={props.onDeleteBlogPostClick}
            onUnhideBlogPostClick={props.onUnhideBlogPostClick}
          />
        ))}
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
