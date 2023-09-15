/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputCompSlice } from "../../../features/slices/exportSlices";
import { addTaskTitleMiddleware } from "../../../middleWares/exportMiddleWare";
import { AiOutlinePlus, AiOutlineArrowUp } from "react-icons/ai";

const Input = ({ className }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { titleValue } = useSelector((state) => state.inputCompSlice);

  function handleInputClick() {
    inputRef.current.focus();
  }

  function handleInputChange(event) {
    const value = event.target.value;
    dispatch(inputCompSlice.actions.setTitleValue(value));
  }

  function handleSubmit(e) {
    addTaskTitleMiddleware(e, titleValue, dispatch);
  }

  return (
    <div
      id="input"
      onClick={handleInputClick}
      className={`relative text-[.9rem] ${className}`}
    >
      <span className="absolute top-1/2 -translate-y-1/2 left-[.7rem] text-sm cursor-text">
        <AiOutlinePlus strokeWidth={15} />
      </span>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          onMouseOver={handleInputClick}
          value={titleValue}
          className="w-full py-[.6rem] px-10 rounded-md outline-none border-2 border-[--dash-bg-color2] focus:border-[--pri-color] bg-[--dash-bg-color] caret-[--pri-color] focus:text-[#e4e4e4] hover:border-[--pri-color]"
          type="text"
          placeholder="Enter task title"
          ref={inputRef}
        />
      </form>

      <AiOutlineArrowUp
        onClick={handleSubmit}
        className=" absolute top-1/2 -translate-y-1/2 right-[.7rem] text-[--dash-txt-color1] cursor-pointer hover:text-[--pri-color]"
        strokeWidth={40}
      />
    </div>
  );
};

export default Input;
