/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msjUsers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserSlice: (initialState, action) => {
      initialState.msjUsers.push(action.payload);
      console.log("ES ARRAY????", initialState.msjUsers);
    },
  },
});

export const { getUserSlice } = userSlice.actions;
export default userSlice.reducer;
