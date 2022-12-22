import { SERVER_URL } from "../constants/constants";
import { decrementCommentRating } from "../store/userSlice";

export const onCommentRatingDecrement = (commentID: number, dispatch: any) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };

  fetch(`${SERVER_URL}/comments/${commentID}/decrement`, options).then(
    (response) => dispatch(decrementCommentRating(commentID))
  );

  /*  dispatch(
    getPostComments(
      comments.map((comment: IComment) => {
        return decrement(comment);
      })
    )
  );*/
};
