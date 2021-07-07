import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  status: 'idle',
  error: null
}

export const getCommentsAsync = createAsyncThunk(
  "comments/getCommentsAsync",
  async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    if (resp.ok) {
      const comments = await resp.json();
      return comments;
    }
  }
);

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
      state.comments = action.payload
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

export const selectCommentsByPostId = (state, postId) =>
  state.comments.comments.filter(comment => comment.postId === postId);

export const selectCommentsStatus = state => state.comments.status;