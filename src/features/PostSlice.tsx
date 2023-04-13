import { createSlice } from "@reduxjs/toolkit";

interface Post {
  body: string;
  id: number;
  userId: number;
  reactions: number;
  username?: string;
  fullName?: string;
}

interface Posts {
  value: Post[];
}

const initialState: Posts = {
  value: [
    {
      body: "",
      id: 0,
      userId: 0,
      reactions: 0,
      username: "",
      fullName: "",
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload;
    },
    addPost: (state, action) => {
      state.value.unshift(action.payload);
    },
    deletePost: (state, action) => {},
  },
});

export const { setPosts, addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
