import React, { useEffect, useState } from "react";
import { DashboardMiddlePartStyled, UserStyled } from "../User.styled";
import { IBlogPost } from "../../../types/general.types";
import { AuthorizedUserBlogPost } from "../AuthorizedUserBlogPosts/AuthorizedUserBlogPost";
import { UserHiddenBlogPostsProps } from "./UserHiddenBlogPosts.types";
import { SERVER_URL } from "../../../constants/constants";

export const UserHiddenBlogPostsContainer: React.FC<
  UserHiddenBlogPostsProps
> = (props) => {
  useEffect(() => {
    fetch(`${SERVER_URL}/posts/hidden`)
      .then((response) => response.json())
      .then((response) => setHiddenBlogPosts(response));
  }, []);

  const [hiddenBlogPosts, setHiddenBlogPosts] = useState([]);

  return (
    <DashboardMiddlePartStyled>
      <UserStyled>
        <h3>Hidden posts</h3>

        {hiddenBlogPosts.map((hiddenBlogPost: IBlogPost) => (
          <AuthorizedUserBlogPost
            key={hiddenBlogPost.id}
            blogPost={hiddenBlogPost}
            isBannedPosts={true}
            onDeleteBlogPostClick={props.onDeleteBlogPostClick}
            onUnhideBlogPostClick={props.onUnhideBlogPostClick}
          />
        ))}
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
