import { json } from "react-router-dom";
import {
  loginSlice,
  authSlice,
  userSlice,
} from "../../features/slices/exportSlices";

const loginMiddleWare = {
  handleSubmit: async (buttonRef, e, dispatch, navigate, formData) => {
    e.preventDefault();
    console.log("submitted");

    //else buttonref.current.classList.remove('disabled-button')

    try {
      buttonRef.current.classList.add("disabled-button");
      dispatch(loginSlice.actions.setIsLoading(true));
      const url = "http://localhost:5000/api/user/login";
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        dispatch(loginSlice.actions.setError(json.error));
        buttonRef.current.classList.remove("disabled-button")
      }

      if (res.ok) {
        dispatch(loginSlice.actions.setSuccess(true));
        localStorage.setItem("user", JSON.stringify(json));
        dispatch(userSlice.actions.setUserName(json.firstName));
        dispatch(userSlice.actions.setToken(json.token));
        dispatch(authSlice.actions.authed(true));
        navigate("/dashboard/myday");
      }
    } catch (error) {
      dispatch(loginSlice.actions.setError(error.message));
    }
  },
};

export { loginMiddleWare };
