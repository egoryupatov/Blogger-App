import styled from "styled-components";

export const BlogPostsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  width: 100%;
  padding: 10px 20px 10px 20px;
  margin-top: 40px;
  background: white;
  transition: all 250ms;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  a {
    text-decoration: none;
  }

  &:nth-last-child(1) {
    margin-bottom: 20px;
  }
`;

export const BlogPostTitleStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  gap: 25px;
  padding-bottom: 5px;
  padding-top: 5px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 5px;
  }

  &:nth-last-child(even) {
    padding-bottom: 10px;
  }
`;

export const BlogPostTitleAuthorStyled = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: center;
`;

export const BlogPostTitleMiddleStyled = styled.div`
  display: flex;
  justify-content: start;
  gap: 25px;
  align-items: center;
  width: 100%;
`;

export const BlogPostTitleEndStyled = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;

  img {
    cursor: pointer;
  }
`;

export const BlogPostBodyStyled = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 100%;

  img {
    margin: 0px -20px 0px -20px;
    height: 350px;
  }
`;

export const BlogPostFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BlogPostCommentsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BlogPostRatingStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
