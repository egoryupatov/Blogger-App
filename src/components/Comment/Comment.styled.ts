import styled from "styled-components";

export const CommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
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
`;

export const CommentTextStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentAnswerStyled = styled.div`
  display: flex;
  /*  flex-direction: column;*/
  margin-top: 10px;
  cursor: pointer;
  gap: 10px;

  span {
    color: gray;
    font-size: 14px;

    &:hover {
      color: #528adc;
    }
  }
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
  margin-bottom: 10px;

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
