import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",

  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export default userSlice;
