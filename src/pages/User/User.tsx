import React, { useEffect, useState } from "react";
import { MainContainerStyled } from "../../styles/general.styled";
import {
  UserStyled,
  DashboardWrapperStyled,
  DashboardUserInfoTabs,
} from "./UserStyled";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { Link, Navigate, Routes, useNavigate } from "react-router-dom";
import {
  deleteArticle,
  getUserInfo,
  selectIsUserLoggedIn,
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
import { AuthorizedUserArticleList } from "./AuthorizedUserArticleList";
import { Route, useParams } from "react-router-dom";
import { HiddenPosts } from "./HiddenPosts";
import { UserComments } from "./UserComments";
import { Sub } from "../../components/Sub/Sub";

export const User: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

  useEffect(() => {
    fetch(`${SERVER_URL}/users/info/${params.id}`)
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
            <Link to={`/user/${params.id}/articles`}>Posts</Link>

            {isUserLoggedIn && localStorage.getItem("id") === params.id ? (
              <Link to={`/user/${params.id}/hidden`}>Hidden posts</Link>
            ) : null}

            <Link to={`/user/${params.id}/comments`}>Comments</Link>
            <Link to={`/user/${params.id}/subscribers`}>Subscribers</Link>
            <Link to={`/user/${params.id}/subscriptions`}>Subscriptions</Link>
          </DashboardUserInfoTabs>
        </UserStyled>

        <Routes>
          <Route
            path="/"
            element={
              <AuthorizedUserArticleList
                userInfo={userInfo}
                onDeleteArticleClick={onDeleteArticleClick}
                onUnhideArticleClick={onUnhideArticleClick}
              />
            }
          />
          <Route
            path="articles"
            element={
              <AuthorizedUserArticleList
                userInfo={userInfo}
                onDeleteArticleClick={onDeleteArticleClick}
                onUnhideArticleClick={onUnhideArticleClick}
              />
            }
          />

          {isUserLoggedIn && localStorage.getItem("id") === params.id ? (
            <Route
              path="hidden"
              element={
                <HiddenPosts
                  userInfo={userInfo}
                  onDeleteArticleClick={onDeleteArticleClick}
                  onUnhideArticleClick={onUnhideArticleClick}
                />
              }
            />
          ) : null}
          {/*добавить страницу 404*/}

          <Route
            path="comments"
            element={<UserComments userInfo={userInfo} />}
          />

          <Route
            path="comments"
            element={<UserComments userInfo={userInfo} />}
          />

          <Route path="subscribers" element={<Sub userInfo={userInfo} />} />

          <Route path="subscriptions" element={<Sub userInfo={userInfo} />} />
        </Routes>
      </DashboardWrapperStyled>
    </MainContainerStyled>
  );
};
