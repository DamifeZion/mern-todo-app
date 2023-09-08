import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  success: false,
  error: false,
  passwordVisible: false,
};

const loginSlice = createSlice({
  name: "loginSlice",

  initialState,

  reducers: {
    emailFunc: (state, action) => {
      state.email = action.payload;
    },

    passwordFunc: (state, action) => {
      state.password = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setSuccess: (state, action) => {
      state.success = action.payload;
      state.isLoading = false;
      state.error = false;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.success = false;
    },

    passwordVisibleFunc: (state) => {
      state.passwordVisible = !state.passwordVisible;
    },

    resetValue: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export default loginSlice;
