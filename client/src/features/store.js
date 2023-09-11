import { configureStore } from "@reduxjs/toolkit";
import {
  mobileMenuSlice,
  loginSlice,
  signupSlice,
  userSlice,
  sideNavSlice,
  dashboardSlice,
  addTaskSlice,
  inputCompSlice,
  taskItemsSlice,
  addTodoSlice,
  suggestionSlice,
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
    inputCompSlice: inputCompSlice.reducer,
    taskItemsSlice: taskItemsSlice.reducer,
    //
    addTodoSlice: addTodoSlice.reducer,
    suggestionSlice: suggestionSlice.reducer,
  },
});

export default store;
