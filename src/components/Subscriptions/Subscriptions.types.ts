import { Params } from "react-router-dom";
import { IUser } from "../../types/general.types";

export interface SubProps {
  params: Params;
  userInfo: IUser;
}
