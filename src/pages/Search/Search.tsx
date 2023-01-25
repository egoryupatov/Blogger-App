import React from "react";
import {
  MainContainerStyled,
  WrapperStyled,
} from "../../styles/general.styled";
import { Categories } from "../../components/Categories/Categories";
import { SearchPageContainerStyled } from "./Search.styled";
import { IBlogPost } from "../../types/general.types";
import { BlogPostContainer } from "../../components/BlogPost/BlogPostContainer";
import { CommentsBoardContainer } from "../../components/CommentsBoard/CommentsBoardContainer";
import { SearchProps } from "./Search.types";

export const Search: React.FC<SearchProps> = (props) => {
  return (
    <MainContainerStyled>
      <Categories />
      <WrapperStyled>
        <SearchPageContainerStyled>
          <h1>Search results for "{props.searchQuery}"</h1>
        </SearchPageContainerStyled>
        {props.searchResults.map((blogPost: IBlogPost) => (
          <BlogPostContainer blogPost={blogPost} />
        ))}
      </WrapperStyled>
      <CommentsBoardContainer />
    </MainContainerStyled>
  );
};
