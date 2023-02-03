import { IBlogPost } from "../../types/general.types";

export interface LatestBlogPostsProps {
  onShowMoreClick: () => void;
  latestPosts: IBlogPost[];
}
