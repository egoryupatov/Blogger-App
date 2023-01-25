import { IComment } from "../../types/general.types";

export interface ICommentContainerProps {
  comment: IComment;
  comments: IComment[];
  onCommentRatingIncrement: () => void;
  onCommentRatingDecrement: () => void;
}
