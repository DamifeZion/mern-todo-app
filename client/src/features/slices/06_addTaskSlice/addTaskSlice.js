import { createSlice } from "@reduxjs/toolkit";

const addTaskSlice = createSlice({
  name: "addTaskSlice",

  initialState: {
    apiData: true,
  },

  reducers: {
    setApiData: (state) => {
      state.apiData = !state.apiData;
    },
  },
});

export default addTaskSlice;
