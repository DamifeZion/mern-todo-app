import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
  name: "dashboardSlice",

  initialState: {
    sideNavImgVisible: true,
    sideNavVisible: true,
  },

  reducers: {
    hideSideNavImg: (state) => {
      state.sideNavImgVisible = !state.sideNavImgVisible;
    },

    hideSideNav: (state, action) => {
      state.sideNavVisible = action.payload;
    },
  },
});

export default sideNavSlice;
