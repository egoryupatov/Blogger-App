import { SERVER_URL } from "../constants/constants";
import { decrementBlogPostRating, getAllBlogPosts } from "../store/userSlice";
import { Location } from "react-router-dom";
import { IBlogPost } from "../types/general.types";

export const onPostRatingDecrement = (
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

  fetch(`${SERVER_URL}/posts/rating/decrement`, options);

  location.pathname === "/"
    ? dispatch(
        getAllBlogPosts(
          blogPosts.map((blogPost: IBlogPost) => {
            if (blogPost.id === blogPostId) {
              return { ...blogPost, rating: blogPost.rating - 1 };
            }
            return blogPost;
          })
        )
      )
    : dispatch(decrementBlogPostRating(blogPostId));
};
