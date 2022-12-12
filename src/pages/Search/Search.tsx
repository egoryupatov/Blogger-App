import React, { useContext, useEffect } from "react";
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

export const Search: React.FC = () => {
  const searchQuery = useAppSelector(selectSearchQuery);

  useEffect(() => {
    fetch(`${SERVER_URL}/search/${searchQuery}`)
      .then((result) => result.json())
      .then((articles) => (searchResults = articles));
  }, []);

  let searchResults: IBlogPost[] = [];

  return (
    <MainContainerStyled>
      <Categories />
      <WrapperStyled>
        <SearchPageContainerStyled>
          <h1>Search results for ...</h1>
          {searchResults.map((article: IBlogPost) => (
            <p>{article.title}</p>
          ))}
        </SearchPageContainerStyled>
      </WrapperStyled>
      <CommentsBoard />
    </MainContainerStyled>
  );
};
