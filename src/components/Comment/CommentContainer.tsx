import React, { useState } from "react";
import {
  getCommentChildren,
  selectAuthorizedUserInfo,
} from "../../store/userSlice";
import { SERVER_URL } from "../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ICommentContainerProps } from "./CommentContainer.types";
import { Comment } from "./Comment";
import { useParams } from "react-router-dom";

export const CommentContainer: React.FC<ICommentContainerProps> = (props) => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const authorizedUser = useAppSelector(selectAuthorizedUserInfo);

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
    text: "",
    user: {},
    blogPost: {
      id: params.id,
    },
    parent: props.comment.parent?.id,
    children: [],
  });

  const handleAnswerChange = (e: any) => {
    setAnswer({
      ...answer,
      text: e.target.value,
      user: {
        id: authorizedUser.id,
        avatar: authorizedUser.avatar,
        login: authorizedUser.login,
      },
    });
  };

  const handleAnswerAdd = (parentCommentId: number) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answer),
    };

    fetch(
      `${SERVER_URL}/comments/${props.comment.id}/answer`,
      options
    ); /*.then(
      (response) => dispatch(() => setIsAnswerWindowOpened(false))
    );*/
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
