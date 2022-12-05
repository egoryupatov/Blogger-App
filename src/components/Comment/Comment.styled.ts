import styled from "styled-components";

export const CommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const CommentTitleStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 25px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 5px;
  }

  &:nth-last-child(even) {
    padding-bottom: 10px;
  }
`;

export const CommentTextStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentRatingStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CommentTitleAuthorStyled = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: center;

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
