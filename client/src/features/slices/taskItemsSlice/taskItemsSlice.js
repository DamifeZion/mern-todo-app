import { createSlice } from "@reduxjs/toolkit";

const taskItemsSlice = createSlice({
  name: "taskItemsSlice",

  initialState: {
    completed: false,
    title: "Title",
    subTitle: "Sub-Title",
    notes: "Notes",
    file: "",
  },

  reducers: {
    setCompleted: (state) => {
      state.completed = !state.completed;
    },

    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setSubTitle: (state, action) => {
      state.subTitle = action.payload;
    },

    setNotes: (state, action) => {
      state.notes = action.payload;
    },

    setFile: (state, action) => {
      state.file = action.payload;
    },

    resetValues: (state) => {
      state.checked = false;
      state.title = "";
      state.subTitle = "";
      state.notes = "";
      state.file = "";
    },
  },
});

export default taskItemsSlice;
