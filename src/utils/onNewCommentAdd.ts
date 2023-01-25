import { SERVER_URL } from "../constants/constants";
import { addNewComment } from "../store/userSlice";
import { IComment } from "../types/general.types";
import { Params } from "react-router-dom";

export const onNewCommentAdd = (
  newComment: Partial<IComment>,
  params: Params,
  dispatch: any
) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  };

  fetch(`${SERVER_URL}/comments/${params.id}`, options).then((response) =>
    dispatch(addNewComment(newComment))
  );
};
