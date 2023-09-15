import { taskItemsSlice, inputCompSlice } from "../../features/slices/exportSlices";

const addTaskTitleMiddleware = (e, titleValue, dispatch) => {
  e.preventDefault();
  //run api post request title and dispatch well set up
  dispatch(taskItemsSlice.actions.setTitle(titleValue));
  dispatch(inputCompSlice.actions.resetTitleValue())
};

export { addTaskTitleMiddleware };
