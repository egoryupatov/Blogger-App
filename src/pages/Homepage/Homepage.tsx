import React from "react";
import { WrapperStyled } from "../../styles/general.styled";
import { BlogPostsListContainer } from "../../components/BlogPostsList/BlogPostsListContainer";
import { MainContainerStyled } from "../../styles/general.styled";
import { Categories } from "../../components/Categories/Categories";
import { CommentsBoardContainer } from "../../components/CommentsBoard/CommentsBoardContainer";

export function Homepage() {
  return (
    <MainContainerStyled>
      <Categories />
      <WrapperStyled>
        <BlogPostsListContainer />
      </WrapperStyled>
      <CommentsBoardContainer />
    </MainContainerStyled>
  );
}
