import React from "react";
import {
  ChildCommentContainerStyled,
  CommentAnswerStyled,
  CommentInfoStyled,
  CommentRatingStyled,
  CommentStyled,
  CommentTextStyled,
  CommentTitleStyled,
  CommentTitleUserStyled,
  NegativeRatingStyled,
  PositiveRatingStyled,
  TimeAgoStyled,
  UserNameStyled,
} from "./Comment.styled";
import { Link } from "react-router-dom";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { onCommentRatingDecrement } from "../../utils/onCommentRatingDecrement";
import { onCommentRatingIncrement } from "../../utils/onCommentRatingIncrement";
import { AnswerForm } from "../AnswerForm/AnswerForm";
import { IComment } from "../../types/general.types";
import { CommentContainer } from "./CommentContainer";
import { CommentProps } from "./Comment.types";
import { useAppSelector } from "../../store/hooks";
import { getCommentChildren } from "../../store/userSlice";

export const Comment: React.FC<CommentProps> = (props) => {
  return (
    <CommentStyled>
      <CommentTitleStyled>
        <CommentTitleUserStyled>
          <Link to={`/user/${props.comment.user.id}`}>
            <img src={`${props.comment.user.avatar}`} alt={""} />
          </Link>

          <CommentInfoStyled>
            <Link to={`/user/${props.comment.user.id}`}>
              <UserNameStyled>{props.comment.user.login}</UserNameStyled>
            </Link>

            <TimeAgoStyled>
              {getTimeAgo(props.comment.publishDate)}
            </TimeAgoStyled>
          </CommentInfoStyled>
        </CommentTitleUserStyled>

        <CommentRatingStyled>
          <span
            onClick={() =>
              onCommentRatingDecrement(props.comment.id, props.dispatch)
            }
            className="material-symbols-outlined"
          >
            keyboard_arrow_down
          </span>

          {props.comment.rating > 0 ? (
            <PositiveRatingStyled>{props.comment.rating}</PositiveRatingStyled>
          ) : (
            <NegativeRatingStyled>{props.comment.rating}</NegativeRatingStyled>
          )}
          <span
            onClick={() =>
              onCommentRatingIncrement(props.comment.id, props.dispatch)
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
        <span
          onClick={() =>
            props.setIsAnswerWindowOpened(!props.isAnswerWindowOpened)
          }
        >
          Answer
        </span>

        {props.comment.children.length > 0 ? (
          <span
            onClick={() => props.onCommentChildrenRequest(props.comment.id)}
          >
            {props.comment.children.length} more replies
          </span>
        ) : null}
      </CommentAnswerStyled>

      {props.isAnswerWindowOpened ? (
        <AnswerForm
          setIsAnswerWindowOpened={() =>
            props.setIsAnswerWindowOpened(!props.isAnswerWindowOpened)
          }
          onAnswerChange={props.onAnswerChange}
          onAnswerAdd={props.onAnswerAdd}
          comment={props.comment}
        />
      ) : null}

      {props.areChildrenCommentsDisplayed
        ? props.comment.children.map((childComment: IComment) => (
            <ChildCommentContainerStyled>
              <CommentContainer
                comment={childComment}
                comments={props.comments}
                onCommentRatingIncrement={() =>
                  onCommentRatingIncrement(props.comment.id, props.dispatch)
                }
                onCommentRatingDecrement={() =>
                  onCommentRatingDecrement(props.comment.id, props.dispatch)
                }
              />
            </ChildCommentContainerStyled>
          ))
        : null}
    </CommentStyled>
  );
};
