import { useEffect } from "react";
import { SERVER_URL } from "../constants/constants";
import { getAllBlogPosts, setIsServerDataLoaded } from "../store/userSlice";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";

export const useGetAllPosts = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    location.pathname !== "/"
      ? fetch(`${SERVER_URL}${location.pathname}`)
          .then((response) => response.json())
          .then((posts) => dispatch(getAllBlogPosts(posts)))
          .catch((error) => dispatch(setIsServerDataLoaded(false)))
      : fetch(`${SERVER_URL}/posts/all`)
          .then((response) => response.json())
          .then((posts) => dispatch(getAllBlogPosts(posts)))
          .catch((error) => dispatch(setIsServerDataLoaded(false)));
  }, [location]);
};
