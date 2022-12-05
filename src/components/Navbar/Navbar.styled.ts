import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #d9f5ff;
  height: 60px;
  padding: 0px 20px 0px 20px;
  position: sticky;
  top: 0px;

  a {
    text-decoration: none;
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  gap: 20px;
  align-items: center;

  img {
    cursor: pointer;
    align-items: center;
  }
`;

export const AuthSectionStyled = styled.div`
  display: flex;
  font-weight: 800;
  font-weight: bold;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const AuthSectionContainerStyled = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  width: 100%;
`;

export const SearchbarStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 380px;

  input {
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    padding-left: 20px;
    border-radius: 9px;
    border-color: transparent;
    background-color: #caeaff;
    transition: 0.5s;
  }

  input:hover {
    background: white;
  }

  input:focus {
    background: white;
  }
`;

export const ButtonStyled = styled.div`
  display: flex;
  overflow: hidden;

  button {
    overflow: hidden;
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    gap: 5px;
    background-color: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    cursor: pointer;
    transition: all 250ms;
    padding: 10px;
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
    overflow: hidden;
  }
`;

export const InputStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  gap: 5px;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  cursor: pointer;
  transition: all 250ms;
  padding: 10px;

  input {
    display: none;
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }
`;

export const NavbarMiddleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 640px;
  height: 100%;
  width: 100%;
  padding: 7px 0px 7px 0px;
`;
