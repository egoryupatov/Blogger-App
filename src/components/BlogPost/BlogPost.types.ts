import { IBlogPost } from "../../types/general.types";

import { Dispatch } from "react";

export interface BlogPostProps {
  blogPost: IBlogPost;
  isUserSubscribed: boolean;
  onSubscribeClick: (userId: number) => void;
  onThreeDotsMenuClick: () => void;
  isThreeDotsMenuActive: boolean;
  dispatch: Dispatch<any>;
  blogPosts: IBlogPost[];
}
