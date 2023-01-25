import React from "react";
import {
  selectAllBlogPosts,
  selectIsServerDataLoaded,
} from "../../store/userSlice";
import { useAppSelector } from "../../store/hooks";
import { useGetAllPosts } from "../../utils/useGetAllPosts";
import { BlogPostList } from "./BlogPostList";

export const BlogPostsListContainer: React.FC = () => {
  useGetAllPosts();
  const blogPosts = useAppSelector(selectAllBlogPosts);
  const isServerDataLoaded = useAppSelector(selectIsServerDataLoaded);

  return (
    <BlogPostList
      blogPosts={blogPosts}
      isServerDataLoaded={isServerDataLoaded}
    />
  );
};
