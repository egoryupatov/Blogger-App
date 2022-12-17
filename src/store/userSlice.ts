import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { decrement } from "../utils/decrementCommentRating";
import { increment } from "../utils/incrementCommentRating";

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
  subscriptions: IUser[];
  subscribers: IUser[];
}

interface IInitialState {
  userInfo: IUser;
  isUserLoggedIn: boolean;
  isLoginFormDisplayed: boolean;
  searchQuery: string;
  blogPost: IBlogPost;
  postComments: IComment[];
  loggedUserAvatar: string;
  allBlogPosts: IBlogPost[];
  isThreeDotsMenuActive: boolean;
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
    subscriptions: [],
    subscribers: [],
  },
  blogPost: {
    author: {
      articles: [],
      comments: [],
      bannedArticles: [],
      signUpDate: new Date(),
      id: 0,
      login: "",
      avatar: "",
      rating: 0,
      subscriptions: [],
      subscribers: [],
    },
    comments: [],
    category: {
      id: 0,
      name: "",
    },
    publishDate: new Date(),
    id: 0,
    categoryImage: "",
    postImage: "",
    title: "",
    description: "",
    rating: 0,
    text: "",
  },
  postComments: [],
  searchQuery: "",
  loggedUserAvatar: "",
  allBlogPosts: [],
  isThreeDotsMenuActive: false,
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
    getCommentChildren: (state, action) => {
      state.postComments = state.postComments.map((comment) => {
        if (comment.id === action.payload.id) {
          comment = action.payload;
        }

        return comment;
      });
    },
    getBlogPost: (state, action) => {
      state.blogPost = action.payload;
    },
    getAllBlogPosts: (state, action) => {
      state.allBlogPosts = action.payload;
    },
    getSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addNewComment: (state, action) => {
      state.postComments = [...state.postComments, action.payload];
    },
    decrementCommentRating: (state, action) => {
      state.postComments = state.postComments.map((comment) => {
        return decrement(comment, action.payload);
      });
    },
    incrementCommentRating: (state, action) => {
      state.postComments = state.postComments.map((comment) => {
        return increment(comment, action.payload);
      });
    },
    setIsThreeDotsMenuActive: (state, action) => {
      state.isThreeDotsMenuActive = action.payload;
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
  getBlogPost,
  getAllBlogPosts,
  addNewComment,
  getCommentChildren,
  setIsThreeDotsMenuActive,
  decrementCommentRating,
  incrementCommentRating,
} = userSlice.actions;

export const selectIsUserLoggedIn = (state: RootState) =>
  state.user.isUserLoggedIn;
export const selectLoginFormDisplayed = (state: RootState) =>
  state.user.isLoginFormDisplayed;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectBlogPost = (state: RootState) => state.user.blogPost;
export const selectAllBlogPosts = (state: RootState) => state.user.allBlogPosts;
export const selectPostComments = (state: RootState) => state.user.postComments;
export const selectSearchQuery = (state: RootState) => state.user.searchQuery;
export const selectIsThreeDotsMenuActive = (state: RootState) =>
  state.user.isThreeDotsMenuActive;

export default userSlice.reducer;
