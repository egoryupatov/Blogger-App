import styled from "styled-components";

export const CategoriesContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  width: 100%;
  height: 100%;
  top: 100px;
  margin-top: 40px;
`;

export const CategoryStyled = styled.div`
  display: flex;
  gap: 10px;
  max-width: 200px;
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
