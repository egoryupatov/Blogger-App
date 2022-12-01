import styled from "styled-components";

export const AddPostWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 640px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const AddPostStyled = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  border-radius: 9px;
  width: 100%;
  padding: 20px 25px 20px 25px;
  margin-top: 20px;
  background: white;
  transition: all 250ms;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  input {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 40px;
    align-items: center;
    padding-left: 10px;
    border-radius: 9px;
    border: 1px solid #e3e5e8;
    background: #ffffff;
    transition: 0.5s;
    color: #595959;
  }

  input[type="file"] {
    padding: 10px;
  }

  textarea {
    padding: 10px;
    min-height: 200px;
    max-height: 100%;
    max-width: 100%;
    min-width: 100%;
    border-radius: 9px;
    border: 1px solid #e3e5e8;
  }

  select {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 40px;
    align-items: center;
    padding-left: 10px;
    border-radius: 9px;
    border: 1px solid #e3e5e8;
    background: #ffffff;
    transition: 0.5s;
    color: #595959;
  }

  label {
    font-weight: 500;
  }
`;
