import React from "react";
import { SubscribeButtonContainer } from "./UserStyled";
import { ButtonStyled } from "../../styles/general.styled";
import { Params } from "react-router-dom";
import { getUserInfo, IUser } from "../../store/userSlice";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";

interface SubscribeButtonsProps {
  params: Params;
  authorizedUser: IUser;
  userInfo: IUser;
}

export const SubscribeButtons: React.FC<SubscribeButtonsProps> = (props) => {
  const dispatch = useDispatch();

  const onSubscribeClick = () => {
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

  const onUnSubscribeClick = () => {
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
    <>
      {props.authorizedUser.subscriptions.find(
        (user) => user.id === Number(props.params.id)
      ) ? (
        <SubscribeButtonContainer>
          <ButtonStyled
            onClick={onUnSubscribeClick}
            border="none"
            shadow="none"
            bg="#4683da"
            hover="yes"
          >
            Unsubscribe
          </ButtonStyled>
        </SubscribeButtonContainer>
      ) : (
        <SubscribeButtonContainer>
          <ButtonStyled
            onClick={onSubscribeClick}
            border="none"
            shadow="none"
            bg="#4683da"
            hover="yes"
          >
            <span className="material-symbols-outlined">person_add</span>
            Subscribe
          </ButtonStyled>
        </SubscribeButtonContainer>
      )}
    </>
  );
};
