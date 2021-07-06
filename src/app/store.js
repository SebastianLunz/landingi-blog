import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  }
})