/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaHashtag, FaRegBell } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  comingSoonSlice,
  editTaskSlice,
  taskItemsSlice,
} from "../../../features/slices/exportSlices";
import { IoClose } from "react-icons/io5";
import { MdMarkChatRead } from "react-icons/md";

const EditTask = () => {
  const dispatch = useDispatch();
  const { completed, title, subTitle, notes, file } = useSelector(
    (state) => state.taskItemsSlice
  );

  const showComingSoon = () => {
    dispatch(comingSoonSlice.actions.showComingSoon());
  };

  const hideEditTask = () => {
    dispatch(editTaskSlice.actions.toggleVisibility());
  };

  const handleTitleChange = (e) => {
    dispatch(taskItemsSlice.actions.setTitle(e.target.value));
    console.log(title);
  };

  const handleCheck = () => {
    dispatch(taskItemsSlice.actions.setCompleted());
  };

  const handleSubTitleChange = (e) => {
    dispatch(taskItemsSlice.actions.setSubTitle(e.target.value));
    console.log(subTitle);
  };

  const handleNotesChange = (e) => {
    dispatch(taskItemsSlice.actions.setNotes(e.target.value));
    console.log(notes);
  };

  return (
    <div className="relative text-[#fff] flex items-center justify-center w-full h-full overflow-hidden">
      {/* the below span is to listen for a click in case a user clicks out of the form */}
      <span
        onClick={hideEditTask}
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
      />

      <form
        className="relative flex flex-col w-[38%] h-5/6 bg-[--dash-bg-color] rounded-2xl py-7 px-5 z-[100] overflow-y-scroll
      "
      >
        {/* When todo completes the below span shows to  disables form */}
        <span
          className={`${completed ? 'block' : 'hidden'} select-none absolute top-0 left-0 w-full h-full bg-[#1b1b1b96] rounded-2xl`}
        />

        <div className="flex w-full items-center justify-between">
          <label
            htmlFor="title"
            className=" uppercase text-[.8rem] tracking-widest text-[#a2a2a2]"
          >
            Title
          </label>

          <div className=" flex items-center gap-4 ease">
            <MdMarkChatRead
              onClick={handleCheck}
              title={`${!completed ? "Mark as done" : "Restore task"}`}
              className={` text-[#a2a2a2] text-[1.3rem] cursor-pointer duration-300 z-50 ${
                completed && "text-[--pri-color]"
              }`}
            />

            <IoClose
              title="Close"
              onClick={hideEditTask}
              className="text-[#a2a2a2] text-[1.5rem] hover:text-[--pri-color] cursor-pointer z-50"
            />
          </div>
        </div>
        <input
          onChange={handleTitleChange}
          id="title"
          type="text"
          value={title}
          className="mt-3 w-full py-[.2rem] rounded-lg bg-transparent ease-linear duration-150 hover:bg-black outline-none caret-[--pri-color] px-3 font-medium text-[1.4rem]"
        />

        <div className="flex items-center mt-5 gap-3 overflow-hidden">
          <p
            onClick={showComingSoon}
            className="flex items-center text-[.73rem] gap-2 bg-[#252525] px-3 py-2 rounded-3xl cursor-pointer hover:-translate-y-[1px] ease duration-100"
          >
            <FaRegBell className=" text-[1.1rem] text-[#e4595f]" />

            <span>Remind me</span>
          </p>

          <p
            onClick={showComingSoon}
            className="flex items-center text-[.73rem] gap-2 bg-[#252525] px-3 py-2 rounded-3xl cursor-pointer hover:-translate-y-[1px] ease duration-100"
          >
            <FaRegBell className=" text-[1.1rem] text-[#f5a623]" />

            <span>Personal</span>
          </p>

          <p
            onClick={showComingSoon}
            className="flex items-center text-[.73rem] gap-2 bg-[#252525] px-3 py-2 rounded-3xl cursor-pointer hover:-translate-y-[1px] ease duration-100"
          >
            <FaHashtag className=" text-[.85rem] text-[#0083ff]" />

            <span>Tags</span>
          </p>
        </div>

        <label
          htmlFor="subtitle"
          className="mt-10 uppercase text-[.8rem] tracking-widest text-[#a2a2a2]"
        >
          Sub-Title
        </label>

        <input
          onChange={handleSubTitleChange}
          id="subtitle"
          type="text"
          value={subTitle}
          className="mt-3 w-full py-[.2rem] rounded-lg bg-transparent ease-linear duration-150 hover:bg-black outline-none caret-[--pri-color] px-3"
        />

        <label
          htmlFor="notes"
          className="mt-5 uppercase text-[.8rem] tracking-widest text-[#a2a2a2]"
        >
          Notes
        </label>

        <div className="h-full lg:h-40">
          <textarea
            id="notes"
            type="text"
            onChange={handleNotesChange}
            value={notes}
            className="mt-3 w-full h-full py-2 rounded-lg bg-transparent ease-linear duration-150 hover:bg-black outline-none caret-[--pri-color] px-3 placeholder:text-[#464646] resize-none"
            placeholder="Insert your notes here"
          />
        </div>

        <p className="mt-10 uppercase text-[.8rem] tracking-widest text-[#a2a2a2]">
          Attachments
        </p>

        <label
          htmlFor="file"
          onClick={showComingSoon}
          className="border-[2px] border-dotted border-[#464646] rounded-xl flex mt-3 text-[.85rem] text-[#464646] items-center justify-center py-4 cursor-pointer ease duration-300 hover:border-[--pri-color] hover:text-[--pri-color]"
        >
          Click to add your files here
        </label>

        <input disabled id="file" type="file" className="w-full invisible" />
      </form>
    </div>
  );
};

export default EditTask;
