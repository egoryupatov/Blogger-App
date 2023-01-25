import React from "react";
import { SubscribeButtonContainer } from "../User.styled";
import { ButtonStyled } from "../../../styles/general.styled";
import { SubscribeButtonsProps } from "./SubscribeButtons.types";
import { IUser } from "../../../types/general.types";

export const SubscribeButtons: React.FC<SubscribeButtonsProps> = (props) => {
  return (
    <>
      {props.authorizedUser.subscriptions.find(
        (user: IUser) => user.id === Number(props.params.id)
      ) ? (
        <SubscribeButtonContainer>
          <ButtonStyled
            onClick={props.onUnSubscribeClick}
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
            onClick={props.onSubscribeClick}
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
