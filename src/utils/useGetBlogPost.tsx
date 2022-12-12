import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants/constants";

export const useGetBlogPost = () => {
  const params = useParams();

  useEffect(() => {
    fetch(`${SERVER_URL}/posts/${params.category}/${params.id}`).then(
      (response) => response.json().then((response) => setBlogPost(response))
    );
  }, []);

  const [blogPost, setBlogPost] = useState({
    category: {
      name: "",
    },
    author: {
      login: "",
      avatar: "",
      id: 0,
    },
    categoryImage: "",
    title: "",
    description: "",
    rating: 0,
    postImage: "",
    text: "",
    publishDate: new Date(),
  });

  return blogPost;
};
