import { createSlice } from "@reduxjs/toolkit";

const comingSoonSlice = createSlice({
  name: "comingSoonSlice",

  initialState: {
    showComingSoon: false,
    message: "Sorry this feature is unavailable... Coming Soon .",
  },

  reducers: {
    showComingSoon: (state) => {
      state.showComingSoon = !state.showComingSoon;
      alert(state.message);
    },
  },
});

export default comingSoonSlice;
