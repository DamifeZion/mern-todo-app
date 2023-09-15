import { useSelector } from "react-redux";
import { dot } from "../../assets/exportAssets";

const GreetUser = () => {
  const { user } = useSelector((state) => state.userSlice);

  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours < 16) {
    timeOfDay = "Afternoon";
  } else if (hours < 23) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }

  return (
    <div className=" flex items-center gap-[.12rem] whitespace-nowrap">
      <h1 className="overflow-hidden text-ellipsis max-w-11/12">
        Good {timeOfDay}, {user.firstName}
      </h1>
      <img src={dot} alt="dot" className=" w-[10px] h-[10px] mt-[.78rem]" />
    </div>
  );
};

export default GreetUser;
