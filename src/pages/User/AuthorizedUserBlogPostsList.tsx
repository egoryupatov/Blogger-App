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
        {props.userInfo.articles.length > 0 ? (
          <h3>Published posts</h3>
        ) : (
          <h3>This user hasn't published anything yet!</h3>
        )}

        {props.userInfo.articles
          .filter((article) => article.id)
          .map((article: IBlogPost) => (
            <AuthorizedUserBlogPost
              blogPost={article}
              isBannedPosts={false}
              onDeleteArticleClick={props.onDeleteBlogPostClick}
              onUnhideArticleClick={props.onUnhideBlogPostClick}
            />
          ))}
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
