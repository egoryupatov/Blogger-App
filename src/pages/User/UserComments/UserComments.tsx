import React from "react";
import { DashboardCommentStyled } from "../User.styled";
import { IComment } from "../../../types/general.types";
import { UserComment } from "./UserComment";
import { UserCommentsProps } from "./UserComments.types";

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
