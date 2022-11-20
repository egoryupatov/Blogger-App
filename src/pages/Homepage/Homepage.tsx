import React from "react";
import { WrapperStyled } from "./styles/general.styled";
import { BlogPostsList } from "./components/BlogPostsList/BlogPostsList";
import { MainContainerStyled } from "./styles/general.styled";

export function Homepage() {
  return (
    <MainContainerStyled>
      <WrapperStyled>
        <BlogPostsList />
      </WrapperStyled>
    </MainContainerStyled>
  );
}
