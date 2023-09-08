import {
  signupSlice,
  userSlice,
  authSlice,
} from "../../features/slices/exportSlices";

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

    buttonRef.current.classList.add("disabled-button");
    try {
      dispatch(signupSlice.actions.setIsLoading(true));
      const url = "http://localhost:5000/api/user/register";
      const userData = { firstName, lastName, email, password };
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        dispatch(signupSlice.actions.setError(json.error));
        buttonRef.current.classList.remove("disabled-button");
        console.log(json.error);
      }

      if (res.ok) {
        dispatch(signupSlice.actions.resetValue());
        dispatch(userSlice.actions.setUserName(json.firstName));
        dispatch(userSlice.actions.setToken(json.token));
        dispatch(signupSlice.actions.setSuccess(true));

        localStorage.setItem("user", JSON.stringify(json));
        //update auth
        dispatch(authSlice.actions.authed(true));
        navigate("/dashboard/myday");
      }
    } catch (error) {
      if (error) {
        dispatch(signupSlice.actions.setError(error.message));
        console.log(error.message);
      }
    }
  },
};

export { signupMiddleware };
