import styled from "styled-components";

export const CommentsBoardContainerStyled = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  top: 100px;
  gap: 20px;
  position: sticky;
  height: 100%;
`;

export const CommentsBoardStyled = styled.div`
  flex-direction: column;
  height: calc(100vh - 150px);
  justify-content: end;
  padding: 10px 0px 10px 0px;
  overflow-x: hidden;
  overflow-y: scroll;
  max-width: 250px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const CommentBoardCommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CommentBoardCommentTitleStyled = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    border-radius: 5px;
  }
`;
