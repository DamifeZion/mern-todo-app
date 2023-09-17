/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  taskItemsSlice,
  editTaskSlice,
} from "../../../features/slices/exportSlices";
import { deleteTodoItem } from "../../../middleWares/exportMiddleWare";
import { IsLoading } from "../../exportComponents";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

const TaskItems = ({ className, todoData }) => {
  const dispatch = useDispatch();
  const { isLoading, selectedTaskId } = useSelector(
    (state) => state.taskItemsSlice
  );

  const [checked, setChecked] = useState(false);

  const handleCheck = async () => {
    setChecked((state) => !state);
    dispatch(taskItemsSlice.actions.setCompleted(checked));
  };

  const showEditTask = () => {
    dispatch(taskItemsSlice.actions.setSelectedTaskId(todoData._id));
    dispatch(editTaskSlice.actions.toggleVisibility());
  };

  const handleDeleteTodoItem = () => {
    deleteTodoItem(dispatch, todoData._id);
  };

  return (
    <div
      id="taskItems"
      className={`${className} relative bg-[#252525] p-4 flex items-center gap-4 rounded-md group cursor-pointer overflow-hidden} ${
        todoData.completed ? "bg-[#202020]" : "bg-[#252525]"
      }`}
    >
      {isLoading && todoData._id === selectedTaskId && (
        <div className=" absolute top-0 left-0 w-full h-full overflow-hidden z-30 rounded-md">
          <IsLoading />
        </div>
      )}

      <div
        id="crossCheckedTodos"
        className={`${
          todoData.completed
            ? "flex opacity-50 bg-black bg-opacity-40"
            : "hidden "
        } flex-col items-center justify-center absolute top-0 left-0 w-full h-full overflow-hidden`}
      >
        <span className=" bg-[--dash-txt-color1] w-full h-[2px] z-10 rotate-[6deg]" />
      </div>

      <label
        onClick={handleCheck}
        className={`flex w-[20px] relative z-10 h-[20px] rounded-full border-[1.9px] border-[--dash-txt-color1] cursor-pointer 
          ${todoData.completed && "border-[--pri-color] border-[2px]"}`}
      >
        <span
          className={`flex items-center justify-center w-full h-full rounded-full bg-[--dash-txt-color1] text-[#252525] duration-300 scale-0 ${
            todoData.completed && "scale-100"
          }`}
        >
          <BsCheck />
        </span>
      </label>

      <div className=" flex flex-col text-[.9rem] gap-2 overflow-hidden w-[80%]">
        <h4 className=" text-[--dash-txt-color2] text-ellipsis w-full whitespace-nowrap overflow-hidden">
          {todoData.title}
        </h4>

        <p className="text-ellipsis w-full whitespace-nowrap overflow-hidden">
          {todoData.subTitle}
        </p>
      </div>

      <div className="absolute top-4 right-4 flex items-center invisible group-hover:visible gap-3">
        <AiFillEdit
          onClick={showEditTask}
          className=" text-[1.3rem] rotate-90 cursor-pointer hover:text-[--dash-txt-color2]"
          strokeWidth={20}
        />

        <AiOutlinePlus
          onClick={handleDeleteTodoItem}
          className=" text-[1.4rem] rotate-45 cursor-pointer hover:text-[--dash-txt-color2]"
        />
      </div>
    </div>
  );
};

export default TaskItems;
