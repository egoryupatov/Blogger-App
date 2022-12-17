import React from "react";
import { BlogPost } from "./BlogPost";
import { IBlogPost, selectAllBlogPosts } from "../../store/userSlice";
import { useAppSelector } from "../../store/hooks";
import { useGetAllPosts } from "../../utils/useGetAllPosts";

export const BlogPostsList: React.FC = () => {
  useGetAllPosts();
  const blogPosts = useAppSelector(selectAllBlogPosts);

  return (
    <>
      {blogPosts.map((blogPost: IBlogPost) => (
        <BlogPost blogPost={blogPost} />
      ))}
    </>
  );
};
