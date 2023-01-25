import React from "react";
import {
  ButtonStyled,
  MainContainerStyled,
  TextAreaStyled,
  TextFormStyled,
  WrapperStyled,
} from "../../styles/general.styled";
import { Categories } from "../../components/Categories/Categories";
import { BlogPostContainer } from "../../components/BlogPost/BlogPostContainer";
import { PostPageComments } from "./PostPage.styled";
import { onNewCommentAdd } from "../../utils/onNewCommentAdd";
import { setIsLoginFormDisplayed } from "../../store/userSlice";
import { IComment } from "../../types/general.types";
import { LoginFormContainer } from "../../components/LoginForm/LoginFormContainer";
import { CommentContainer } from "../../components/Comment/CommentContainer";
import { onCommentRatingIncrement } from "../../utils/onCommentRatingIncrement";
import { onCommentRatingDecrement } from "../../utils/onCommentRatingDecrement";
import { CommentsBoardContainer } from "../../components/CommentsBoard/CommentsBoardContainer";
import { PostPageProps } from "./PostPage.types";

export const PostPage: React.FC<PostPageProps> = (props) => {
  return (
    <MainContainerStyled>
      <Categories />
      <WrapperStyled>
        <BlogPostContainer blogPost={props.blogPost} />

        {/* Вынести комментарии к посту к в отдельный компонент  */}

        <PostPageComments>
          <h2>Comments</h2>

          <TextFormStyled>
            <TextAreaStyled
              id="description"
              placeholder="What are your thoughts?"
              onChange={props.handleAddingComment}
            />

            {localStorage.getItem("token") ? (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "end",
                  width: "100%",
                }}
              >
                <ButtonStyled
                  hover="yes"
                  onClick={() =>
                    onNewCommentAdd(
                      props.newComment,
                      props.params,
                      props.dispatch
                    )
                  }
                >
                  Add a comment
                </ButtonStyled>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "end",
                  width: "100%",
                }}
              >
                <ButtonStyled
                  hover="yes"
                  onClick={() => props.dispatch(setIsLoginFormDisplayed(true))}
                >
                  Add a comment
                </ButtonStyled>
              </div>
            )}

            {props.isLoginFormDisplayed ? <LoginFormContainer /> : null}
          </TextFormStyled>

          <span id="comments"></span>

          {props.comments.length > 0
            ? props.comments.map((comment: IComment) => (
                <CommentContainer
                  key={comment.id}
                  comment={comment}
                  comments={props.comments}
                  onCommentRatingIncrement={() =>
                    onCommentRatingIncrement(comment.id, props.dispatch)
                  }
                  onCommentRatingDecrement={() =>
                    onCommentRatingDecrement(comment.id, props.dispatch)
                  }
                />
              ))
            : null}
        </PostPageComments>
      </WrapperStyled>
      <CommentsBoardContainer />
    </MainContainerStyled>
  );
};
