/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSlice } from "../features/slices/exportSlices";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { dot } from "../assets/exportAssets";
// eslint-disable-next-line no-unused-vars
import { ErrorMessage, SuccessMessage } from "../components/exportComponents";

const Signup = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, password, passwordVisible } = useSelector(
    (state) => state.signupSlice
  );

  // const {error, message} = useSelector(state => state.placeholder)
  const error = "Signup error message from store";
  //Input value collection and management
  function handleFirstNameChange(e) {
    dispatch(signupSlice.actions.firstNameFunc(e.target.value));
  }

  function handleLastNameChange(e) {
    dispatch(signupSlice.actions.lastNameFunc(e.target.value));
  }

  function handleEmailChange(e) {
    dispatch(signupSlice.actions.emailFunc(e.target.value));
  }

  //Below is to collect the password value but also make sure the conditions are met
  const passwordConditionRef = useRef(null);

  function handlePasswordChange(e) {
    const passwordCondition = passwordConditionRef.current;
    const listItems = passwordCondition.querySelectorAll("li");

    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialChar = /[!@#$%^&*?/;"'|_.-]/;
    const value = e.target.value;
    dispatch(signupSlice.actions.passwordFunc(value));

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
  }

  //change inputs border to red if there is an error
  function setBorderError() {
    if (error) {
      //uncomet the  below when done with api fetch
      // return `border border-red-600`
    }
  }

  const navigate = useNavigate();
  const buttonRef = useRef(null)
  
  function handleSubmit(e) {
    e.preventDefault();
    const passwordCondition = passwordConditionRef.current;
    const listItems = passwordCondition.querySelectorAll("li");
    listItems.forEach((item) => {
      item.style.color = "#fff";
    });

    console.log("submitted");

    //if api is loading run the below 
    //buttonRef.current.classList.add('disabled-button')
    //else buttonref.current.classList.remove('disabled-button')

    //clear all input value
    dispatch(signupSlice.actions.resetValue());
    //If user Authuorized redirect below
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }

  //Password visibility
  function handlePasswordVisibility() {
    dispatch(signupSlice.actions.passwordVisibleFunc());
  }

  return (
    <div
      className="
      flex items-center justify-center w-full h-screen bg-[#111] lgsm:px-3
    "
    >
      <form className=" flex flex-col items-center pt-10 bg-[#252525] px-3 py-9 w-full h-full lgsm:h-fit lgsm:w-fit lgsm:rounded-2xl sm:px-10 overflow-hidden">
        <Link
          to="/"
          className="flex items-center gap-[.1rem] text-[1.3rem] text-[--neutral-color] font-bold tracking-wide leading-none lg:text-[1.5rem]"
        >
          Task <img src={dot} className=" w-[.46rem] place-self-end mb-1" />
          flow
        </Link>

        <h2 className="flex overflow-hidden items-center gap-1 text-[1.8rem] font-bold text-[--neutral-color]">
          Organize it all
          <img src={dot} className=" w-6" />
        </h2>

        <small className=" mt-6 w-fit  flex">
          {error && <SuccessMessage message={error} />}
        </small>

        <div className=" flex flex-col gap-3 mt-4">
          <div className=" relative">
            <input
              className={`bg-[#161616] pl-10 pr-4 py-3 outline-none border-[#fff] text-[#fff] rounded-3xl w-full whitespace-nowrap text-ellipsis ${setBorderError()}`}
              onChange={handleFirstNameChange}
              type="text"
              value={firstName}
              placeholder="First name"
            />

            <i className=" absolute top-1/2 -translate-y-1/2 left-3 text-[--pri-color] text-[1.1rem]">
              <AiOutlineUser />
            </i>
          </div>

          <div className=" relative">
            <input
              className={`bg-[#161616] pl-10 pr-4 py-3 outline-none border-[#fff] text-[#fff] rounded-3xl w-full whitespace-nowrap text-ellipsis ${setBorderError()}`}
              onChange={handleLastNameChange}
              type="text"
              value={lastName}
              placeholder="Last name"
            />

            <i className=" absolute top-1/2 -translate-y-1/2 left-3 text-[--pri-color] text-[1.1rem]">
              <AiOutlineUserAdd />
            </i>
          </div>

          <div className=" relative">
            <input
              className={`bg-[#161616] pl-10 pr-4 py-3 outline-none border-[#fff] text-[#fff] rounded-3xl w-full whitespace-nowrap text-ellipsis ${setBorderError()}`}
              onChange={handleEmailChange}
              type="email"
              value={email}
              placeholder="Enter your email"
            />

            <i className=" absolute top-1/2 -translate-y-1/2 left-3 text-[--pri-color] text-[1.1rem]">
              <MdEmail />
            </i>
          </div>

          <div className="relative">
            <i className=" absolute top-1/2 -translate-y-1/2 left-3 text-[--pri-color] text-[1.1rem]">
              <FaLock />
            </i>

            <input
              className={`bg-[#161616] pl-10 pr-4 py-3 outline-none border-[#fff] text-[#fff] rounded-3xl w-full whitespace-nowrap text-ellipsis ${setBorderError()}`}
              onChange={handlePasswordChange}
              type={passwordVisible ? "text" : "password"}
              value={password}
              placeholder="Enter your password"
            />

            <i
              onClick={handlePasswordVisibility}
              className=" absolute top-1/2 -translate-y-1/2 right-3 text-[--pri-color] cursor-pointer text-[1.3rem]"
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </i>
          </div>
        </div>

        <ul
          ref={passwordConditionRef}
          className=" flex flex-col gap-[.15rem] mt-3 text-[#fff] place-self-start text-[.5rem] font-medium md:text-[.6rem]"
        >
          <li>Password must be at least 8 characters long.</li>
          <li>Password must contain at least one uppercase letter.</li>
          <li>Password must contain at least one lowercase letter.</li>
          <li>
            Password must contain at least one special character (e.g., !@#$%*).
          </li>
        </ul>

        <div
          className="place-self-start mt-5 text-[--bg-color2]
           flex flex-wrap justify-between w-full
        "
        >
          <small className=" text-[.65rem] lgsm:text-[.75rem]">
            Have an account?
            <Link
              to="/login"
              className="ml-1 font-medium underline hover:text-[--pri-color]"
            >
              Click here
            </Link>
          </small>

          <Link
            to="/password/reset"
            className="font-medium underline hover:text-[--pri-color] text-[.65rem] lg:text-[.75rem] flex justify-between"
          >
            Forgot Password
          </Link>
        </div>

        <button
          ref={buttonRef}
          onClick={handleSubmit}
          className="px-4 py-3 bg-[--pri-color] text-[--bg-color] w-full rounded-3xl mt-9"
        >
          Sign up
        </button>

        <small className=" text-[--neutral-color] text-center gap-3 text-[.75rem] mt-8">
          By using Task.flow you accept our <br />
          <a
            href="https://twitter.com/en/tos"
            target="_blank"
            className="hover:text-[--pri-color] underline mr-1"
            rel="noreferrer"
          >
            Terms of service
          </a>
          and
          <a
            href="https://twitter.com/en/privacy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[--pri-color] underline ml-1"
          >
            Privacy policy
          </a>
        </small>
      </form>
    </div>
  );
};

export default Signup;
