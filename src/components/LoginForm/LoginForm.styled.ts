import styled from "styled-components";

export const LoginFormStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: -ms-flexbox;
  display: flex;
  padding: 36px 16px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const LoginFormContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  border-radius: 9px;
  width: 100%;
  height: 100%;
  padding: 20px 30px 20px 30px;
  background: white;
  max-height: 300px;
  max-width: 400px;

  h1 {
    display: flex;
    justify-content: center;
  }

  &:nth-child(1) {
    display: flex;
    gap: 10px;
  }

  input {
    display: flex;
    width: 100%;
    height: 20%;
    align-items: center;
    padding-left: 20px;
    border-radius: 9px;
    border-color: transparent;
    background: #f5f5f5;
    transition: 0.5s;
    color: #595959;
  }

  input:hover {
    background: white;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    color: black;
  }

  input:focus {
    background: white;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    color: black;
  }

  button {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    gap: 5px;
    background-color: #a2c1ec;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    cursor: pointer;
    transition: all 250ms;
    padding: 10px;
    color: white;

    &:hover {
      border-color: rgba(0, 0, 0, 0.15);
      background: #4683da;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      transform: translateY(-1px);
    }
  }
`;

export const LoginFormCloseStyled = styled.div`
  display: flex;
  justify-content: end;

  span {
    cursor: pointer;
  }
`;
