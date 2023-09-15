import { createSlice } from "@reduxjs/toolkit";

const inputCompSlice = createSlice({
  name: "inputCompSlice",

  initialState: {
    titleValue: "titleValue",
  },

  reducers: {
    setTitleValue: (state, action) => {
      state.titleValue = action.payload;
    },

    resetTitleValue: (state) => {
      state.titleValue = "";
    },
  },
});

export default inputCompSlice;
