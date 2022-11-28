import React from "react";
import { WrapperStyled } from "../../styles/general.styled";
import { BlogPostsList } from "../../components/BlogPostsList/BlogPostsList";
import { MainContainerStyled } from "../../styles/general.styled";
import { Categories } from "../../components/Categories/Categories";

export function Homepage() {
  return (
    <MainContainerStyled>
      <Categories />
      <WrapperStyled>
        <BlogPostsList />
      </WrapperStyled>
    </MainContainerStyled>
  );
}
