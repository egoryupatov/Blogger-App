import styled from "styled-components";
import { AddPostStyled } from "../AddPost/AddPostPage.styled";

export const DashboardWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 640px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const UserStyled = styled(AddPostStyled)`
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

  /*  &:last-child {
    padding: 20px 25px 0px 25px;
    border: 1px solid red;
  }*/
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

export const DashboardUserInfoTabs = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 400;
  color: gray;

  a {
    cursor: pointer;

    &:hover {
      color: #7da7e5;
    }

    &:focus-within {
      color: #000;
      text-decoration: underline 4px #4683d9 solid;
      text-underline-offset: 20px;
    }
  }
`;

export const SubscribeButtonContainer = styled.div`
  height: 50px;
`;

export const DashboardPostsList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DashboardMiddlePartStyled = styled.div`
  display: flex;
  gap: 15px;
`;

export const DashboardCommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

//////////////// вынести отдельно

export const UserCommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  gap: 10px;
  border-radius: 9px;
  width: 100%;
  padding: 20px 25px 20px 25px;
  margin-top: 20px;
  background: white;
  transition: all 250ms;

  &:hover {
    box-shadow: none;
  }

  img {
    width: 112px;
    height: 112px;
    border-radius: 6px;
  }
`;

export const UserCommentTitleStyled = styled.div`
  font-weight: bold;
`;

export const UserCommentAuthorInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 16px;
    height: 16px;
  }
`;
