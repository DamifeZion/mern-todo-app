/* eslint-disable react/prop-types */
import { useState } from "react";
import { taskItemsSlice } from "../../../features/slices/exportSlices";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

const TaskItems = ({ className }) => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const { checked, title, subTitle } = useSelector((state) => state.taskItemsSlice);

  const handleCheck = () => {
    setCheck(!check);
    dispatch(taskItemsSlice.actions.setChecked(check));
    console.log(checked);
  };

  return (
    <div
      id="taskItems"
      className={`${className} relative bg-[#252525] p-4 flex items-center gap-4 rounded-md group cursor-pointer`}
    >
      <label
        onClick={handleCheck}
        className={`flex w-[20px] h-[20px] rounded-full border-[1.9px] border-[--dash-txt-color1] cursor-pointer 
          ${check && "border-[--pri-color] border-[2px]"}`}
      >
        <span
          className={`flex items-center justify-center w-full h-full rounded-full bg-[--dash-txt-color1] text-[#252525] duration-300 scale-0 ${
            check && "scale-100"
          }`}
        >
          <BsCheck />
        </span>
      </label>

      <div className=" flex flex-col text-[.9rem] gap-2">
        <h4 className=" text-[--dash-txt-color2]">{title}</h4>

        <p>{subTitle}</p>
      </div>

      <div className="absolute top-4 right-4 flex items-center invisible group-hover:visible gap-3">
        <AiFillEdit
          className="text-[1.3rem] rotate-90 cursor-pointer hover:text-[--dash-txt-color2]"
          strokeWidth={20}
        />

        <AiOutlinePlus className="text-[1.4rem] rotate-45 cursor-pointer hover:text-[--dash-txt-color2]" />
      </div>
    </div>
  );
};

export default TaskItems;
