import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  password: '',
  passwordVisible: false,
}

const loginSlice = createSlice({
  name: 'loginSlice',

  initialState,

  reducers: {
    emailFunc: (state, action) => {
      state.email = action.payload
    },

    passwordFunc: (state, action) => {
      state.password = action.payload
    },

    passwordVisibleFunc: (state) => {
      state.passwordVisible = !state.passwordVisible
    },

    resetValue: (state) => {
      state.email = '';
      state.password = '';
    }
  }
})

export default loginSlice;