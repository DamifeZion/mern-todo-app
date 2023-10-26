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
      const confirm = window.confirm("Are you sure you want to log out?");

      if (!confirm) {
        return;
      }

      state.user = null;
      window.location.href = "/login";
      localStorage.removeItem("user");
    },
  },
});

export default userSlice;
