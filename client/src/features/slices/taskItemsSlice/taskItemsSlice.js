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

    updated: false,
    isLoading: false,
    error: false,
  },

  reducers: {
    setCompleted: (state, action) => {
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

    setUpdated: (state) => {
      state.updated = true;
      state.isLoading = false;
      state.error = false;
    },

    setIsloading: (state) => {
      state.isLoading = true;
    },

    setError: (state, action) => {
      state.error = action.payload;
      (state.isLoading = false), (state.updated = false);
    },
  },
});

export default taskItemsSlice;
