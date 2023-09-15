import { configureStore } from "@reduxjs/toolkit";
import {
  mobileMenuSlice,
  loginSlice,
  signupSlice,
  userSlice,
  sideNavSlice,
  dashboardSlice,
  addTaskSlice,
  taskItemsSlice,
  suggestionSlice,
  editTaskSlice,
  comingSoonSlice,
  inputCompSlice,
} from "./slices/exportSlices";

const store = configureStore({
  reducer: {
    mobileMenuSlice: mobileMenuSlice.reducer,
    loginSlice: loginSlice.reducer,
    signupSlice: signupSlice.reducer,
    userSlice: userSlice.reducer,
    sideNavSlice: sideNavSlice.reducer,
    dashboardSlice: dashboardSlice.reducer,
    addTaskSlice: addTaskSlice.reducer,
    taskItemsSlice: taskItemsSlice.reducer,
    //
    suggestionSlice: suggestionSlice.reducer,
    editTaskSlice: editTaskSlice.reducer,
    comingSoonSlice: comingSoonSlice.reducer,
    inputCompSlice: inputCompSlice.reducer,
  },
});

export default store;
