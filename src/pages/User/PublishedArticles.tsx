import React from "react";
import { DashboardMiddlePartStyled, UserStyled } from "./UserStyled";
import { IArticle, IUser } from "../../store/userSlice";
import { AuthorizedUserArticle } from "./AuthorizedUserArticle";

interface PublishedArticlesProps {
  userInfo: IUser;
  onDeleteArticleClick: (articleId: number) => void;
  onUnhideArticleClick: (articleId: number) => void;
}

export const PublishedArticles: React.FC<PublishedArticlesProps> = (props) => {
  return (
    <DashboardMiddlePartStyled>
      <UserStyled>
        <h3>Published posts</h3>

        {props.userInfo.articles
          .filter((article) => article.id)
          .map((article: IArticle) => (
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
