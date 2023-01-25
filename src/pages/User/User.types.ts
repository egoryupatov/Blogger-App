import { IUser } from "../../types/general.types";
import { Params } from "react-router-dom";

export interface UserProps {
  userInfo: IUser;
  params: Params;
  isUserLoggedIn: boolean;
  authorizedUserInfo: IUser;
  onDeleteBlogPostClick: (blogPostId: number) => void;
  onUnhideBlogPostClick: (blogPostId: number) => void;
}
