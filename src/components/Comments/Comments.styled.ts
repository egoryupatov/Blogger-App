import styled from "styled-components";
import {
  BlogPostTitleAuthorStyled,
  BlogPostTitleStyled,
} from "../BlogPostsList/BlogPostsList.styled";

export const CommentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const CommentTitleStyled = styled(BlogPostTitleStyled)`
  margin-bottom: 10px;
`;

export const CommentTitleAuthorStyled = styled(BlogPostTitleAuthorStyled)``;
