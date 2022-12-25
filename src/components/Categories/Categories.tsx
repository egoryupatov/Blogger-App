import React from "react";
import { CategoriesContainerStyled, CategoryStyled } from "./Categories.styled";
import { Link } from "react-router-dom";

export const Categories: React.FC = () => {
  return (
    <CategoriesContainerStyled>
      <Link to={"/"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">apps</span>
          <div>All posts</div>
        </CategoryStyled>
      </Link>

      <Link to={"/posts/category/business"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">monitoring</span>
          <div>Business</div>
        </CategoryStyled>
      </Link>

      <Link to={"/posts/category/entertainment"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">sports_esports</span>
          <div>Entertainment</div>
        </CategoryStyled>
      </Link>

      <Link to={"/posts/category/health"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">medical_services</span>
          <div>Health</div>
        </CategoryStyled>
      </Link>

      <Link to={"/posts/category/travel"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">beach_access</span>
          <div>Travel</div>
        </CategoryStyled>
      </Link>
    </CategoriesContainerStyled>
  );
};
