import React from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../../types/general.types";
import { Subscriptions } from "./Subscriptions";

interface SubProps {
  userInfo: IUser;
}

export const SubscriptionsContainer: React.FC<SubProps> = (props) => {
  const params = useParams();

  return <Subscriptions params={params} userInfo={props.userInfo} />;
};
