import { configureStore } from "@reduxjs/toolkit";
import {
  mobileMenuSlice,
  loginSlice,
  signupSlice,
  authSlice,
  userSlice,
  sideNavSlice,
  dashboardSlice,
  addWorkoutSlice,
  fetchWorkoutsSlice,
} from "./slices/exportSlices";

const store = configureStore({
  reducer: {
    mobileMenuSlice: mobileMenuSlice.reducer,
    loginSlice: loginSlice.reducer,
    signupSlice: signupSlice.reducer,
    authSlice: authSlice.reducer,
    userSlice: userSlice.reducer,
    sideNavSlice: sideNavSlice.reducer,
    dashboardSlice: dashboardSlice.reducer,
    addWorkoutSlice: addWorkoutSlice.reducer,
    fetchWorkoutsSlice: fetchWorkoutsSlice.reducer,
  },
});

export default store;
