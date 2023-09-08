import { authSlice } from "../../features/slices/exportSlices";

export const logoutMiddleware = (dispatch) => {
  //remove user from storage
  localStorage.removeItem("user");

  //reset authorization to default
  dispatch(authSlice.actions.authed(false));
};
