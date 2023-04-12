import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: "dante123",
    fullName: "Dante Grippaldi",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.value.username = action.payload.username),
        (state.value.fullName = action.payload.fullName);
    },
  },
});

export const { setPosts, addPost, deletePost } = userSlice.actions;

export default userSlice.reducer;
