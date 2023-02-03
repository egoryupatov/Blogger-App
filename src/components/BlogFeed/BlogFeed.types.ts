import { IBlogPost } from "../../types/general.types";

export interface BlogFeedProps {
  blogPosts: IBlogPost[];
  isServerDataLoaded: boolean;
}
