import { SERVER_URL } from "../constants/constants";
import { incrementCommentRating } from "../store/userSlice";

export const onCommentRatingIncrement = (commentID: number, dispatch: any) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };

  fetch(`${SERVER_URL}/comments/${commentID}/increment`, options);

  dispatch(incrementCommentRating(commentID));

  /*dispatch(
    getPostComments(
      comments.map((comment: IComment) => {
        return increment(comment);
      })
    )
  );*/
};
