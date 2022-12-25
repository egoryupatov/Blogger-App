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

  span {
    cursor: pointer;
  }
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

export const AnswerButtonsContainerStyled = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
  width: 100%;
`;

export const TimeAgoStyled = styled.div`
  font-size: 12px;
  color: #595959;
`;

export const AuthorNameStyled = styled.div`
  font-size: 16px;
`;

export const CommentInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PositiveRatingStyled = styled.div`
  color: #2ea839;
`;

export const NegativeRatingStyled = styled.div`
  color: red;
`;

export const ChildCommentContainerStyled = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;
