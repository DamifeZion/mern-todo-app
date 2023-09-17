import { createSlice } from "@reduxjs/toolkit";

const taskItemsSlice = createSlice({
  name: "taskItemsSlice",

  initialState: {
    completed: false,
    title: "Title",
    subTitle: "Sub-Title",
    notes: "Notes",
    file: "",
    selectedTaskId: "",
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

    setSelectedTaskId: (state, action) => {
      state.selectedTaskId = action.payload;
    },

    resetValues: (state) => {
      state.completed = false;
      state.title = "";
      state.subTitle = "";
      state.notes = "";
      state.file = "";
      state.selectedTaskId = "";
    },
  },
});

export default taskItemsSlice;
