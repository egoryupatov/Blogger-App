import styled from "styled-components";

export const ThreeDotsMenuContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 9px;
  margin-top: 40px;
  margin-right: 40px;
  width: 100%;
  max-width: 150px;
  padding: 5px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 500;

  div {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const ThreeDotsMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  width: 100%;
  padding: 10px;

  &:hover {
    background: #f2f2f2;
  }
`;
