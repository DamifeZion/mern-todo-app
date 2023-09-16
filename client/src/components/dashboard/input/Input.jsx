/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskItemsSlice } from "../../../features/slices/exportSlices";
import { AiOutlinePlus, AiOutlineArrowUp } from "react-icons/ai";

const Input = ({ className }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.taskItemsSlice);

  function handleInputClick() {
    inputRef.current.focus();
  }

  function handleInputChange(event) {
    const value = event.target.value;
    dispatch(taskItemsSlice.actions.setTitleValue(value));
  }

  function handleSubmit() {
    //run post api here
    dispatch(taskItemsSlice.actions.setTitle(title))
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
