import React from "react";
import { BlogPost } from "./BlogPost";
import {
  IBlogPost,
  selectAllBlogPosts,
  selectIsServerDataLoaded,
} from "../../store/userSlice";
import { useAppSelector } from "../../store/hooks";
import { useGetAllPosts } from "../../utils/useGetAllPosts";
import { Categories } from "../Categories/Categories";
import { BlogPostsListStyled } from "./BlogPostsList.styled";

export const BlogPostsList: React.FC = () => {
  useGetAllPosts();
  const blogPosts = useAppSelector(selectAllBlogPosts);
  const isServerDataLoaded = useAppSelector(selectIsServerDataLoaded);

  return (
    <>
      {isServerDataLoaded ? (
        <>
          {blogPosts.map((blogPost: IBlogPost) => (
            <BlogPost blogPost={blogPost} />
          ))}
        </>
      ) : (
        <BlogPostsListStyled>
          <h1>Something went wrong!</h1>
        </BlogPostsListStyled>
      )}
    </>
  );
};
