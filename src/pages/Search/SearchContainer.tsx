import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../constants/constants";
import { useAppSelector } from "../../store/hooks";
import { selectSearchQuery } from "../../store/userSlice";
import { Search } from "./Search";

export const SearchContainer: React.FC = () => {
  const searchQuery = useAppSelector(selectSearchQuery);

  useEffect(() => {
    fetch(`${SERVER_URL}/posts/search/${searchQuery}`)
      .then((result) => result.json())
      .then((searchResults) => setSearchResults(searchResults));
  }, []);

  const [searchResults, setSearchResults] = useState<[]>([]);

  return <Search searchResults={searchResults} searchQuery={searchQuery} />;
};
