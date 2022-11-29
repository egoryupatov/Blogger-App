import React from "react";
import { CategoriesContainerStyled, CategoryStyled } from "./Categories.styled";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Categories: React.FC = () => {
  const params = useParams();

  return (
    <CategoriesContainerStyled>
      <Link to={"/"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">apps</span>
          <p>All posts</p>
        </CategoryStyled>
      </Link>
      <Link to={"/posts/business"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">monitoring</span>
          <p>Business</p>
        </CategoryStyled>
      </Link>
      <Link to={"/posts/entertainment"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">sports_esports</span>
          <p>Entertainment</p>
        </CategoryStyled>
      </Link>
      <Link to={"/posts/health"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">medical_services</span>
          <p>Health</p>
        </CategoryStyled>
      </Link>
      <Link to={"/posts/travel"}>
        <CategoryStyled>
          <span className="material-symbols-outlined">beach_access</span>
          <p>Travel</p>
        </CategoryStyled>
      </Link>
    </CategoriesContainerStyled>
  );
};
