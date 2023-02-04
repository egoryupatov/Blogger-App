import React from "react";
import {
  LatestBlogPostComments,
  LatestBlogPostsListStyled,
  LatestBlogPostStyled,
  LatestBlogPostTitle,
  ShowMoreStyled,
} from "./LatestBlogPosts.styled";
import { IBlogPost } from "../../types/general.types";
import { Link } from "react-router-dom";
import { ContainerStyled } from "../../styles/general.styled";
import { LatestBlogPostsProps } from "./LatestBlogPosts.types";

export const LatestBlogPosts: React.FC<LatestBlogPostsProps> = (
  props: LatestBlogPostsProps
) => {
  return (
    <ContainerStyled>
      <LatestBlogPostsListStyled>
        {props.latestPosts.map((post: IBlogPost) => (
          <LatestBlogPostStyled key={post.id}>
            <Link to={`/posts/${post.category.name}/${post.id}`}>
              <LatestBlogPostTitle>{post.title}</LatestBlogPostTitle>
            </Link>
            <LatestBlogPostComments>
              <Link to={`/posts/${post.category.name}/${post.id}#comments`}>
                {post.comments.length}
              </Link>
            </LatestBlogPostComments>
          </LatestBlogPostStyled>
        ))}
        <ShowMoreStyled onClick={props.onShowMoreClick}>
          Show more
        </ShowMoreStyled>
      </LatestBlogPostsListStyled>
    </ContainerStyled>
  );
};
