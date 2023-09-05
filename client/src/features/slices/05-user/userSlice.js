import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",

  initialState: {
    userName: 'Zancrow',
    token: null,
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
