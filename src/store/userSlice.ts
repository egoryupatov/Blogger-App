import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ICategory {
  id: number;
  name: string;
}

export interface IBlogPost {
  author: IUser;
  comments: IComment[];
  category: ICategory;
  publishDate: Date;
  id: number;
  categoryImage: string;
  postImage: string;
  title: string;
  description: string;
  rating: number;
  text: string;
}

export interface IComment {
  article: IBlogPost;
  author: IUser;
  children: IComment[];
  parent: IComment;
  publishDate: Date;
  id: number;
  rating: number;
  text: string;
}

export interface IUser {
  articles: IBlogPost[];
  comments: IComment[];
  bannedArticles: IBlogPost[];
  signUpDate: Date;
  id: number;
  login: string;
  avatar: string;
  rating: number;
}

interface IInitialState {
  userInfo: IUser;
  isUserLoggedIn: boolean;
  isLoginFormDisplayed: boolean;
  searchQuery: string;
  postComments: IComment[];
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
  postComments: [],
  searchQuery: "",
};

export const userSlice = createSlice({
  //переименовать слайс
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
    getPostComments: (state, action) => {
      state.postComments = action.payload;
    },
    getSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setIsUserLoggedIn,
  setIsLoginFormDisplayed,
  getUserInfo,
  deleteArticle,
  getSearchQuery,
  getPostComments,
} = userSlice.actions;

export const selectIsUserLoggedIn = (state: RootState) =>
  state.user.isUserLoggedIn;
export const selectLoginFormDisplayed = (state: RootState) =>
  state.user.isLoginFormDisplayed;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectPostComments = (state: RootState) => state.user.postComments;
export const selectSearchQuery = (state: RootState) => state.user.searchQuery;

export default userSlice.reducer;
