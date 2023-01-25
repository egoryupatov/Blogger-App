import { IUser } from "../../../types/general.types";
import { Dispatch } from "react";

export interface LoginButtonProps {
  isUserLogged: boolean;
  navigate: any;
  userId: string | null;
  authorizedUser: IUser;
  dispatch: Dispatch<any>;
}
