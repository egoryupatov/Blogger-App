import React, { useEffect } from "react";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { setIsUserLoggedIn } from "../../store/userSlice";

export const AuthContainer: React.FC = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    if (token) {
      dispatch(setIsUserLoggedIn(true));
    }
  };

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${SERVER_URL}/auth/refresh`, options).then((response) => {
      if (response.status === 401) {
        dispatch(setIsUserLoggedIn(false));
        localStorage.clear();
      }
    });
  }, []);

  return null;
};
