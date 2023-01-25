import React from "react";
import { getUserInfo } from "../../../store/userSlice";
import { SERVER_URL } from "../../../constants/constants";
import { useDispatch } from "react-redux";
import { SubscribeButtons } from "./SubscribeButtons";
import { SubscribeButtonsContainerProps } from "./SubscribeButtons.types";

export const SubscribeButtonsContainer: React.FC<
  SubscribeButtonsContainerProps
> = (props) => {
  const dispatch = useDispatch();

  const handleSubscribeClick = () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        userId: Number(localStorage.getItem("id")),
        subId: Number(props.params.id),
      }),
    };

    fetch(`${SERVER_URL}/users/subscribe`, options).then((response) =>
      dispatch(
        getUserInfo({
          ...props.userInfo,
          subscribers: [
            ...props.userInfo.subscribers,
            {
              id: props.authorizedUser.id,
              avatar: props.authorizedUser.avatar,
            },
          ],
        })
      )
    );
  };

  const handleUnsubscribeClick = () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        userId: Number(localStorage.getItem("id")),
        subId: Number(props.params.id),
      }),
    };

    fetch(`${SERVER_URL}/users/unsubscribe`, options).then((response) =>
      dispatch(
        getUserInfo({
          ...props.userInfo,
          subscribers: props.userInfo.subscribers.filter(
            (user) => user.id != props.authorizedUser.id
          ),
        })
      )
    );
  };

  return (
    <SubscribeButtons
      authorizedUser={props.authorizedUser}
      params={props.params}
      onUnSubscribeClick={handleUnsubscribeClick}
      onSubscribeClick={handleSubscribeClick}
    />
  );
};
