import React, { useState } from "react";
import {
  selectAllBlogPosts,
  selectIsThreeDotsMenuActive,
  setIsThreeDotsMenuActive,
} from "../../store/userSlice";
import { SERVER_URL } from "../../constants/constants";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { BlogPost } from "./BlogPost";
import { BlogPostContainerProps } from "./BlogPostContainer.types";

export const BlogPostContainer: React.FC<BlogPostContainerProps> = (props) => {
  const [isUserSubscribed, setIsUserSubscribed] = useState<boolean>(false);
  const isThreeDotsMenuActive = useAppSelector(selectIsThreeDotsMenuActive);
  const dispatch = useDispatch();
  const blogPosts = useAppSelector(selectAllBlogPosts);

  const handleThreeDotsMenuClick = () => {
    dispatch(setIsThreeDotsMenuActive(!isThreeDotsMenuActive));
  };

  const handleSubscribeClick = (subId: number) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: Number(localStorage.getItem("id")),
        subId: subId,
      }),
    };

    fetch(`${SERVER_URL}/users/subscribe`, options).then((response) =>
      setIsUserSubscribed((prevState) => !prevState)
    );
  };

  return (
    <BlogPost
      blogPost={props.blogPost}
      blogPosts={blogPosts}
      dispatch={dispatch}
      isThreeDotsMenuActive={isThreeDotsMenuActive}
      onThreeDotsMenuClick={handleThreeDotsMenuClick}
      onSubscribeClick={handleSubscribeClick}
      isUserSubscribed={isUserSubscribed}
    />
  );
};
