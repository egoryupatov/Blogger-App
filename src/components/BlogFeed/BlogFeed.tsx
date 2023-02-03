import React from "react";
import { IBlogPost } from "../../types/general.types";
import { BlogPostContainer } from "../BlogPost/BlogPostContainer";
import { BlogFeedStyled } from "./BlogFeed.styled";
import { BlogFeedProps } from "./BlogFeed.types";

export const BlogFeed: React.FC<BlogFeedProps> = (props) => {
  return (
    <>
      {props.isServerDataLoaded ? (
        <>
          {props.blogPosts.map((blogPost: IBlogPost) => (
            <BlogPostContainer blogPost={blogPost} />
          ))}
        </>
      ) : (
        <BlogFeedStyled>
          <h1>Something went wrong!</h1>
        </BlogFeedStyled>
      )}
    </>
  );
};
