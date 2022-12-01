import styled from "styled-components";
import { AddPostStyled } from "../AddPost/AddPostPage.styled";

export const DashboardWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 640px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const DashboardStyled = styled(AddPostStyled)`
  display: flex;
  justify-content: center;
  max-width: 640px;

  &:hover {
    box-shadow: none;
  }

  img {
    width: 112px;
    height: 112px;
    border-radius: 6px;
  }
`;

export const DashboardUserPanelStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DashboardUserInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 112px;
  gap: 10px;
`;

export const DashboardUserInfoRightSideStyled = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 5px;
  height: 35px;
  align-items: center;
  border-radius: 6px;
  margin-top: -5px;
  cursor: pointer;
`;

export const DashboardPostsList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DashboardMiddlePartStyled = styled.div`
  display: flex;
  gap: 15px;
`;
