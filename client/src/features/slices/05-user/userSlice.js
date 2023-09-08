import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",

  initialState: {
    userName: "",
    token: "",
  },

  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default userSlice;
