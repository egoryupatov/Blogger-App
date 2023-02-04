import React from "react";
import { SubscribeButtonStyled } from "./SubscribeButton.styled";

interface SubscribeButtonProps {
  text: string;
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = (
  props: SubscribeButtonProps
) => {
  return <SubscribeButtonStyled>{props.text}</SubscribeButtonStyled>;
};
