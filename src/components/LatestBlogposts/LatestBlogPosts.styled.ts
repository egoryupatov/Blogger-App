import styled from "styled-components";

export const LatestBlogPostsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LatestBlogPostStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const LatestBlogPostTitle = styled.div`
  cursor: pointer;
`;

export const LatestBlogPostComments = styled.div`
  display: flex;
  align-items: center;
  color: gray;

  &::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    background-image: url(/comments.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const ShowMoreStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;

  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    padding-top: 5px;
    background-image: url(/more.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;
