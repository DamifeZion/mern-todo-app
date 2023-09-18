import { createSlice } from "@reduxjs/toolkit";

const taskItemsSlice = createSlice({
  name: "taskItemsSlice",

  initialState: {
    completed: false,
    title: "",
    subTitle: "",
    notes: "",
    file: "",
    selectedTaskId: "",

    updated: false,
    isLoading: false,
    error: false,
    deleted: false,
  },

  reducers: {
    setCompleted: (state, action) => {
      state.completed = action.payload;
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
      state.deleted = false;
    },

    setIsloading: (state) => {
      state.isLoading = true;
    },

    setError: (state, action) => {
      state.error = action.payload;
      (state.isLoading = false), (state.updated = false);
      state.deleted = false;
    },

    setDeleted: (state, action) => {
      state.deleted = action.payload;
      state.error = false;
    },

  },
});

export default taskItemsSlice;
