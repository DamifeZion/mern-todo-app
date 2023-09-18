import { signupSlice, userSlice } from "../../features/slices/exportSlices";

const signupMiddleware = {
  handlePasswordChange: (e, listItems, dispatch) => {
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialChar = /[!@#$%^&*?/;"'|_.-]/;
    const value = e.target.value;

    //check if value is greater or equal to 8
    const greenColor = "#00ff00";
    if (value.length >= 8) {
      listItems[0].style.color = greenColor;
    } else {
      listItems[0].style.color = "red";
    }
    //check if value contains upperCase
    if (hasUpperCase.test(value)) {
      listItems[1].style.color = greenColor;
    } else {
      listItems[1].style.color = "red";
    }
    //check if value contains LowerCase
    if (hasLowerCase.test(value)) {
      listItems[2].style.color = greenColor;
    } else {
      listItems[2].style.color = "red";
    }
    //check if value contains specialChar
    if (hasSpecialChar.test(value)) {
      listItems[3].style.color = greenColor;
    } else {
      listItems[3].style.color = "red";
    }

    dispatch(signupSlice.actions.passwordFunc(value));
  },

  handleSubmit: async (
    e,
    listItems,
    buttonRef,
    dispatch,
    navigate,
    firstName,
    lastName,
    email,
    password
  ) => {
    e.preventDefault();

    listItems.forEach((item) => {
      item.style.color = "#fff";
    });

    function disableButton() {
      buttonRef.current.classList.add("disabled-button");
    }
    function enableButton() {
      buttonRef.current.classList.remove("disabled-button");
    }

    disableButton();

    try {
      dispatch(signupSlice.actions.setIsLoading(true));
      const url = "https://taskflow-crud.onrender.com/api/user/register";
      const userData = { firstName, lastName, email, password };
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        dispatch(signupSlice.actions.setError(json.error));
        enableButton();
        console.log(json.error);
      }

      if (res.ok) {
        dispatch(signupSlice.actions.resetValue());
        dispatch(signupSlice.actions.setSuccess(true));

        localStorage.setItem("user", JSON.stringify(json));
        dispatch(userSlice.actions.setUser(json));

        enableButton();
        navigate("/dashboard/myday");
      }
    } catch (error) {
      if (error.message === "Failed to fetch")
        dispatch(signupSlice.actions.setError("No internet connection"));

      enableButton();
    }
  },
};

export { signupMiddleware };
