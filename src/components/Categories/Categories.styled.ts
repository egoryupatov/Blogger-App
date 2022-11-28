import styled from "styled-components";

export const CategoriesContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  width: 200px;
  height: 100%;
  top: 100px;
  margin-top: 40px;
  margin-left: 20px;
`;

export const CategoryStyled = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  min-height: 45px;
  justify-content: start;
  align-items: center;
  border-radius: 9px;
  text-decoration: none;
  padding: 10px 20px 10px 20px;

  &:hover {
    background: #f9f9f9;
  }
`;
