/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../../features/slices/exportSlices";
import { FaUserCircle, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { dot } from "../../assets/exportAssets";
// eslint-disable-next-line no-unused-vars
import { ErrorMessage, Loading } from "../../components/exportComponents";

const Login = () => {
  const dispatch = useDispatch();
  const { email, password, passwordVisible } = useSelector(
    (state) => state.loginSlice
  );

  // const {error, message} = useSelector(state => state.placeholder)
  const error = "Login error message from store";
  //Input value collection and management
  function handleEmailChange(e) {
    dispatch(loginSlice.actions.emailFunc(e.target.value));
  }

  function handlePasswordChange(e) {
    dispatch(loginSlice.actions.passwordFunc(e.target.value));
  }

  //change inputs border to red if there is an error
  function setBorderError() {
    if (error) {
      //uncomet the  below when done with api fetch
      // return `border border-red-600`
    }
  }

  const navigate = useNavigate();
  const buttonRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    //if api is loading run the below
    buttonRef.current.classList.add("disabled-button");
    //else buttonref.current.classList.remove('disabled-button')

    //clear all input value
    dispatch(loginSlice.actions.resetValue());
    //If user Authuorized redirect below

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }

  //Password visibility
  function handlePasswordVisibility() {
    dispatch(loginSlice.actions.passwordVisibleFunc());
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

        <span className=" text-[5rem] mt-6 text-[--pri-color]">
          <FaUserCircle />
        </span>

        <small className=" mt-6 w-fit  flex">
          {error && <ErrorMessage message={error} />}
        </small>

        <div className=" flex flex-col gap-3 mt-4">
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

        <div
          className="place-self-start mt-5 text-[--bg-color2]
           flex flex-wrap justify-between w-full
        "
        >
          <small className=" text-[.65rem] lgsm:text-[.75rem]">
            Don't have an account?
            <Link
              to="/signup"
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
          className=" px-4 py-3 bg-[--pri-color] text-[--bg-color] w-full rounded-3xl mt-9"
        >
          Log in
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

      {/*Bellow is for when make API request loading*/}
      {/* {isLoading ? (
        <div className="fixed w-full h-screen top-0 right-1/2 translate-x-1/2">
          <Loading />
        </div>
      ) : null} */}
    </div>
  );
};

export default Login;
