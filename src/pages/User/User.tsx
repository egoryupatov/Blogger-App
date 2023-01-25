import React from "react";
import { MainContainerStyled } from "../../styles/general.styled";
import {
  DashboardUserInfoRightSideStyled,
  DashboardUserInfoStyled,
  DashboardUserInfoTabs,
  DashboardUserPanelStyled,
  DashboardWrapperStyled,
  UserStyled,
} from "./User.styled";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { SubscribeButtonsContainer } from "./SubscribeButtons/SubscribeButtonsContainer";
import { Link, Params, Route, Routes } from "react-router-dom";
import { AuthorizedUserBlogPosts } from "./AuthorizedUserBlogPosts/AuthorizedUserBlogPosts";
import { UnauthorizedUserBlogPosts } from "./UnauthorizedUserBlogPosts/UnauthorizedUserBlogPosts";
import { UserHiddenBlogPosts } from "./UserHiddenBlogPosts/UserHiddenBlogPosts";
import { UserComments } from "./UserComments/UserComments";
import { SubscriptionsContainer } from "../../components/Subscriptions/SubscriptionsContainer";
import { UserProps } from "./User.types";

export const User: React.FC<UserProps> = (props) => {
  return (
    <MainContainerStyled>
      <DashboardWrapperStyled>
        <UserStyled>
          <DashboardUserPanelStyled>
            <div style={{ display: "flex", gap: "20px" }}>
              <img src={`${props.userInfo.avatar}`} />

              <DashboardUserInfoStyled>
                <h1>{props.userInfo.login}</h1>
                <div>Signed up: {getTimeAgo(props.userInfo.signUpDate)}</div>
                <div>Posts published: {props.userInfo.blogPosts.length}</div>

                <div>Rating: {props.userInfo.rating}</div>
              </DashboardUserInfoStyled>
            </div>

            {props.isUserLoggedIn &&
            localStorage.getItem("id") != props.params.id ? (
              <SubscribeButtonsContainer
                params={props.params}
                authorizedUser={props.authorizedUserInfo}
                userInfo={props.userInfo}
              />
            ) : (
              <DashboardUserInfoRightSideStyled>
                <span className="material-symbols-outlined">settings</span>
              </DashboardUserInfoRightSideStyled>
            )}
          </DashboardUserPanelStyled>
          <DashboardUserInfoTabs>
            <Link to={`/user/${props.params.id}/posts`}>Posts</Link>

            {props.isUserLoggedIn &&
            localStorage.getItem("id") === props.params.id ? (
              <Link to={`/user/${props.params.id}/hidden`}>Hidden posts</Link>
            ) : null}

            <Link to={`/user/${props.params.id}/comments`}>Comments</Link>
            <Link to={`/user/${props.params.id}/subscribers`}>Subscribers</Link>
            <Link to={`/user/${props.params.id}/subscriptions`}>
              Subscriptions
            </Link>
          </DashboardUserInfoTabs>
        </UserStyled>

        <Routes>
          {props.isUserLoggedIn &&
          localStorage.getItem("id") === props.params.id ? (
            <Route
              path="/"
              element={
                <AuthorizedUserBlogPosts
                  userInfo={props.userInfo}
                  onDeleteBlogPostClick={props.onDeleteBlogPostClick}
                  onUnhideBlogPostClick={props.onUnhideBlogPostClick}
                />
              }
            />
          ) : (
            <Route
              path="/"
              element={<UnauthorizedUserBlogPosts userInfo={props.userInfo} />}
            />
          )}

          {props.isUserLoggedIn &&
          localStorage.getItem("id") === props.params.id ? (
            <Route
              path="posts"
              element={
                <AuthorizedUserBlogPosts
                  userInfo={props.userInfo}
                  onDeleteBlogPostClick={props.onDeleteBlogPostClick}
                  onUnhideBlogPostClick={props.onUnhideBlogPostClick}
                />
              }
            />
          ) : (
            <Route
              path="posts"
              element={<UnauthorizedUserBlogPosts userInfo={props.userInfo} />}
            />
          )}

          {props.isUserLoggedIn &&
          localStorage.getItem("id") === props.params.id ? (
            <Route
              path="hidden"
              element={
                <UserHiddenBlogPosts
                  userInfo={props.userInfo}
                  onDeleteBlogPostClick={props.onDeleteBlogPostClick}
                  onUnhideBlogPostClick={props.onUnhideBlogPostClick}
                />
              }
            />
          ) : null}

          <Route
            path="comments"
            element={<UserComments userInfo={props.userInfo} />}
          />

          <Route
            path="comments"
            element={<UserComments userInfo={props.userInfo} />}
          />

          <Route
            path="subscribers"
            element={<SubscriptionsContainer userInfo={props.userInfo} />}
          />

          <Route
            path="subscriptions"
            element={<SubscriptionsContainer userInfo={props.userInfo} />}
          />
        </Routes>
      </DashboardWrapperStyled>
    </MainContainerStyled>
  );
};
