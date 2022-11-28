import styled from "styled-components";
import {
  BlogPostTitleAuthorStyled,
  BlogPostTitleStyled,
} from "../BlogPostsList/BlogPostsList.styled";

export const CommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const CommentTitleStyled = styled(BlogPostTitleStyled)`
  margin-bottom: 10px;
`;

export const CommentTextStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentRatingStyled = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  align-items: center;
`;

export const CommentTitleAuthorStyled = styled(BlogPostTitleAuthorStyled)``;
