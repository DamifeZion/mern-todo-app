import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",

  initialState: {
    auth: false,
  },

  reducers: {
    authed: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export default authSlice;
