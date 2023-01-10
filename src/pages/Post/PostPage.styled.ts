import styled from "styled-components";

export const PostPageStyled = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  border-radius: 9px;
  width: 100%;
  padding: 15px 20px 15px 20px;
  margin-top: 20px;
  background: white;
  transition: all 250ms;
  margin-bottom: 5px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  input[type="file"] {
    padding: 10px;
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

export const PostPageComments = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  background: white;
  transition: all 250ms;
  margin-bottom: 20px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  input[type="file"] {
    padding: 10px;
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
