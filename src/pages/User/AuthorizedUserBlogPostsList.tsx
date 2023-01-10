import React from "react";
import { DashboardMiddlePartStyled, UserStyled } from "./UserStyled";
import { IBlogPost, IUser } from "../../store/userSlice";
import { AuthorizedUserBlogPost } from "./AuthorizedUserBlogPost";

interface PublishedArticlesProps {
  userInfo: IUser;
  onDeleteBlogPostClick: (articleId: number) => void;
  onUnhideBlogPostClick: (articleId: number) => void;
}

export const AuthorizedUserBlogPostsList: React.FC<PublishedArticlesProps> = (
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
          .filter((blogPost) => blogPost.id)
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
