import React from "react";
import { DashboardMiddlePartStyled, UserStyled } from "./UserStyled";
import { IBlogPost, IUser } from "../../store/userSlice";
import { AuthorizedUserBlogPost } from "./AuthorizedUserBlogPost";

interface BannedArticlesProps {
  userInfo: IUser;
  onDeleteBlogPostClick: (blogPostId: number) => void;
  onUnhideBlogPostClick: (blogPostId: number) => void;
}

export const HiddenPosts: React.FC<BannedArticlesProps> = (props) => {
  return (
    <DashboardMiddlePartStyled>
      <UserStyled>
        <h3>Hidden posts</h3>

        {props.userInfo.bannedArticles.map((bannedArticles: IBlogPost) => (
          <AuthorizedUserBlogPost
            key={bannedArticles.id}
            blogPost={bannedArticles}
            isBannedPosts={true}
            onDeleteArticleClick={props.onDeleteBlogPostClick}
            onUnhideArticleClick={props.onUnhideBlogPostClick}
          />
        ))}
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
