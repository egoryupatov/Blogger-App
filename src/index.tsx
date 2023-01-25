import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Homepage } from "./pages/Homepage/Homepage";
import "./index.css";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddPostPageContainer } from "./pages/AddPost/AddPostPageContainer";
import { PostPageContainer } from "./pages/Post/PostPageContainer";
import { UserContainer } from "./pages/User/UserContainer";
import { AuthContainer } from "./components/AuthContainer/AuthContainer";
import { EditPostPageContainer } from "./pages/EditPost/EditPostPageContainer";
import { AuthorizedUserBlogPost } from "./pages/User/AuthorizedUserBlogPosts/AuthorizedUserBlogPost";
import { SearchContainer } from "./pages/Search/SearchContainer";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavbarContainer />
        <AuthContainer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="posts/category/business" element={<Homepage />} />
          <Route path="posts/category/travel" element={<Homepage />} />
          <Route path="posts/category/health" element={<Homepage />} />
          <Route path="posts/category/entertainment" element={<Homepage />} />
          <Route path="/add-new-post" element={<AddPostPageContainer />} />
          <Route path="/edit-post/:id" element={<EditPostPageContainer />} />
          <Route path="/posts/:category/:id" element={<PostPageContainer />} />
          <Route path="/search" element={<SearchContainer />} />

          <Route path="/user/:id" element={<UserContainer />}>
            <Route path="posts" element={<UserContainer />} />
            <Route path="hidden" element={<UserContainer />} />
            <Route path="comments" element={<UserContainer />} />
            <Route path="subscriptions" element={<UserContainer />} />
            <Route path="subscribers" element={<UserContainer />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
