//Handle the collection of the value for Workout Posting

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  load: "",
  reps: "",
}

const addWorkoutSlice = createSlice({

  name: "addWorkoutSlice",

  initialState,

  reducers: {
    getTitleValue: (state, action) => {
      state.title = action.payload
    },

    getLoadValue: (state, action) => {
      state.load = action.payload
    },

    getRepsValue: (state, action) => {
      state.reps = action.payload
    }
  }

})

export default addWorkoutSlice;