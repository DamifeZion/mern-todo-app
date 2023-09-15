import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordVisible: false,
  success: false,
  error: "",
  isLoading: false,
};

const signupSlice = createSlice({
  name: "signupSlice",

  initialState,

  reducers: {
    firstNameFunc: (state, action) => {
      state.firstName = action.payload;
    },

    lastNameFunc: (state, action) => {
      state.lastName = action.payload;
    },

    emailFunc: (state, action) => {
      state.email = action.payload;
    },

    passwordFunc: (state, action) => {
      state.password = action.payload;
    },

    passwordVisibleFunc: (state) => {
      state.passwordVisible = !state.passwordVisible;
    },

    setSuccess: (state, action) => {
      state.success = action.payload;
      state.isLoading = false;
      state.error = "";
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.success = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    resetValue: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.password = "";
    },
  },
});

export default signupSlice;
