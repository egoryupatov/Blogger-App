import React, { useState } from "react";
import { getCommentChildren } from "../../store/userSlice";
import { SERVER_URL } from "../../constants/constants";
import { useAppDispatch } from "../../store/hooks";
import { ICommentContainerProps } from "./CommentContainer.types";
import { Comment } from "./Comment";

export const CommentContainer: React.FC<ICommentContainerProps> = (props) => {
  console.log(props.comments);
  const dispatch = useAppDispatch();

  const [areChildrenCommentsDisplayed, setAreChildCommentsDisplayed] =
    useState<boolean>(false);

  const onGetRepliesClick = (parentCommentId: number) => {
    fetch(`${SERVER_URL}/comments/child/${parentCommentId}`)
      .then((response) => response.json())
      .then((childrenComments) => {
        dispatch(
          getCommentChildren({
            children: childrenComments,
            parentId: parentCommentId,
          })
        );
        setAreChildCommentsDisplayed((prevState) => !prevState);
      });
  };

  const [isAnswerWindowOpened, setIsAnswerWindowOpened] =
    useState<boolean>(false);

  const [answer, setAnswer] = useState({
    user: localStorage.getItem("id"),
    text: "",
    blogPost: props.comment.blogPost.id,
    parent: props.comment.parent?.id,
  });

  const handleAnswerChange = (e: any) => {
    setAnswer({ ...answer, text: e.target.value });
  };

  const handleAnswerAdd = (parentCommentId: number) => {
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
    <Comment
      comment={props.comment}
      comments={props.comments}
      areChildrenCommentsDisplayed={areChildrenCommentsDisplayed}
      setIsAnswerWindowOpened={setIsAnswerWindowOpened}
      isAnswerWindowOpened={isAnswerWindowOpened}
      dispatch={dispatch}
      onAnswerAdd={handleAnswerAdd}
      onAnswerChange={handleAnswerChange}
      onCommentChildrenRequest={onGetRepliesClick}
    />
  );
};
