import { IBlogPost, IUser } from "../../../types/general.types";

export interface AuthorizedUserBlogPostProps {
  blogPost: IBlogPost;
  onDeleteBlogPostClick: (id: number) => void;
  onUnhideBlogPostClick: (id: number) => void;
  isBannedPosts: boolean;
}

export interface AuthorizedUserBlogPostsProps {
  userInfo: IUser;
  onDeleteBlogPostClick: (articleId: number) => void;
  onUnhideBlogPostClick: (articleId: number) => void;
}
