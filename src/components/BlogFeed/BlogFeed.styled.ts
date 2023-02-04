import styled from "styled-components";

export const BlogFeedStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  width: 100%;
  /*  padding: 10px 20px 10px 20px;*/
  margin-top: 25px;
  background: white;
  transition: all 250ms;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  a {
    text-decoration: none;
  }

  &:nth-last-child(1) {
    margin-bottom: 20px;
  }
`;

export const ContentHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 0px 20px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px #0000001a;
  }

  &:nth-last-child(even) {
    padding-bottom: 10px;
  }
`;

export const ContentHeaderLeftPartStyled = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: center;
`;

export const CategoryNameStyled = styled.div`
  font-weight: 500;
`;

export const BlogPostTitleMiddleStyled = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 14px;
  gap: 5px;
  align-items: flex-start;
`;

export const BlogPostTitleTimeUser = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  line-height: 16px;
  color: #595959;

  a {
    font-size: 13px;
    line-height: 16px;
    color: #595959;
  }
`;

export const ContentHeaderRightPartStyled = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;

  img {
    cursor: pointer;
  }

  span {
    cursor: pointer;
  }
`;

export const ContentBodyStyled = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px 0px 20px;

  img {
    margin: 0px -20px 0px -20px;
    height: 350px;
  }
`;

export const ContentBodyTitleStyled = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const ContentFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
  padding: 10px 20px 20px 20px;
`;

export const BlogPostCommentsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const BlogPostDataStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BlogPostRatingStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    cursor: pointer;
  }
`;
