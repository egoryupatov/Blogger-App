import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Homepage } from "./pages/Homepage/Homepage";
import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddPostPage } from "./pages/AddPostPage/AddPostPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AuthContainer } from "./components/LoginForm/AuthContainer";
import { EditPostPage } from "./pages/EditPostPage/EditPostPage";

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
          <Route path="/add-new-post" element={<AddPostPage />} />
          <Route path="/edit-post/:id" element={<EditPostPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
