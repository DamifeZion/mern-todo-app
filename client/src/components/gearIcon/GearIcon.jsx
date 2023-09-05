/* eslint-disable react/prop-types */
import { IoSettingsOutline } from "react-icons/io5";

const GearIcon = ({ onMouseEnter, onMouseLeave, onClick, className }) => {
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`${className} text-[1.35rem] text-[--dash-txt-color2] flex p-[.58rem] border border-r-2 border-b-2 w-fit rounded-full hover:border-[--pri-color] hover:text-[--pri-color] cursor-pointer`}
    >
      <IoSettingsOutline />
    </span>
  );
};

export default GearIcon;
