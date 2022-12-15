import { SERVER_URL } from "../constants/constants";
import { getAllBlogPosts, IBlogPost } from "../store/userSlice";

export const onPostRatingIncrement = (
  postID: number,
  dispatch: any,
  blogPosts: IBlogPost[]
) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ id: postID }),
  };

  fetch(`${SERVER_URL}/posts/rating/increment`, options);

  dispatch(
    getAllBlogPosts(
      blogPosts.map((blogPost: IBlogPost) => {
        if (blogPost.id === postID) {
          return { ...blogPost, rating: blogPost.rating + 1 };
        }
        return blogPost;
      })
    )
  );
};
