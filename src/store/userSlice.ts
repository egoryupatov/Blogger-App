import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { decrement } from "../utils/decrementCommentRating";
import { increment } from "../utils/incrementCommentRating";
import { IBlogPost, IComment, IUser } from "../types/general.types";

interface IInitialState {
  userInfo: IUser;
  authorizedUserInfo: IUser;
  isUserLoggedIn: boolean;
  isLoginFormDisplayed: boolean;
  searchQuery: string;
  blogPost: IBlogPost;
  postComments: IComment[];
  loggedUserAvatar: string;
  allBlogPosts: IBlogPost[];
  isThreeDotsMenuActive: boolean;
  isServerDataLoaded: boolean;
  latestBlogPosts: IBlogPost[];
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
    blogPosts: [],
    comments: [],
    hiddenBlogPosts: [],
    subscriptions: [],
    subscribers: [],
  },
  authorizedUserInfo: {
    id: 0,
    login: "",
    avatar: "",
    signUpDate: new Date(),
    rating: 0,
    blogPosts: [],
    comments: [],
    hiddenBlogPosts: [],
    subscriptions: [],
    subscribers: [],
  },
  blogPost: {
    user: {
      blogPosts: [],
      comments: [],
      hiddenBlogPosts: [],
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
      image: "",
    },
    publishDate: new Date(),
    id: 0,
    categoryImage: "",
    image: "",
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
  isServerDataLoaded: true,
  latestBlogPosts: [],
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
    deleteBlogPost: (state, action) => {
      state.userInfo.blogPosts = state.userInfo.blogPosts.filter(
        (post) => post.id !== action.payload
      );
    },
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    getAuthorizedUserInfo: (state, action) => {
      state.authorizedUserInfo = action.payload;
    },
    getPostComments: (state, action) => {
      state.postComments = action.payload;
    },
    getCommentChildren: (state, action) => {
      state.postComments = state.postComments.map((comment) => {
        if (comment.id === action.payload.parentId) {
          comment.children = action.payload.children;
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
    getLatestBlogPosts: (state, action) => {
      state.latestBlogPosts = action.payload;
    },
    getMoreLatestBlogPosts: (state, action) => {
      state.latestBlogPosts = [...state.latestBlogPosts, ...action.payload];
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
    incrementBlogPostRating: (state, action) => {
      state.blogPost = { ...state.blogPost, rating: state.blogPost.rating + 1 };
    },
    decrementBlogPostRating: (state, action) => {
      state.blogPost = { ...state.blogPost, rating: state.blogPost.rating - 1 };
    },
    setIsThreeDotsMenuActive: (state, action) => {
      state.isThreeDotsMenuActive = action.payload;
    },
    setIsServerDataLoaded: (state, action) => {
      state.isServerDataLoaded = action.payload;
    },
  },
});

export const {
  setIsUserLoggedIn,
  setIsLoginFormDisplayed,
  getUserInfo,
  getAuthorizedUserInfo,
  deleteBlogPost,
  getSearchQuery,
  getPostComments,
  getBlogPost,
  getAllBlogPosts,
  getLatestBlogPosts,
  getMoreLatestBlogPosts,
  addNewComment,
  getCommentChildren,
  setIsThreeDotsMenuActive,
  setIsServerDataLoaded,
  decrementCommentRating,
  incrementCommentRating,
  incrementBlogPostRating,
  decrementBlogPostRating,
} = userSlice.actions;

export const selectIsUserLoggedIn = (state: RootState) =>
  state.user.isUserLoggedIn;
export const selectLoginFormDisplayed = (state: RootState) =>
  state.user.isLoginFormDisplayed;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectAuthorizedUserInfo = (state: RootState) =>
  state.user.authorizedUserInfo;
export const selectBlogPost = (state: RootState) => state.user.blogPost;
export const selectAllBlogPosts = (state: RootState) => state.user.allBlogPosts;
export const selectLatestBlogPosts = (state: RootState) =>
  state.user.latestBlogPosts;
export const selectPostComments = (state: RootState) => state.user.postComments;
export const selectSearchQuery = (state: RootState) => state.user.searchQuery;
export const selectIsThreeDotsMenuActive = (state: RootState) =>
  state.user.isThreeDotsMenuActive;
export const selectIsServerDataLoaded = (state: RootState) =>
  state.user.isServerDataLoaded;

export default userSlice.reducer;
