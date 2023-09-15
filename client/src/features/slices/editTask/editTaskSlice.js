import { createSlice } from "@reduxjs/toolkit";

const editTaskSlice = createSlice({
  name: "editTaskSlice",

  initialState: {
    hideEditTask: false,
  },

  reducers: {
    toggleVisibility: (state) => {
      state.hideEditTask = !state.hideEditTask;
    },
  },
});

export default editTaskSlice;
