import { SERVER_URL } from "../constants/constants";
import { getAllBlogPosts, incrementBlogPostRating } from "../store/userSlice";
import { Location } from "react-router-dom";
import { IBlogPost } from "../types/general.types";

export const onPostRatingIncrement = (
  blogPostId: number,
  dispatch: any,
  blogPosts: IBlogPost[],
  location: Location
) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ id: blogPostId }),
  };

  fetch(`${SERVER_URL}/posts/rating/increment`, options);

  location.pathname === "/"
    ? dispatch(
        getAllBlogPosts(
          blogPosts.map((blogPost: IBlogPost) => {
            if (blogPost.id === blogPostId) {
              return { ...blogPost, rating: blogPost.rating + 1 };
            }
            return blogPost;
          })
        )
      )
    : dispatch(incrementBlogPostRating(blogPostId));
};
