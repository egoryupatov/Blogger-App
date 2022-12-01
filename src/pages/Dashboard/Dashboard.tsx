import React, { useEffect, useState } from "react";
import { MainContainerStyled } from "../../styles/general.styled";
import { WrapperStyled } from "../../styles/general.styled";
import { DashboardStyled, DashboardWrapperStyled } from "./DashboardStyled";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import {
  getCurrentUserPosts,
  Post,
  selectCurrentUserInfo,
  selectCurrentUserPosts,
  deleteCurrentUserPosts,
} from "../../store/userSlice";
import { useAppSelector } from "../../store/hooks";
import {
  DashboardMiddlePartStyled,
  DashboardUserPanelStyled,
  DashboardUserInfoStyled,
  DashboardUserInfoRightSideStyled,
} from "./DashboardStyled";
import { useGetUser } from "../../utils/useGetUser";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { DashboardPost } from "./DashboardPost";
import { IPostInfo } from "../../components/BlogPostsList/BlogPostsList";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useGetUser();

  const currentUserPosts = useAppSelector(selectCurrentUserPosts);
  const currentUserInfo = useAppSelector(selectCurrentUserInfo);
  const [bannedPosts, setBannedPosts] = useState([]);
  console.log(bannedPosts);

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id: Number(localStorage.getItem("id")) }),
    };

    fetch(`${SERVER_URL}/dashboard`, options)
      .then((response) => response.json())
      .then((response) => dispatch(getCurrentUserPosts(response)));
  }, []);

  useEffect(() => {
    fetch(`${SERVER_URL}/posts/banned`)
      .then((response) => response.json())
      .then((posts) => setBannedPosts(posts));
  }, []);

  const onDeletePostClick = (postId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ id: postId }),
    };

    fetch(`${SERVER_URL}/posts`, options);

    dispatch(deleteCurrentUserPosts(postId));
  };

  const onUnhidePostClick = (postId: number) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        postId: postId,
        userId: Number(localStorage.getItem("id")),
      }),
    };

    fetch(`${SERVER_URL}/users/unhide`, options).then((response) =>
      setBannedPosts((prevState) =>
        prevState.filter((e: IPostInfo) => e.id !== postId)
      )
    );
  };

  return (
    <MainContainerStyled>
      <DashboardWrapperStyled>
        <DashboardStyled>
          <DashboardUserPanelStyled>
            <div style={{ display: "flex", gap: "20px" }}>
              <img src={`${currentUserInfo.avatar}`} />

              <DashboardUserInfoStyled>
                <h1>{currentUserInfo.login}</h1>
                <p>Signed up: {getTimeAgo(currentUserInfo.signUpDate)}</p>
                <p>Posts published: {currentUserPosts.length}</p>
                <p>Rating: {currentUserInfo.rating}</p>
              </DashboardUserInfoStyled>
            </div>
            <DashboardUserInfoRightSideStyled>
              <span className="material-symbols-outlined">settings</span>
            </DashboardUserInfoRightSideStyled>
          </DashboardUserPanelStyled>
        </DashboardStyled>

        <DashboardMiddlePartStyled>
          <DashboardStyled>
            <h3>Published posts</h3>

            {currentUserPosts
              .filter((post) => post.id)
              .map((post: Post) => (
                <DashboardPost
                  post={post}
                  isBannedPosts={false}
                  onDeletePostClick={onDeletePostClick}
                  onUnhidePostClick={onUnhidePostClick}
                />
              ))}
          </DashboardStyled>
        </DashboardMiddlePartStyled>

        <DashboardMiddlePartStyled>
          <DashboardStyled>
            <h3>Hidden posts</h3>

            {bannedPosts.map((post: Post) => (
              <DashboardPost
                post={post}
                isBannedPosts={true}
                onDeletePostClick={onDeletePostClick}
                onUnhidePostClick={onUnhidePostClick}
              />
            ))}
          </DashboardStyled>
          <DashboardStyled style={{ width: "50%" }}>
            <h3>Subscribers</h3>
          </DashboardStyled>
        </DashboardMiddlePartStyled>
      </DashboardWrapperStyled>
    </MainContainerStyled>
  );
};
