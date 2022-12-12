import { SERVER_URL } from "../constants/constants";
import {
  getPostComments,
  IComment,
  selectPostComments,
} from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const useCommentRatingDecrement = (commentID: number) => {
  const comments = useAppSelector(selectPostComments);

  const dispatch = useAppDispatch();

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };

  fetch(`${SERVER_URL}/comments/${commentID}/decrement`, options);

  const decrement = (comment: IComment): IComment => {
    if (comment.id === commentID) {
      return { ...comment, rating: comment.rating - 1 };
    }
    return { ...comment, children: comment.children.map(decrement) };
  };

  //сделать отдельный экшн для понижения рейтинга

  dispatch(
    getPostComments(
      comments.map((comment: IComment) => {
        return decrement(comment);
      })
    )
  );
};
