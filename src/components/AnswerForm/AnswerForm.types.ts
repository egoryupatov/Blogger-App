import { Dispatch, SetStateAction } from "react";
import { IComment } from "../../types/general.types";

export interface AnswerFormProps {
  setIsAnswerWindowOpened: Dispatch<SetStateAction<boolean>>;
  onAnswerChange: (e: any) => void;
  onAnswerAdd: (id: number) => void;
  comment: IComment;
}
