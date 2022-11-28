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

export const PostPageComments = styled(PostPageStyled)`
  margin-bottom: 20px;

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
`;
