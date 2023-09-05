import { useSelector, useDispatch } from "react-redux";
import { sideNavSlice } from "../../../features/slices/exportSlices";
import {
  GearIcon,
  SideNav,
  AddTask,
  Suggestion,
} from "../../../components/exportComponents";

const MyDay = () => {
  const dispatch = useDispatch();
  const { sideNavVisible } = useSelector((state) => state.sideNavSlice);
  function handleMouseEnter() {
    dispatch(sideNavSlice.actions.hideSideNav(true));
  }


  return (
    <div className=" bg-[--dash-bg-color]">
      <section className="flex w-full h-screen">
        <div
          className={`transition-translate ease-linear duration-200 ${
            sideNavVisible ? "w-2/12" : " invisible opacity-0 -translate-x-1/6"
          }`}
        >
          <SideNav />
        </div>

        <GearIcon
          onMouseEnter={handleMouseEnter}
          className={`absolute top-5 left-5 ${!sideNavVisible && "visible"}`}
        />

        <div
          className={`${
            sideNavVisible ? "w-7/12" : "w-8/12 px-28"
          } border border-red-600 px-28`}
        >
          <AddTask />
        </div>

        <div className={`w-3/12 border border-blue-600`}>
          <Suggestion />
        </div>
      </section>
    </div>
  );
};

export default MyDay;
