import { useSelector } from "react-redux";
import { userSlice } from "../../features/slices/exportSlices";
import { GreetUser } from "../exportComponents";
import { RandomQuote } from "../exportComponents";
import { TimeAndDay } from "../exportComponents";
import { googleMeet } from "../../assets/exportAssets";

const AddTask = () => {
  return (
    <div className=" py-5 text-[--dash-txt-color1]">
      <h1 className=" font-bold ">
        <span className="text-[1.8rem] capitalize text-[--dash-txt-color2] text-[#e4e4e4]">
          <GreetUser />
        </span>
        <RandomQuote className=" text-[1.6rem]" />
      </h1>

      <div className=" flex items-center mt-9 gap-9 border border-green-600">
        <TimeAndDay />

        <div className="flex flex-col gap-[.20rem]">
          <p className="text-[.85rem] text-[#e4e4e4]">
            Join video meetings with one tap
          </p>

          <div className=" flex items-center gap-4">
            <span className=" flex gap-1">
              <img src={googleMeet} alt="google meet" className="w-[13.5px]" />

              <a
                href="#"
                className=" text-[.8rem] text-[--pri-color] cursor-pointer underline"
              >
                Connect Google Meet
              </a>
            </span>

            <span className=" flex gap-1">
              <img src={googleMeet} alt="google meet" className="w-[13.5px]" />

              <a
                href="#"
                className=" text-[.8rem] text-[--pri-color] cursor-pointer"
              >
                Connect Google Meet
              </a>
            </span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AddTask;
