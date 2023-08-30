import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenuSlice",

  initialState,

  reducers: {
    ToggleMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

export default mobileMenuSlice;
