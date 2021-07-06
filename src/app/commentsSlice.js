import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  status: 'idle',
  error: null
}

export const getCommentsAsync = createAsyncThunk(
  "comments/getCommentsAsync",
  async (payload) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload.postId}/comments`);
    if (resp.ok) {
      const comments = await resp.json();
      return comments;
    }
  }
);

export const addCommentAsync = createAsyncThunk(
  "comments/addCommentAsync",
  async initialComment => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload.postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        body: payload.body,
        postId: payload.posyId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (resp.ok) {
      const comment = await resp.json();
      return comment;
    }
  }
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentAdded(state, action) {
      state.comments.push(action.payload)
    }
  },
  extraReducers: {
    [getCommentsAsync.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getCommentsAsync.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.comments = state.comments.concat(action.payload)
    },
    [getCommentsAsync.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  },
});

export const { commentAdded } = commentsSlice.actions;

export default commentsSlice.reducer;

export const selectAllPostComments = state => state.comments.comments;

export const selectCommentsStatus = state => state.comments.status;