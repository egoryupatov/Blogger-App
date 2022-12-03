import React, { useEffect, useState } from "react";
import { MainContainerStyled } from "../../styles/general.styled";
import {
  UserStyled,
  DashboardWrapperStyled,
  DashboardUserInfoTabs,
} from "./UserStyled";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { Link, Routes } from "react-router-dom";
import {
  deleteArticle,
  getUserInfo,
  selectUserInfo,
} from "../../store/userSlice";
import { useAppSelector } from "../../store/hooks";
import {
  DashboardMiddlePartStyled,
  DashboardUserPanelStyled,
  DashboardUserInfoStyled,
  DashboardUserInfoRightSideStyled,
} from "./UserStyled";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { PublishedArticles } from "./PublishedArticles";
import { Route, useParams } from "react-router-dom";
import { HiddenArticles } from "./HiddenArticles";
import { UserComments } from "./UserComments";

export const User: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${SERVER_URL}/users/${params.id}`)
      .then((response) => response.json())
      .then((user) => dispatch(getUserInfo(user)));
  }, []);

  const userInfo = useAppSelector(selectUserInfo);
  const onDeleteArticleClick = (articleId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ id: articleId }),
    };

    fetch(`${SERVER_URL}/posts`, options).then((response) =>
      dispatch(deleteArticle(articleId))
    );
  };
  const onUnhideArticleClick = (articleId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        postId: articleId,
        userId: Number(localStorage.getItem("id")),
      }),
    };

    fetch(`${SERVER_URL}/users/unhide`, options).then((response) =>
      userInfo.bannedArticles?.filter((e) => e.id !== articleId)
    );
  };

  return (
    <MainContainerStyled>
      <DashboardWrapperStyled>
        <UserStyled>
          <DashboardUserPanelStyled>
            <div style={{ display: "flex", gap: "20px" }}>
              <img src={`${userInfo.avatar}`} />

              <DashboardUserInfoStyled>
                <h1>{userInfo.login}</h1>
                <p>Signed up: {getTimeAgo(userInfo.signUpDate)}</p>
                <p>Posts published: {userInfo.articles.length}</p>

                <p>Rating: {userInfo.rating}</p>
              </DashboardUserInfoStyled>
            </div>
            <DashboardUserInfoRightSideStyled>
              <span className="material-symbols-outlined">settings</span>
            </DashboardUserInfoRightSideStyled>
          </DashboardUserPanelStyled>
          <DashboardUserInfoTabs>
            <Link to={`/user/${params.id}/articles`}>Articles</Link>
            <Link to={`/user/${params.id}/hidden`}>Hidden articles</Link>
            <Link to={`/user/${params.id}/comments`}>Comments</Link>
            <Link to={`/user/${params.id}/subscribers`}>Subscribers</Link>
            <Link to={`/user/${params.id}/subscriptions`}>Subscriptions</Link>
          </DashboardUserInfoTabs>
        </UserStyled>

        <Routes>
          <Route
            path="/"
            element={
              <PublishedArticles
                userInfo={userInfo}
                onDeleteArticleClick={onDeleteArticleClick}
                onUnhideArticleClick={onUnhideArticleClick}
              />
            }
          />
        </Routes>

        <Routes>
          <Route
            path="articles"
            element={
              <PublishedArticles
                userInfo={userInfo}
                onDeleteArticleClick={onDeleteArticleClick}
                onUnhideArticleClick={onUnhideArticleClick}
              />
            }
          />
        </Routes>

        <Routes>
          <Route
            path="hidden"
            element={
              <HiddenArticles
                userInfo={userInfo}
                onDeleteArticleClick={onDeleteArticleClick}
                onUnhideArticleClick={onUnhideArticleClick}
              />
            }
          />
        </Routes>

        <Routes>
          <Route
            path="comments"
            element={<UserComments userInfo={userInfo} />}
          />
        </Routes>
      </DashboardWrapperStyled>
    </MainContainerStyled>
  );
};
