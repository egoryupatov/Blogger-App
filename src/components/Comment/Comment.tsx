import React, { useState } from "react";
import { getCommentChildren, IComment } from "../../store/userSlice";
import {
  CommentTitleAuthorStyled,
  CommentTitleStyled,
  CommentStyled,
  CommentTextStyled,
  CommentRatingStyled,
  CommentAnswerStyled,
  TimeAgoStyled,
  AuthorNameStyled,
  CommentInfoStyled,
  PositiveRatingStyled,
  NegativeRatingStyled,
  ChildCommentContainerStyled,
} from "./Comment.styled";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { Link } from "react-router-dom";
import { AnswerForm } from "./AnswerForm";
import { SERVER_URL } from "../../constants/constants";
import { useAppDispatch } from "../../store/hooks";
import { onCommentRatingDecrement } from "../../utils/onCommentRatingDecrement";
import { onCommentRatingIncrement } from "../../utils/onCommentRatingIncrement";

interface CommentProps {
  comment: IComment;
  comments: IComment[];
  onCommentRatingIncrement: () => void;
  onCommentRatingDecrement: () => void;
}

export const Comment: React.FC<CommentProps> = (props) => {
  const dispatch = useAppDispatch();

  const [areChildrenCommentsDisplayed, setAreChildCommentsDisplayed] =
    useState(false);

  const onCommentChildrenRequest = (parentCommentId: number) => {
    fetch(`${SERVER_URL}/comments/children/${parentCommentId}`)
      .then((response) => response.json())
      .then((children) => {
        dispatch(getCommentChildren(children));
        setAreChildCommentsDisplayed((prevState) => !prevState);
      });
  };

  const [isAnswerWindowOpened, setIsAnswerWindowOpened] = useState(false);

  const [answer, setAnswer] = useState({
    author: localStorage.getItem("id"),
    text: "",
    article: props.comment.article.id,
    parent: props.comment.parent?.id,
  });

  const onAnswerChange = (e: any) => {
    setAnswer({ ...answer, text: e.target.value });
  };

  const onAnswerAdd = (parentCommentId: number) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answer),
    };

    fetch(`${SERVER_URL}/comments/${props.comment.id}/answer`, options);
  };

  return (
    <>
      <CommentStyled>
        <CommentTitleStyled>
          <CommentTitleAuthorStyled>
            <Link to={`/user/${props.comment.author.id}`}>
              <img src={`${props.comment.author.avatar}`} />
            </Link>

            <CommentInfoStyled>
              <Link to={`/user/${props.comment.author.id}`}>
                <AuthorNameStyled>
                  {props.comment.author.login}
                </AuthorNameStyled>
              </Link>

              <TimeAgoStyled>
                {getTimeAgo(props.comment.publishDate)}
              </TimeAgoStyled>
            </CommentInfoStyled>
          </CommentTitleAuthorStyled>

          <CommentRatingStyled>
            <span
              onClick={() =>
                onCommentRatingDecrement(props.comment.id, dispatch)
              }
              className="material-symbols-outlined"
            >
              keyboard_arrow_down
            </span>

            {props.comment.rating > 0 ? (
              <PositiveRatingStyled>
                {props.comment.rating}
              </PositiveRatingStyled>
            ) : (
              <NegativeRatingStyled>
                {props.comment.rating}
              </NegativeRatingStyled>
            )}
            <span
              onClick={() =>
                onCommentRatingIncrement(props.comment.id, dispatch)
              }
              className="material-symbols-outlined"
            >
              keyboard_arrow_up
            </span>
          </CommentRatingStyled>
        </CommentTitleStyled>

        <CommentTextStyled>
          <div>{props.comment.text}</div>
        </CommentTextStyled>

        <CommentAnswerStyled>
          <span onClick={() => setIsAnswerWindowOpened(!isAnswerWindowOpened)}>
            Answer
          </span>

          {props.comment.children.length > 0 ? (
            <span onClick={() => onCommentChildrenRequest(props.comment.id)}>
              {props.comment.children.length} more replies
            </span>
          ) : null}
        </CommentAnswerStyled>

        {isAnswerWindowOpened ? (
          <AnswerForm
            setIsAnswerWindowOpened={() =>
              setIsAnswerWindowOpened(!isAnswerWindowOpened)
            }
            onAnswerChange={onAnswerChange}
            onAnswerAdd={onAnswerAdd}
            comment={props.comment}
          />
        ) : null}

        {areChildrenCommentsDisplayed
          ? props.comment.children.map((childComment: IComment) => (
              <ChildCommentContainerStyled>
                <Comment
                  comment={childComment}
                  comments={props.comments}
                  onCommentRatingIncrement={() =>
                    onCommentRatingIncrement(props.comment.id, dispatch)
                  }
                  onCommentRatingDecrement={() =>
                    onCommentRatingDecrement(props.comment.id, dispatch)
                  }
                />
              </ChildCommentContainerStyled>
            ))
          : null}
      </CommentStyled>
    </>
  );
};
