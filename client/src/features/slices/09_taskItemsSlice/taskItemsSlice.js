import { createSlice } from "@reduxjs/toolkit";

const taskItemsSlice = createSlice({
  name: "taskItemsSlice",

  initialState: {
    checked: null,
    title: "Title",
    subTitle: "Sub-Title",
  },

  reducers: {
    setChecked: (state, action) => {
      state.checked = action.payload;
    },

    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setSubTitle: (state, action) => {
      state.subTitle = action.payload;
    },
  },
});

export default taskItemsSlice;
