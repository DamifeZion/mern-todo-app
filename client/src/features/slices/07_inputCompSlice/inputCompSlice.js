import { createSlice } from "@reduxjs/toolkit";

const inputCompSlice = createSlice({
  name: "inputCompSlice",

  initialState: {
    titleValue: "",
  },

  reducers: {
    setTitleValue: (state, action) => {
      state.titleValue = action.payload;
    },
  },
});

export default inputCompSlice;
