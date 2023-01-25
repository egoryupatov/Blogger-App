import React from "react";
import {
  ThreeDotsMenuContainerStyled,
  ThreeDotsMenuStyled,
} from "./ThreeDotsMenu.styled";
import { ThreeDotsMenuInterface } from "./ThreeDotsMenu.types";

export const ThreeDotsMenu: React.FC<ThreeDotsMenuInterface> = (props) => {
  return (
    <ThreeDotsMenuContainerStyled>
      <ThreeDotsMenuStyled>
        <div>Report</div>
      </ThreeDotsMenuStyled>
      <ThreeDotsMenuStyled onClick={props.onPostHideClick}>
        <div>Hide</div>
      </ThreeDotsMenuStyled>
    </ThreeDotsMenuContainerStyled>
  );
};
