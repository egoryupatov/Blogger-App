import { IBlogPost, IUser } from "../../../types/general.types";

export interface AuthorizedUserBlogPostProps {
  blogPost: IBlogPost;
  onDeleteBlogPostClick: (blogPostId: number) => void;
  onUnhideBlogPostClick: (blogPostId: number) => void;
  isBannedPosts: boolean;
}

export interface AuthorizedUserBlogPostsProps {
  userInfo: IUser;
  onDeleteBlogPostClick: (blogPostId: number) => void;
  onUnhideBlogPostClick: (blogPostId: number) => void;
}
