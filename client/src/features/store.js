import { configureStore } from "@reduxjs/toolkit";
import {
  addWorkoutSlice,
  fetchWorkoutsSlice,
  mobileMenuSlice,
} from "./slices/exportSlices";

const store = configureStore({
  reducer: {
    addWorkoutSlice: addWorkoutSlice.reducer,
    fetchWorkoutsSlice: fetchWorkoutsSlice.reducer,
    mobileMenuSlice: mobileMenuSlice.reducer,
  },
});

export default store;
