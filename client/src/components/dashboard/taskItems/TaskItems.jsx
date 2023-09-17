/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  taskItemsSlice,
  editTaskSlice,
} from "../../../features/slices/exportSlices";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

const TaskItems = ({ className }) => {
  const dispatch = useDispatch();
  const { completed, title, subTitle } = useSelector(
    (state) => state.taskItemsSlice
  );

  const handleCheck = () => {
    dispatch(taskItemsSlice.actions.setCompleted(completed));
  };

  const showEditTask = () => {
    dispatch(editTaskSlice.actions.toggleVisibility());
  };

  return (
    <div
      id="taskItems"
      className={`${className} relative bg-[#252525] p-4 flex items-center gap-4 rounded-md group cursor-pointer} ${completed ? 'bg-[#202020]' : 'bg-[#252525]'}`}
    >
      <div
        id="crossCheckedTodos"
        className={`${completed ? 'flex opacity-50 bg-black bg-opacity-40' : 'hidden '} flex-col items-center justify-center absolute top-0 left-0 w-full h-full overflow-hidden`}
      >
        <span className=" bg-[--dash-txt-color1] w-full h-[2px] z-10 rotate-[6deg]" />
      </div>

      <label
        onClick={handleCheck}
        className={`flex w-[20px] relative z-10 h-[20px] rounded-full border-[1.9px] border-[--dash-txt-color1] cursor-pointer 
          ${completed && "border-[--pri-color] border-[2px]"}`}
      >
        <span
          className={`flex items-center justify-center w-full h-full rounded-full bg-[--dash-txt-color1] text-[#252525] duration-300 scale-0 ${
            completed && "scale-100"
          }`}
        >
          <BsCheck />
        </span>
      </label>

      <div className=" flex flex-col text-[.9rem] gap-2 overflow-hidden w-[80%]">
        <h4 className=" text-[--dash-txt-color2] text-ellipsis w-full whitespace-nowrap overflow-hidden">
          {title}
        </h4>

        <p className="text-ellipsis w-full whitespace-nowrap overflow-hidden">
          {subTitle}
        </p>
      </div>

      <div className="absolute top-4 right-4 flex items-center invisible group-hover:visible gap-3">
        <AiFillEdit
          onClick={showEditTask}
          className=" text-[1.3rem] rotate-90 cursor-pointer hover:text-[--dash-txt-color2]"
          strokeWidth={20}
        />

        <AiOutlinePlus className=" text-[1.4rem] rotate-45 cursor-pointer hover:text-[--dash-txt-color2]" />
      </div>
    </div>
  );
};

export default TaskItems;
