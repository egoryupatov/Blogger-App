import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ICategory {
  id: number;
  name: string;
}

export interface IArticle {
  id: number;
  publishDate: Date;
  categoryImage: string;
  postImage: string;
  title: string;
  description: string;
  rating: number;
  text: string;
  category: ICategory;
}

export interface IComment {
  id: number;
  publishDate: Date;
  rating: number;
  text: string;
  article: IArticle;
  author: IUser;
}

export interface IUser {
  id: number;
  login: string;
  avatar: string;
  signUpDate: Date;
  rating: number;
  articles: IArticle[];
  comments: IComment[];
  bannedArticles: IArticle[];
}

interface IInitialState {
  isUserLoggedIn: boolean;
  isLoginFormDisplayed: boolean;
  userInfo: IUser;
}

const initialState: IInitialState = {
  isUserLoggedIn: false,
  isLoginFormDisplayed: false,
  userInfo: {
    id: 0,
    login: "",
    avatar: "",
    signUpDate: new Date(),
    rating: 0,
    articles: [],
    comments: [],
    bannedArticles: [],
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
    deleteArticle: (state, action) => {
      state.userInfo.articles = state.userInfo.articles.filter(
        (post) => post.id !== action.payload
      );
    },
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  setIsUserLoggedIn,
  setIsLoginFormDisplayed,
  getUserInfo,
  deleteArticle,
} = userSlice.actions;

export const selectIsUserLoggedIn = (state: RootState) =>
  state.user.isUserLoggedIn;
export const selectLoginFormDisplayed = (state: RootState) =>
  state.user.isLoginFormDisplayed;
export const selectUserInfo = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
