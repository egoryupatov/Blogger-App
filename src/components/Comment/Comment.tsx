import React, { useState } from "react";
import { getCommentChildren, IComment, IUser } from "../../store/userSlice";
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

  // сделать понижение и повышение рейтинга не через пропсы а через редакс

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

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <Link to={`/user/${props.comment.author.id}`}>
                <div style={{ fontSize: "16px" }}>
                  {props.comment.author.login}
                </div>
              </Link>
              <div style={{ fontSize: "12px", color: "#595959;" }}>
                {getTimeAgo(props.comment.publishDate)}
              </div>
            </div>
          </CommentTitleAuthorStyled>

          {/*qqqqqqqqqqqqqqqqqq*/}

          <CommentRatingStyled>
            <span
              onClick={() =>
                onCommentRatingDecrement(props.comment.id, dispatch)
              }
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              keyboard_arrow_down
            </span>

            {props.comment.rating > 0 ? (
              <div style={{ color: "#2EA839" }}>{props.comment.rating}</div>
            ) : (
              <div style={{ color: "red" }}>{props.comment.rating}</div>
            )}
            <span
              onClick={() =>
                onCommentRatingIncrement(props.comment.id, dispatch)
              }
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              keyboard_arrow_up
            </span>
          </CommentRatingStyled>

          {/*qqqqqqqqqqqqqqqqqq*/}
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
          <CommentForm
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
              <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                <Comment
                  comment={childComment}
                  comments={props.comments}
                  /*setComments={props.setComments}*/
                  onCommentRatingIncrement={() =>
                    onCommentRatingIncrement(props.comment.id, dispatch)
                  }
                  onCommentRatingDecrement={() =>
                    onCommentRatingDecrement(props.comment.id, dispatch)
                  }
                />
              </div>
            ))
          : null}
      </CommentStyled>
    </>
  );
};
