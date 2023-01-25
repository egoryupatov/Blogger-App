import { IBlogPost } from "../../types/general.types";

export interface SearchProps {
  searchQuery: string;
  searchResults: IBlogPost[];
}
