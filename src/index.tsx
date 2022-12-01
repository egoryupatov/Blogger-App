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
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AuthContainer } from "./components/LoginForm/AuthContainer";
import { EditPostPage } from "./pages/EditPost/EditPostPage";

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
          <Route path="posts/business" element={<Homepage />} />
          <Route path="posts/travel" element={<Homepage />} />
          <Route path="posts/health" element={<Homepage />} />
          <Route path="posts/entertainment" element={<Homepage />} />
          <Route path="/add-new-post" element={<AddPostPage />} />
          <Route path="/edit-post/:id" element={<EditPostPage />} />
          <Route path="/posts/:category/:id" element={<PostPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
