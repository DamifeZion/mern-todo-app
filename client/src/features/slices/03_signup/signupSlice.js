import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordVisible: false,
};

const signupSlice = createSlice({
  name: "loginSlice",

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

    resetValue: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.password = "";
    },
  },
});

export default signupSlice;
