import { IComment, IUser } from "../../../types/general.types";

export interface UserCommentsProps {
  userInfo: IUser;
}

export interface userCommentProps {
  comment: IComment;
  login: string;
}
