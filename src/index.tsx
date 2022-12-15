import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Homepage } from "./pages/Homepage/Homepage";
import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddPostPage } from "./pages/AddPost/AddPostPage";
import { PostPage } from "./pages/Post/PostPage";
import { User } from "./pages/User/User";
import { AuthContainer } from "./components/LoginForm/AuthContainer";
import { EditPostPage } from "./pages/EditPost/EditPostPage";
import { AuthorizedUserArticle } from "./pages/User/AuthorizedUserArticle";
import { Search } from "./pages/Search/Search";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <AuthContainer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="posts/category/business" element={<Homepage />} />
          <Route path="posts/category/travel" element={<Homepage />} />
          <Route path="posts/category/health" element={<Homepage />} />
          <Route path="posts/category/entertainment" element={<Homepage />} />
          <Route path="/add-new-post" element={<AddPostPage />} />
          <Route path="/edit-post/:id" element={<EditPostPage />} />
          <Route path="/posts/:category/:id" element={<PostPage />} />
          <Route path="/search" element={<Search />} />

          <Route path="/user/:id" element={<User />}>
            <Route path="articles" element={<User />} />
            <Route path="hidden" element={<User />} />
            <Route path="comments" element={<User />} />
            <Route path="subscriptions" element={<User />} />
            <Route path="subscribers" element={<User />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
