import { SERVER_URL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { getCurrentUserInfo } from "../store/userSlice";
import { useEffect } from "react";

export const useGetUser = () => {
  const dispatch = useDispatch();

  const options = {
    headers: {
      "Content-Type": "application/json",
      token: JSON.stringify(localStorage.getItem("token")),
    },
  };

  useEffect(() => {
    fetch(`${SERVER_URL}/users/token`, options)
      .then((response) => response.json())
      .then((response) => dispatch(getCurrentUserInfo(response)));
  }, []);
};
