import { createSlice } from "@reduxjs/toolkit";

const addTaskSlice = createSlice({
  name: "addTaskSlice",

  initialState: {
    todoTitle: "",
    success: false,
    error: false,
    isLoading: false,
  },

  reducers: {
    setAddTitle: (state, action) => {
      state.todoTitle = action.payload;
    },

    setSuccess: (state) => {
      state.todoTitle = "";
      state.success = true;
      state.isLoading = false;
      state.error = false;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.todoTitle = ''
      state.success = false;
      state.isLoading = false;
    },

    setIsLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export default addTaskSlice;
