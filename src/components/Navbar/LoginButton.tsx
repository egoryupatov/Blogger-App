import React from "react";
import { AuthSectionStyled } from "./Navbar.styled";
import {
  selectIsUserLoggedIn,
  setIsLoginFormDisplayed,
  setIsUserLoggedIn,
} from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { AuthSectionContainerStyled } from "./Navbar.styled";

export const LoginButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLogged = useAppSelector(selectIsUserLoggedIn);

  return (
    <>
      {isUserLogged ? (
        <>
          <AuthSectionStyled
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <img
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              src={"/avatar.png"}
            />
          </AuthSectionStyled>

          <AuthSectionStyled>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={"/bell.svg"} />
            </div>
          </AuthSectionStyled>
          <AuthSectionStyled
            onClick={() => {
              dispatch(setIsUserLoggedIn(false));
              localStorage.clear();
              navigate("/");
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <img src={"/login.svg"} />
              <div>Logout</div>
            </div>
          </AuthSectionStyled>
        </>
      ) : (
        <>
          <AuthSectionStyled
            onClick={() => dispatch(setIsLoginFormDisplayed(true))}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={"/bell.svg"} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <img src={"/login.svg"} />
              <div>Login</div>
            </div>
          </AuthSectionStyled>
        </>
      )}
    </>
  );
};
