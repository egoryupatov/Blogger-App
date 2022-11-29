import styled from "styled-components";

export const CommentsBoardContainerStyled = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 40px;
  width: 100%;
  position: sticky;
  height: 100%;
  top: 100px;
`;

export const CommentsBoardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: end;
  max-width: 200px;
  padding: 10px 0px 10px 0px;
  height: 100%;
  top: 40px;
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

export const CommentBoardCommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
