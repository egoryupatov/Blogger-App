import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IPostInfo } from "../components/BlogPostsList/BlogPostsList";

export interface Post {
  id: number;
  title: string;
  text: string;
  author: IPostInfo;
  category: string;
  avatar: string;
  postImage: string;
  description: string;
  numberOfComments: number;
  rating: number;
  userId: number;
  time: string;
}

export interface User {
  id: number;
  login: string;
  avatar: string;
  signUpDate: Date;
  rating: number;
}

interface UserState {
  isUserLoggedIn: boolean;
  isLoginFormDisplayed: boolean;
  currentUserPosts: Post[];
  currentUserInfo: User;
}

const initialState: UserState = {
  isUserLoggedIn: false,
  isLoginFormDisplayed: false,
  currentUserPosts: [],
  currentUserInfo: {
    id: 0,
    login: "",
    avatar: "",
    signUpDate: new Date(),
    rating: 0,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    setIsLoginFormDisplayed: (state, action) => {
      state.isLoginFormDisplayed = action.payload;
    },
    getCurrentUserPosts: (state, action) => {
      state.currentUserPosts = action.payload;
    },
    deleteCurrentUserPosts: (state, action) => {
      state.currentUserPosts = state.currentUserPosts.filter(
        (post) => post.id !== action.payload
      );
    },
    getCurrentUserInfo: (state, action) => {
      state.currentUserInfo = action.payload;
    },
  },
});

export const {
  setIsUserLoggedIn,
  setIsLoginFormDisplayed,
  getCurrentUserPosts,
  getCurrentUserInfo,
  deleteCurrentUserPosts,
} = userSlice.actions;

export const selectIsUserLoggedIn = (state: RootState) =>
  state.user.isUserLoggedIn;
export const selectLoginFormDisplayed = (state: RootState) =>
  state.user.isLoginFormDisplayed;
export const selectCurrentUserPosts = (state: RootState) =>
  state.user.currentUserPosts;
export const selectCurrentUserInfo = (state: RootState) =>
  state.user.currentUserInfo;

export default userSlice.reducer;
