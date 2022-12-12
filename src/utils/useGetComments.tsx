import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants/constants";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { getPostComments } from "../store/userSlice";

export const useGetComments = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`${SERVER_URL}/comments/${params.id}`).then((response) =>
      response.json().then((response) => dispatch(getPostComments(response)))
    );
  }, []);
};
