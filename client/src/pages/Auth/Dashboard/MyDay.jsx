import { useState } from "react";
import {
  SideNav,
  AddTask,
  Suggestion,
} from "../../../components/exportComponents";

const MyDay = () => {
  const [hideSideNav, setHideSideNav] = useState(true);

  function handleHideSideNav() {
    setHideSideNav((state) => !state);
  }

  return (
    <div className=" bg-[--dash-bg-color]">
      <section className="flex w-full h-screen">
        <div
          className={`transition-translate ease-linear duration-200 ${
            hideSideNav ? "w-[16%]" : "-translate-x-full"
          } border border-green-600`}
        >
          <SideNav />
        </div>

        <div
          onClick={handleHideSideNav}
          className={`${
            hideSideNav ? "w-[60%]" : "w-[70%]"
          } border border-red-600`}
        >
          <AddTask />
        </div>

        <div className={`w-[24%] border border-blue-600`}>
          <Suggestion />
        </div>
      </section>
    </div>
  );
};

export default MyDay;
