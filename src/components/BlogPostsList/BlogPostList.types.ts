import { IBlogPost } from "../../types/general.types";

export interface BlogPostListProps {
  blogPosts: IBlogPost[];
  isServerDataLoaded: boolean;
}
