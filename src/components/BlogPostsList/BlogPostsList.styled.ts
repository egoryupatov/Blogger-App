import styled from "styled-components";

export const BlogPostStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  width: 100%;
  padding: 10px 15px 10px 15px;
  margin-top: 20px;
  background: white;
  transition: all 250ms;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export const BlogPostTitleStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 5px;
  border-bottom: 1px solid #e3e5e8;
  padding-bottom: 10px;
  padding-top: 5px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 5px;
  }
`;

export const BlogPostTitleAuthorStyled = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: center;
`;

export const BlogPostBodyStyled = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  img {
    margin: 0px -15px 0px -15px;
    height: 350px;
  }
`;

export const BlogPostFooterStyled = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
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
