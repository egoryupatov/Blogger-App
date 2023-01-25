import { IUser } from "../../../types/general.types";
import { Params } from "react-router-dom";

export interface SubscribeButtonsProps {
  authorizedUser: IUser;
  params: Params;
  onUnSubscribeClick: () => void;
  onSubscribeClick: () => void;
}

export interface SubscribeButtonsContainerProps {
  params: Params;
  authorizedUser: IUser;
  userInfo: IUser;
}
