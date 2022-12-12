import React from "react";
import { DashboardMiddlePartStyled, UserStyled } from "./UserStyled";
import { IBlogPost, IUser } from "../../store/userSlice";
import { AuthorizedUserArticle } from "./AuthorizedUserArticle";

interface BannedArticlesProps {
  userInfo: IUser;
  onDeleteArticleClick: (articleId: number) => void;
  onUnhideArticleClick: (articleId: number) => void;
}

export const HiddenArticles: React.FC<BannedArticlesProps> = (props) => {
  return (
    <DashboardMiddlePartStyled>
      <UserStyled>
        <h3>Hidden articles</h3>

        {props.userInfo.bannedArticles.map((article: IBlogPost) => (
          <AuthorizedUserArticle
            key={article.id}
            article={article}
            isBannedPosts={true}
            onDeleteArticleClick={props.onDeleteArticleClick}
            onUnhideArticleClick={props.onUnhideArticleClick}
          />
        ))}
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
