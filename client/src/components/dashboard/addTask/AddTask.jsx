import { useSelector, useDispatch } from "react-redux";
import {
  GreetUser,
  RandomQuote,
  TimeAndDay,
  Input,
  TaskItems,
} from "../../exportComponents";
import {
  googleCalendar,
  outlookCalendar,
  halfCircle,
} from "../../../assets/exportAssets";
import { comingSoonSlice } from "../../../features/slices/exportSlices";

const AddTask = () => {
  const dispatch = useDispatch()
  const { apiData } = useSelector((state) => state.addTaskSlice);

  function showComingSoon(){
    dispatch(comingSoonSlice.actions.showComingSoon())
  }

  return (
    <div className=" py-5 text-[--dash-txt-color1] flex flex-col h-screen">
      <div className=" h-[92.5%] overflow-hidden">
        <h1 className=" font-bold ">
          <span className="text-[1.8rem] capitalize text-[--dash-txt-color2] text-[#e4e4e4]">
            <GreetUser />
          </span>
          <RandomQuote className=" text-[1.6rem]" />
        </h1>

        <div className=" flex items-center mt-9 gap-9">
          <TimeAndDay />

          <div className="flex flex-col gap-[.20rem]">
            <p className="text-[.85rem] text-[#e4e4e4]">
              Join video meetings with one tap
            </p>

            <div className=" flex items-center gap-4">
              <span className=" flex gap-1">
                <img
                  src={googleCalendar}
                  alt="google meet"
                  className="w-[13.5px]"
                />

                <a
                  onClick={showComingSoon}
                  href={null}
                  className=" text-[.8rem] text-[--pri-color] cursor-pointer hover:underline"
                >
                  Connect Google Calendar
                </a>
              </span>

              <span className=" flex gap-1">
                <img
                  src={outlookCalendar}
                  alt="google meet"
                  className="w-[17px]"
                />

                <a
                  onClick={showComingSoon}
                  href={null}
                  className=" text-[.8rem] text-[--pri-color] cursor-pointer hover:underline"
                >
                  Connect Outlook Calendar
                </a>
              </span>
            </div>
          </div>
        </div>

        <div
          className={`relative flex flex-col mt-8 h-[68%] pb-3 gap-3 overflow-y-auto ${
            !apiData && "overflow-y-hidden"
          }`}
        >
          {/* ADDED TASK from API GOES HERE then set that apiData to true */}
          <TaskItems />
          <TaskItems />
          <TaskItems />
          <TaskItems />
          <TaskItems />
          <TaskItems />
          <TaskItems />
          <TaskItems />
          <TaskItems />
          <TaskItems />

          <img
            src={halfCircle}
            className={`w-[55%] absolute -bottom-24 right-1/2 translate-x-1/2 ${
              apiData && "invisible opacity-0 scale-50"
            }`}
          />
        </div>
      </div>

      <div className="mt-auto">
        <Input />
      </div>
    </div>
  );
};

export default AddTask;
