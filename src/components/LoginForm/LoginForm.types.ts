import { Dispatch } from "react";

export interface LoginFormProps {
  dispatch: Dispatch<any>;
  onUsernameChange: (event: any) => void;
  onPasswordChange: (event: any) => void;
  onSignInClick: () => void;
  error: boolean;
}
