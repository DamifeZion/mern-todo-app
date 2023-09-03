import { configureStore } from "@reduxjs/toolkit";
import {
  mobileMenuSlice,
  loginSlice,
  signupSlice,
  authSlice,
  addWorkoutSlice,
  fetchWorkoutsSlice,
} from "./slices/exportSlices";

const store = configureStore({
  reducer: {
    mobileMenuSlice: mobileMenuSlice.reducer,
    loginSlice: loginSlice.reducer,
    signupSlice: signupSlice.reducer,
    authSlice: authSlice.reducer,
    addWorkoutSlice: addWorkoutSlice.reducer,
    fetchWorkoutsSlice: fetchWorkoutsSlice.reducer,
  },
});

export default store;
