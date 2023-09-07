/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { AiOutlinePlus, AiOutlineArrowUp } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";

const Input = ({ className }) => {
  const inputRef = useRef(null);
  const [toggleInputIcons, setToggleInputIcons] = useState(false);

  function handleInputClick() {
    inputRef.current.focus();
    setToggleInputIcons(true);
  }

  function handleBlur() {
    setToggleInputIcons(false);
  }

  function handleInputChange() {
    setToggleInputIcons(true);
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      alert("Enter Pressed");
    }
  }

  return (
    <div
      id="input"
      onClick={handleInputClick}
      onKeyUp={handleKeyUp}
      className={`relative text-[.9rem] ${className}`}
    >
      <span className="absolute top-1/2 -translate-y-1/2 left-[.7rem] text-sm cursor-text">
        {toggleInputIcons ? <VscBook /> : <AiOutlinePlus strokeWidth={15} />}
      </span>

      <div>
        <input
          onChange={handleInputChange}
          onMouseOver={handleInputClick}
          onBlur={handleBlur}
          className="w-full py-[.6rem] px-10 rounded-md outline-none border-2 border-[--dash-bg-color2] focus:border-[--pri-color] bg-[--dash-bg-color] caret-[--pri-color] focus:text-[#e4e4e4] hover:border-[--pri-color]"
          type="text"
          placeholder={toggleInputIcons ? "Enter task title" : "Add task"}
          ref={inputRef}
        />
      </div>

      {toggleInputIcons && (
        <AiOutlineArrowUp
          className=" absolute top-1/2 -translate-y-1/2 right-[.7rem] text-[--dash-txt-color1] cursor-pointer hover:text-[--pri-color]"
          strokeWidth={40}
        />
      )}
    </div>
  );
};

export default Input;
