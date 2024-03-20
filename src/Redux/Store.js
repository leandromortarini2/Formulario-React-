/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Redux/userSlice";

const store = configureStore({
  reducer: { msjUser: userSlice },
});

export default store;
