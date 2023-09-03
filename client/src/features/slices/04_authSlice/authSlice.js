import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",

  initialState: {
    auth: false,
  },

  reducers: {
    authed: (state) => {
      state.auth = !state.auth;
    },
  },
});

export default authSlice;
