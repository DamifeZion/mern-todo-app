import { loginSlice, authSlice } from "../../features/slices/exportSlices";

const loginMiddleWare = {
  handleSubmit: (buttonRef, e, dispatch, navigate) => {
    e.preventDefault();
    console.log("submitted");

    //if api is loading run the below
    buttonRef.current.classList.add("disabled-button");
    //else buttonref.current.classList.remove('disabled-button')

    //clear all input value
    dispatch(loginSlice.actions.resetValue());
    //If user Authuorized redirect below
    setTimeout(() => {
      dispatch(authSlice.actions.authed(true))
      navigate("/dashboard/myday");
    }, 1000);
  },
};

export { loginMiddleWare };
