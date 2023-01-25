import React from "react";
import { IBlogPost } from "../../types/general.types";
import { BlogPostContainer } from "../BlogPost/BlogPostContainer";
import { BlogPostsListStyled } from "./BlogPostsList.styled";
import { BlogPostListProps } from "./BlogPostList.types";

export const BlogPostList: React.FC<BlogPostListProps> = (props) => {
  return (
    <>
      {props.isServerDataLoaded ? (
        <>
          {props.blogPosts.map((blogPost: IBlogPost) => (
            <BlogPostContainer blogPost={blogPost} />
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
