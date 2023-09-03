import { signupSlice, authSlice } from "../../features/slices/exportSlices";

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

  handleSubmit: (e, listItems, buttonRef, dispatch, navigate) => {
    e.preventDefault()

    listItems.forEach((item) => {
      item.style.color = "#fff";
    });

    console.log("submitted");

    //if api is loading run the below
    buttonRef.current.classList.add("disabled-button");
    //else buttonref.current.classList.remove('disabled-button')

    //clear all input value
    dispatch(signupSlice.actions.resetValue());
    //If user Authuorized redirect below
    setTimeout(() => {
      dispatch(authSlice.actions.authed(true))
      navigate('/dashboard')
    }, 1000);
  },
};

export { signupMiddleware };
