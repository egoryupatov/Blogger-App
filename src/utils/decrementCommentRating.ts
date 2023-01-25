import { IComment } from "../types/general.types";

export const decrement = (comment: IComment, commentID: number): IComment => {
  if (comment.id === commentID) {
    return { ...comment, rating: comment.rating - 1 };
  }
  return { ...comment, children: comment.children.map(decrement) };
};
