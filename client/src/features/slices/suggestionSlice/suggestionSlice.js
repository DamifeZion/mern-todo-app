import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestionSlice",

  initialState: {
    filter: "",
    isLoading: false,
    success: false,

    //conditional rendering
    removeCard: false,
    addSuggestion: false,
    hideSuggestion:false
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

    setRemoveCard: (state) => {
      state.removeCard = !state.removeCard;
    },

    setAddSuggestion: (state) => {
      state.addSuggestion = !state.addSuggestion;
    },

    setHideSuggestion: (state) => {
      state.hideSuggestion = !state.hideSuggestion
    }
  },
});

export default suggestionSlice;
