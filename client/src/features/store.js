import { configureStore } from "@reduxjs/toolkit";
import {
  mobileMenuSlice,
  loginSlice,
  signupSlice,
  userSlice,
  sideNavSlice,
  dashboardSlice,
  fetchTodosSlice,
  addTaskSlice,
  taskItemsSlice,
  suggestionSlice,
  editTaskSlice,
  comingSoonSlice,
} from "./slices/exportSlices";

const store = configureStore({
  reducer: {
    mobileMenuSlice: mobileMenuSlice.reducer,
    loginSlice: loginSlice.reducer,
    signupSlice: signupSlice.reducer,
    userSlice: userSlice.reducer,
    sideNavSlice: sideNavSlice.reducer,
    dashboardSlice: dashboardSlice.reducer,
    fetchTodosSlice: fetchTodosSlice.reducer,
    addTaskSlice: addTaskSlice.reducer,
    taskItemsSlice: taskItemsSlice.reducer,
    //
    suggestionSlice: suggestionSlice.reducer,
    editTaskSlice: editTaskSlice.reducer,
    comingSoonSlice: comingSoonSlice.reducer,
  },
});

export default store;
