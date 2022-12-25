import React, { useEffect } from "react";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import {
  getAuthorizedUserInfo,
  setIsUserLoggedIn,
} from "../../store/userSlice";

export const AuthContainer: React.FC = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    if (token) {
      fetch(`${SERVER_URL}/users/info/${localStorage.getItem("id")}`)
        .then((response) => response.json())
        .then((authorizedUserInfo) => {
          dispatch(setIsUserLoggedIn(true));
          dispatch(getAuthorizedUserInfo(authorizedUserInfo));
        });
    }
  };

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
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
