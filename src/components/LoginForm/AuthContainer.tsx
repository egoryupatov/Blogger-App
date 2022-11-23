import React, { useEffect } from "react";
import { SERVER_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { setIsUserLoggedIn } from "../../store/userSlice";

export const AuthContainer: React.FC = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const checkToken = () => {
    if (!token) {
      return;
    }

    const options = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };

    fetch(`${SERVER_URL}/users/token`, options).then((response) => {
      if (response.status === 200) {
        dispatch(setIsUserLoggedIn(true));
      }
    });
  };

  useEffect(() => {
    checkToken();
  }, []);

  return null;
};
