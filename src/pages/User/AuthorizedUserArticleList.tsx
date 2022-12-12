import React from "react";
import { DashboardMiddlePartStyled, UserStyled } from "./UserStyled";
import { IBlogPost, IUser } from "../../store/userSlice";
import { AuthorizedUserArticle } from "./AuthorizedUserArticle";

interface PublishedArticlesProps {
  userInfo: IUser;
  onDeleteArticleClick: (articleId: number) => void;
  onUnhideArticleClick: (articleId: number) => void;
}

export const AuthorizedUserArticleList: React.FC<PublishedArticlesProps> = (
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
            <AuthorizedUserArticle
              article={article}
              isBannedPosts={false}
              onDeleteArticleClick={props.onDeleteArticleClick}
              onUnhideArticleClick={props.onUnhideArticleClick}
            />
          ))}
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
