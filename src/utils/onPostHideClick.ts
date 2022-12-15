import { SERVER_URL } from "../constants/constants";
import {
  getAllBlogPosts,
  IBlogPost,
  setIsThreeDotsMenuActive,
} from "../store/userSlice";

export const onPostHideClick = (
  blogPostId: number,
  dispatch: any,
  blogPosts: IBlogPost[],
  isThreeDotsMenuActive: any
) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      postId: blogPostId,
      userId: Number(localStorage.getItem("id")),
    }),
  };

  fetch(`${SERVER_URL}/users/hide`, options).then((response) => {
    dispatch(
      getAllBlogPosts(
        blogPosts.filter((blogPost: IBlogPost) => {
          return blogPost.id != blogPostId;
        })
      )
    );

    dispatch(setIsThreeDotsMenuActive(!isThreeDotsMenuActive));
  });
};
