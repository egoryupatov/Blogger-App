import React from "react";
import { IBlogPost } from "../../../types/general.types";
import { BlogPostContainer } from "../../../components/BlogPost/BlogPostContainer";
import { UnauthorizedUserBlogPostsStyled } from "./UnauthorizedUserBlogPosts.styled";
import { UnauthorizedUserArticleListProps } from "./UnauthorizedUserBlogPosts.types";

export const UnauthorizedUserBlogPosts: React.FC<
  UnauthorizedUserArticleListProps
> = (props) => {
  return (
    <UnauthorizedUserBlogPostsStyled>
      {props.userInfo.blogPosts.map((blogPost: IBlogPost) => (
        <BlogPostContainer blogPost={blogPost} />
      ))}
    </UnauthorizedUserBlogPostsStyled>
  );
};
