import React, { useState } from "react";
import { IComment } from "../../store/userSlice";
import {
  CommentTitleAuthorStyled,
  CommentTitleStyled,
  CommentStyled,
  CommentTextStyled,
  CommentRatingStyled,
  CommentAnswerStyled,
} from "./Comment.styled";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { Link } from "react-router-dom";
import { CommentForm } from "./CommentForm";

interface CommentProps {
  comment: IComment;
  onCommentRatingIncrement: (commentId: number) => void;
  onCommentRatingDecrement: (commentId: number) => void;
}

export const Comment: React.FC<CommentProps> = (props) => {
  const [isAnswerWindowOpened, setIsAnswerWindowOpened] = useState(false);

  return (
    <>
      <CommentStyled>
        <CommentTitleStyled>
          <CommentTitleAuthorStyled>
            <Link to={`/user/${props.comment.author.id}`}>
              <img src="/avatar.png" />
            </Link>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <Link to={`/user/${props.comment.author.id}`}>
                <p style={{ fontSize: "16px" }}>{props.comment.author.login}</p>
              </Link>
              <p style={{ fontSize: "12px", color: "#595959;" }}>
                {getTimeAgo(props.comment.publishDate)}
              </p>
            </div>
          </CommentTitleAuthorStyled>
          <CommentRatingStyled>
            <span
              onClick={() => props.onCommentRatingDecrement(props.comment.id)}
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              keyboard_arrow_down
            </span>

            {props.comment.rating > 0 ? (
              <p style={{ color: "#2EA839" }}>{props.comment.rating}</p>
            ) : (
              <p style={{ color: "red" }}>{props.comment.rating}</p>
            )}
            <span
              onClick={() => props.onCommentRatingIncrement(props.comment.id)}
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              keyboard_arrow_up
            </span>
          </CommentRatingStyled>
        </CommentTitleStyled>

        <CommentTextStyled>
          <p>{props.comment.text}</p>
        </CommentTextStyled>

        <CommentAnswerStyled
          onClick={() => setIsAnswerWindowOpened(!isAnswerWindowOpened)}
        >
          <span>Answer</span>
        </CommentAnswerStyled>

        {isAnswerWindowOpened ? <CommentForm /> : null}

        {props.comment.children
          ? props.comment.children.map((childComment: IComment) => (
              <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                <Comment
                  comment={childComment}
                  onCommentRatingIncrement={props.onCommentRatingIncrement}
                  onCommentRatingDecrement={props.onCommentRatingDecrement}
                />
              </div>
            ))
          : null}
      </CommentStyled>
    </>
  );
};
