import { IUser } from "../../../types/general.types";

export interface UserHiddenBlogPostsProps {
  userInfo: IUser;
  onDeleteBlogPostClick: (blogPostId: number) => void;
  onUnhideBlogPostClick: (blogPostId: number) => void;
}
