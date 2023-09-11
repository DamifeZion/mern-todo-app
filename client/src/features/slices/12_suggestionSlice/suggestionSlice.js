import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestionSlice",

  initialState: {
    filter: "",
    isLoading: false,
    success: false,
  },

  reducers: {
    handleFilter: (state, action) => {
      state.filter = action.payload;
    },

    resetFilter: (state) => {
      state.filter = "";
    },

    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    success: (state, action) => {
      state.success = action.payload;
    },
  },
});

export default suggestionSlice;
