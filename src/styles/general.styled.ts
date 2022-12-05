import styled from "styled-components";
import { css } from "styled-components";

interface ButtonProps {
  bg?: string;
  color?: string;
  border?: string;
  shadow?: string;
  hover?: string;
}

interface TextFormStyledProps {
  marginLeft?: string;
}

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 640px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  color: #3c4043;
`;

export const MainContainerStyled = styled.div`
  display: flex;
  background: #f2f2f2;
  padding: 0px 20px 0px 20px;
`;

export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  gap: 5px;
  border-radius: 9px;
  cursor: pointer;
  transition: all 250ms;
  padding: 10px 16px 10px 16px;
  box-shadow: ${(props) => props.shadow || "rgba(0, 0, 0, 0.02) 0 1px 3px 0"};
  border: ${(props) => props.border || "0.5px solid rgba(0, 0, 0, 0.1)"};
  background-color: ${(props) => props.bg || "#a0bee9"};
  color: ${(props) => props.color || "white"};

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    background: #4683da;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }
`;

export const TextFormStyled = styled.div<TextFormStyledProps>`
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  min-height: 48px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #e3e5e8;
  background: #f7f7f7;
  color: #595959;
  padding: 10px;
  transition: 0.5s;

  &:focus-within {
    background: #ffffff;
  }

  &:hover {
    background: #ffffff;
  }
`;

export const TextAreaStyled = styled.textarea`
  border: none;
  width: 100%;
  resize: none;
  padding: 2px;
  background: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;
