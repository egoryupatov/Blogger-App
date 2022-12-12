import React from "react";
import {
  DashboardMiddlePartStyled,
  UserStyled,
  DashboardCommentStyled,
} from "./UserStyled";
import { IUser, IComment } from "../../store/userSlice";
import { UserComment } from "./UserComment";

interface UserCommentsProps {
  userInfo: IUser;
}

export const UserComments: React.FC<UserCommentsProps> = (props) => {
  return (
    <DashboardCommentStyled>
      {props.userInfo.comments.map((comment: IComment) => (
        <UserComment
          key={comment.id}
          comment={comment}
          login={props.userInfo.login}
        />
      ))}
    </DashboardCommentStyled>
  );
};
