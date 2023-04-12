import { configureStore } from "@reduxjs/toolkit";
import postSice from "../features/PostSlice";
import userSlice from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    post: postSice,
    user: userSlice
  },
});
