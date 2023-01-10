import React, { useEffect } from "react";
import { ButtonStyled, MainContainerStyled } from "../../styles/general.styled";
import {
  UserStyled,
  DashboardWrapperStyled,
  DashboardUserInfoTabs,
  SubscribeButtonContainer,
} from "./UserStyled";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { Link, Routes } from "react-router-dom";
import {
  deleteBlogPost,
  getUserInfo,
  selectAuthorizedUserInfo,
  selectIsUserLoggedIn,
  selectUserInfo,
} from "../../store/userSlice";
import { useAppSelector } from "../../store/hooks";
import {
  DashboardUserPanelStyled,
  DashboardUserInfoStyled,
  DashboardUserInfoRightSideStyled,
} from "./UserStyled";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { AuthorizedUserBlogPostsList } from "./AuthorizedUserBlogPostsList";
import { Route, useParams } from "react-router-dom";
import { HiddenPosts } from "./HiddenPosts";
import { UserComments } from "./UserComments";
import { Sub } from "../../components/Sub/Sub";
import { UnauthorizedUserBlogPostsList } from "./UnauthorizedUserBlogPostsList";
import { SubscribeButtons } from "./SubscribeButtons";

export const User: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userInfo = useAppSelector(selectUserInfo);
  const authorizedUserInfo = useAppSelector(selectAuthorizedUserInfo);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

  useEffect(() => {
    fetch(`${SERVER_URL}/users/info/${params.id}`)
      .then((response) => response.json())
      .then((user) => dispatch(getUserInfo(user)));
  }, []);

  const onDeleteBlogPostClick = (blogPostId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ id: blogPostId }),
    };

    fetch(`${SERVER_URL}/posts`, options).then((response) =>
      dispatch(deleteBlogPost(blogPostId))
    );
  };
  const onUnhideBlogPostClick = (blogPostId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        postId: blogPostId,
        userId: Number(localStorage.getItem("id")),
      }),
    };

    fetch(`${SERVER_URL}/users/unhide`, options).then((response) =>
      userInfo.hiddenBlogPosts?.filter(
        (hiddenBlogPost) => hiddenBlogPost.id !== blogPostId
      )
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
                <div>Signed up: {getTimeAgo(userInfo.signUpDate)}</div>
                <div>Posts published: {userInfo.blogPosts.length}</div>

                <div>Rating: {userInfo.rating}</div>
              </DashboardUserInfoStyled>
            </div>

            {isUserLoggedIn && localStorage.getItem("id") != params.id ? (
              <SubscribeButtons
                params={params}
                authorizedUser={authorizedUserInfo}
                userInfo={userInfo}
              />
            ) : (
              <DashboardUserInfoRightSideStyled>
                <span className="material-symbols-outlined">settings</span>
              </DashboardUserInfoRightSideStyled>
            )}
          </DashboardUserPanelStyled>
          <DashboardUserInfoTabs>
            <Link to={`/user/${params.id}/posts`}>Posts</Link>

            {isUserLoggedIn && localStorage.getItem("id") === params.id ? (
              <Link to={`/user/${params.id}/hidden`}>Hidden posts</Link>
            ) : null}

            <Link to={`/user/${params.id}/comments`}>Comments</Link>
            <Link to={`/user/${params.id}/subscribers`}>Subscribers</Link>
            <Link to={`/user/${params.id}/subscriptions`}>Subscriptions</Link>
          </DashboardUserInfoTabs>
        </UserStyled>

        <Routes>
          {isUserLoggedIn && localStorage.getItem("id") === params.id ? (
            <Route
              path="/"
              element={
                <AuthorizedUserBlogPostsList
                  userInfo={userInfo}
                  onDeleteBlogPostClick={onDeleteBlogPostClick}
                  onUnhideBlogPostClick={onUnhideBlogPostClick}
                />
              }
            />
          ) : (
            <Route
              path="/"
              element={<UnauthorizedUserBlogPostsList userInfo={userInfo} />}
            />
          )}

          {isUserLoggedIn && localStorage.getItem("id") === params.id ? (
            <Route
              path="posts"
              element={
                <AuthorizedUserBlogPostsList
                  userInfo={userInfo}
                  onDeleteBlogPostClick={onDeleteBlogPostClick}
                  onUnhideBlogPostClick={onUnhideBlogPostClick}
                />
              }
            />
          ) : (
            <Route
              path="posts"
              element={<UnauthorizedUserBlogPostsList userInfo={userInfo} />}
            />
          )}

          {isUserLoggedIn && localStorage.getItem("id") === params.id ? (
            <Route
              path="hidden"
              element={
                <HiddenPosts
                  userInfo={userInfo}
                  onDeleteBlogPostClick={onDeleteBlogPostClick}
                  onUnhideBlogPostClick={onUnhideBlogPostClick}
                />
              }
            />
          ) : null}

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
