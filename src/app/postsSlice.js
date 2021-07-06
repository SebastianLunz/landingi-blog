import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const getPostsAsync = createAsyncThunk(
  "posts/getPostsAsync",
  async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (resp.ok) {
      const posts = await resp.json();
      return posts;
    }
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsAsync.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getPostsAsync.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.posts = state.posts.concat(action.payload)
    },
    [getPostsAsync.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.massage
    },
  },
});

export default postsSlice.reducer;

export const selectAllPosts = state => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id !== postId);

export const selectPostsStatus = state => state.posts.status;