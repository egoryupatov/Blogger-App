import React from "react";
import { IBlogPost, IUser } from "../../store/userSlice";
import { BlogPost } from "../../components/BlogPostsList/BlogPost";
import { UnauthorizedUserBlogPostsListStyled } from "./UnauthorizedUserBlogPostsList.styled";

interface UnauthorizedUserArticleListProps {
  userInfo: IUser;
}

export const UnauthorizedUserBlogPostsList: React.FC<
  UnauthorizedUserArticleListProps
> = (props) => {
  return (
    <UnauthorizedUserBlogPostsListStyled>
      {props.userInfo.articles.map((blogPost: IBlogPost) => (
        <BlogPost blogPost={blogPost} />
      ))}
    </UnauthorizedUserBlogPostsListStyled>
  );
};
