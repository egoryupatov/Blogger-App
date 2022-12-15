import { SERVER_URL } from "../constants/constants";
import { getAllBlogPosts, IBlogPost } from "../store/userSlice";

export const onPostRatingDecrement = (
  blogPostId: number,
  dispatch: any,
  blogPosts: IBlogPost[]
) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ id: blogPostId }),
  };

  fetch(`${SERVER_URL}/posts/rating/decrement`, options);

  dispatch(
    getAllBlogPosts(
      blogPosts.map((blogPost: IBlogPost) => {
        if (blogPost.id === blogPostId) {
          return { ...blogPost, rating: blogPost.rating - 1 };
        }
        return blogPost;
      })
    )
  );
};
