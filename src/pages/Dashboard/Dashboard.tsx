import React, { useEffect, useState } from "react";
import { MainContainerStyled } from "../../styles/general.styled";
import { WrapperStyled } from "../../styles/general.styled";
import { DashboardSectionStyled } from "./DashboardSectionStyled";
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
} from "./DashboardSectionStyled";
import { useGetUser } from "../../utils/useGetUser";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { DashboardPost } from "./DashboardPost";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useGetUser();

  const currentUserPosts = useAppSelector(selectCurrentUserPosts);
  const currentUserInfo = useAppSelector(selectCurrentUserInfo);

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

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ id: Number(localStorage.getItem("id")) }),
  };

  useEffect(() => {
    fetch(`${SERVER_URL}/dashboard`, options)
      .then((response) => response.json())
      .then((response) => dispatch(getCurrentUserPosts(response)));
  }, []);

  // @ts-ignore
  return (
    <MainContainerStyled>
      <WrapperStyled>
        <DashboardSectionStyled>
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
        </DashboardSectionStyled>

        <DashboardMiddlePartStyled>
          <DashboardSectionStyled>
            <h3>Published articles</h3>

            {currentUserPosts
              .filter((post) => post.id)
              .map((post: Post) => (
                <DashboardPost
                  post={post}
                  onDeletePostClick={onDeletePostClick}
                />
              ))}
          </DashboardSectionStyled>
          <DashboardSectionStyled style={{ width: "50%" }}>
            <h3>Subscribers</h3>
          </DashboardSectionStyled>
        </DashboardMiddlePartStyled>
      </WrapperStyled>
    </MainContainerStyled>
  );
};
