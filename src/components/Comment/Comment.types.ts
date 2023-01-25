import { IComment } from "../../types/general.types";
import { Dispatch } from "react";

export interface CommentProps {
  comment: IComment;
  dispatch: Dispatch<any>;
  setIsAnswerWindowOpened: (isAnswerWindowOpened: boolean) => void;
  isAnswerWindowOpened: boolean;
  onCommentChildrenRequest: (commentId: number) => void;
  onAnswerChange: (e: any) => void;
  onAnswerAdd: (parentCommentId: number) => void;
  areChildrenCommentsDisplayed: boolean;
  comments: IComment[];
}
