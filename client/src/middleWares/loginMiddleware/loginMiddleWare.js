import {
  loginSlice,
  userSlice,
} from "../../features/slices/exportSlices";

const loginMiddleWare = {
  handleSubmit: async (buttonRef, e, dispatch, navigate, formData) => {
    e.preventDefault();

    function disableButton() {
      buttonRef.current.classList.add("disabled-button");
    }

    function enableButton() {
      buttonRef.current.classList.remove("disabled-button");
    }

    try {
      disableButton();
      dispatch(loginSlice.actions.setIsLoading(true));
      const url = "https://taskflow-crud.onrender.com/api/user/login";
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        enableButton();
        dispatch(loginSlice.actions.setError(json.error));
        buttonRef.current.classList.remove("disabled-button");
      }

      if (res.ok) {
        dispatch(loginSlice.actions.setSuccess(true));
        dispatch(loginSlice.actions.resetValue());
        
        localStorage.setItem("user", JSON.stringify(json));
        dispatch(userSlice.actions.setUser(json));

        enableButton();
        navigate("/dashboard/myday");
      }
    } catch (error) {
      dispatch(loginSlice.actions.setError(error.message));
      enableButton();
    }
  },
};

export { loginMiddleWare };
