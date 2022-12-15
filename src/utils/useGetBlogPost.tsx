import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants/constants";
import { useAppDispatch } from "../store/hooks";
import { getBlogPost } from "../store/userSlice";

export const useGetBlogPost = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    fetch(`${SERVER_URL}/posts/category/${params.category}/${params.id}`).then(
      (response) =>
        response.json().then((response) => dispatch(getBlogPost(response)))
    );
  }, []);
};
