import React, { useContext, useEffect, useState } from "react";
import {
  MainContainerStyled,
  WrapperStyled,
} from "../../styles/general.styled";
import { SearchPageContainerStyled } from "./Search.styled";
import { Categories } from "../../components/Categories/Categories";
import { CommentsBoard } from "../../components/CommentsBoard/CommentsBoard";
import { SERVER_URL } from "../../constants/constants";
import { useAppSelector } from "../../store/hooks";
import { selectSearchQuery } from "../../store/userSlice";
import { IBlogPost } from "../../store/userSlice";
import { BlogPost } from "../../components/BlogPostsList/BlogPost";

export const Search: React.FC = () => {
  const searchQuery = useAppSelector(selectSearchQuery);

  useEffect(() => {
    fetch(`${SERVER_URL}/posts/search/${searchQuery}`)
      .then((result) => result.json())
      .then((searchResults) => setSearchResults(searchResults));
  }, []);

  const [searchResults, setSearchResults] = useState([]);

  return (
    <MainContainerStyled>
      <Categories />
      <WrapperStyled>
        <SearchPageContainerStyled>
          <h1>Search results for "{searchQuery}"</h1>
        </SearchPageContainerStyled>
        {searchResults.map((blogPost: IBlogPost) => (
          <BlogPost blogPost={blogPost} />
        ))}
      </WrapperStyled>
      <CommentsBoard />
    </MainContainerStyled>
  );
};
