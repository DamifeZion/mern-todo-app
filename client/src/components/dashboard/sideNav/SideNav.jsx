/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { userSlice, sideNavSlice } from "../../../features/slices/exportSlices";

import SideNavChip from "../../dashboard/sideNavChip/SideNavChip";
import sideNavData from "../../../data/sideNavData";
import { workWithTeam } from "../../../assets/exportAssets";

import { BsPinAngle } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { MdOutlineLock, MdOutlineEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";

//userName from API Here

const SideNav = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.userSlice);
  const { sideNavImgVisible } = useSelector((state) => state.sideNavSlice);

  function hideImage() {
    dispatch(sideNavSlice.actions.hideSideNavImg());
  }

  function hideSideNav() {
    dispatch(sideNavSlice.actions.hideSideNav(false));
  }

  //Data from sideNavData
  const { mainMenu, myLists, tags } = sideNavData;

  return (
    <div className="relative flex flex-col h-full w-full py-5 text-[--dash-txt-color1]">
      <header className="sticky top-0 flex flex-col group">
        <nav className="px-5 relative flex items-center gap-2 cursor-pointer">
          <h1 className="ml-14 text-[--dash-txt-color2] leading-tight font-medium">
            {userName} <br />
            <span className="text-[--dash-txt-color1] font-normal text-[.9rem]">
              Free Plan
            </span>
          </h1>

          <span
            onClick={hideSideNav}
            className={`group-hover:opacity-100 opacity-0 absolute right-5 top-0 text-[1.1rem] p-1 hover:bg-[--pri-color] hover:text-[--dash-txt-color2] rounded-full`}
          >
            <BsPinAngle />
          </span>
        </nav>

        <button className="mx-5 mt-3 p-[.45rem] rounded-3xl border border-[--pri-color] font-medium text-[--pri-color] hover:bg-[--pri-color] hover:text-[--dash-txt-color2]">
          Go Premium
        </button>
      </header>

      <main
        className={`scrollbar mt-7 overflow-y-auto ${
          sideNavImgVisible && "h-[55%]"
        } `}
      >
        <div className="flex flex-col">
          {mainMenu.map((data, index) => (
            <SideNavChip
              key={index}
              to={data.to}
              icon={data.icon}
              iconStyle={!data.icon && "hidden"}
              txt={data.txt}
              notification={data.notification}
              notificationStyle={!data.notification && "hidden"}
            />
          ))}
        </div>

        <div>
          <h1 className="relative mt-3 px-5 py-2 cursor-pointer flex items-center gap-2 font-semibold text-[1.1rem] text-[--dash-txt-color2] hover:bg-[--neutral-color2]">
            My lists
            <MdOutlineLock className="text-[--dash-txt-color1]" />
            <AiOutlinePlus className=" absolute top-1/2 -translate-y-1/2 right-4 hover:text-[--pri-color] text-[--dash-txt-color1]" />
          </h1>

          <div className="flex flex-col">
            {myLists.map((data, index) => (
              <SideNavChip
                key={index}
                to={data.to}
                icon={data.icon}
                txt={data.txt}
                notification={data.notification}
                notificationStyle={!data.notification && "hidden"}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="relative mt-3 px-5 py-2 cursor-pointer flex items-center gap-2 font-semibold text-[1.1rem] text-[--dash-txt-color2] hover:bg-[--neutral-color2]">
            Tags
            <BsTags className=" text-[--dash-txt-color1]" />
            <div className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center gap-3">
              <MdOutlineEdit className=" text-[--dash-txt-color1] hover:text-[--pri-color]" />
              <AiOutlinePlus className=" text-[--dash-txt-color1] hover:text-[--pri-color]" />
            </div>
          </h1>

          <div className="flex flex-col">
            {tags.map((data, index) => (
              <SideNavChip
                key={index}
                to={data.to}
                icon={data.icon}
                txt={data.txt}
                txtStyle={data.txtStyle}
                notification={data.notification}
                notificationStyle={!data.notification && "hidden"}
              />
            ))}
          </div>
        </div>
      </main>

      <div className="absolute flex flex-col items-center justify-center bottom-5 px-5 font-bold w-full">
        <div
          className={`${sideNavImgVisible ? "visible " : "invisible scale-0"}`}
        >
          <h1 className=" relative w-full text-center text-[1rem]">
            Work with your team
            <IoClose
              onClick={hideImage}
              className="absolute -top-1 -right-3 text-[1.2rem] cursor-pointer hover:text-[--pri-color]"
            />
          </h1>

          <img src={workWithTeam} alt="Work with team" className="mt-1" />

          <button className="mt-2 py-[.6rem] w-full bg-[--pri-color] rounded-3xl text-[.9rem] font-bold text-[#fff] hover:text-[--pri-color]">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
