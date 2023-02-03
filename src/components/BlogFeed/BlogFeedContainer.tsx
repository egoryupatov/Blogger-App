import React from "react";
import {
  selectAllBlogPosts,
  selectIsServerDataLoaded,
} from "../../store/userSlice";
import { useAppSelector } from "../../store/hooks";
import { useGetAllPosts } from "../../utils/useGetAllPosts";
import { BlogFeed } from "./BlogFeed";
import { LatestBlogPostsContainer } from "../LatestBlogposts/LatestBlogPostsContainer";

export const BlogFeedContainer: React.FC = () => {
  useGetAllPosts();
  const blogPosts = useAppSelector(selectAllBlogPosts);
  const isServerDataLoaded = useAppSelector(selectIsServerDataLoaded);

  return (
    <>
      <LatestBlogPostsContainer />
      <BlogFeed blogPosts={blogPosts} isServerDataLoaded={isServerDataLoaded} />
    </>
  );
};
