import { Logo } from "../exportComponents";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { projectManagement } from "../../assets/exportAssets";

import HomeCardChip from "./HomeCardChip";

const HomeCard = () => {
  return (
    <div className=" flex flex-col border border-blue-600 w-full rounded-3xl bg-[--bg-color2] py-6 px-4 lgsm:py-7 700:px-5 1000:py-10 xl:py-[4.5rem] 1000:rounded-[1.8rem] xl:rounded-[4rem] 1xl:px-12">
      <h2 className=" flex gap-1 justify-center text-[1.03rem] font-bold 700:text-[1.07rem] 1xl:text-[1.3rem]">
        Meet Task.flow Workspace
      </h2>

      <h2 id="built-for-people-powering-teams" 
        className="text-center mt-[.3rem] text-[2.1rem] leading-[1.1] place-self-center font-bold  lgsm:w-5/6 lgsm:text-[2.3rem] lgsm:leading-tight 600:w-4/6 700:text-[2.55rem] 700:tracking-tighter 700:leading-none 700:mt-[.8rem] 800:text-[3.8rem] 1xl:w-5/6 1xl:text-[4.5rem]">
        Built for people Powering teams.
      </h2>

      <p className=" text-center mt-9 w-[92%] place-self-center leading-[1.3] sm:w-[93%] sm:text-[.915rem]  lgsm:text-[.95rem] 700:text-[1.1rem] 800:text-[1.05rem] 1000:text-[1.08rem] 1000:mt-12 1xl:text-[1.3rem]">
        It’s how teams collaborate, manage work processes and their daily tasks. All in one place.
      </p>

      <h1
        className="
       place-self-center text-[--pri-color] flex  flex-wrap justify-center items-center w-10/12 mt-9
       lgsm:text-[.98rem] lgsm:flex-nowrap lgsm:justify-center 700:text-[1.1rem] 700:mt-[4.5rem] 1xl:text-[1.5rem]
      "
      >
        <a className=" flex items-center gap-[.1rem] mr-7 cursor-pointer  lgsm:mr-6 lgsm:gap-0  700:mr-16">
          {/*watch the mr-7 for res*/}
          Learn more
          <BsArrowRightShort className=" text-[1.4rem] 1xl:text-[2rem]" />
        </a>

        <a className=" flex items-center cursor-pointer  lgsm:mr-2">Contact</a>

        <a className=" flex items-center gap-[.1rem] cursor-pointer   lgsm:gap-0">
          Sales
          <BsArrowRightShort className=" text-[1.4rem] 1xl:text-[2rem]" />
        </a>
      </h1>

      <h1 className=" flex flex-col flex-wrap place-self-center mt-9 text-[.88rem] gap-2 sm:w-full sm:flex-row sm:gap-0 sm:items-center sm:justify-center lgsm:flex-row lgsm:flex-wrap 700:mt-[4.5rem] 700:text-[1.1rem] 700:gap-3">

        <span className="cursor-pointer font-semibold text-[.88rem] text-center  sm:mr-[.6rem]  700:text-[1.1rem] 1xl:font-bold 1xl:text-[1.35rem]">
          Project management
        </span>

        <a className="flex items-center gap-[.6rem] font-semibold cursor-pointer hover:text-[--pri-color] ease duration-200  sm:gap-[.4rem] sm:w-fit sm:mr-[.6rem]  700:gap-4 1xl:text-[1.35rem] 1xl:font-bold">
          {/*watch here for sm:mr*/}
          <i className=" bg-[--txt-color] w-[2.3px] h-[1.75rem]  700:w-[2.8px] 1xl:w-[3.37px]" />
          <p className="">Chat & Collaboration</p>
        </a>

        <a className="flex place-self-center items-center gap-[.6rem] font-semibold cursor-pointer hover:text-[--pri-color] ease duration-300  sm:gap-[.6rem]  700:gap-4 1xl:text-[1.35rem] 1xl:font-bold">
          <i className=" bg-[--txt-color] w-[2px] h-[1.75rem] sm:w-[2.4px] 700:w-[2.4px]" />

          <p className="">Daily Planner</p>
        </a>
      </h1>

      <img src={projectManagement} alt="project management" className="mt-9 place-self-center  1000:w-[90%] 1000:mt-10 1xl:w-[85%]" />

      <ol className="mt-9 flex flex-col gap-5 text-[.78rem]  lgsm:gap-[.43rem] lgsm:flex-row lgsm:justify-between lgsm:text-[.68rem] 600:text-[.85rem] 700:justify-normal 700:gap-20 800:gap-32 800:font-light 1000:gap-[14.4rem] lg:gap-[14rem] 1xl:ml-7 1xl:text-[1.05rem] 1xl:gap-[9rem]">
        <ul>
          <li className=" flex  items-center gap-2 ">
            <i className=" w-[6.1px] h-[6.1px] mt-2 rounded-full bg-[--txt-color]" />
            Create customized workflows
          </li>

          <li className=" flex  items-center gap-2 ">
            <i className=" w-[6.1px] h-[6.1px] mt-2 rounded-full bg-[--txt-color]" />
            Assign and collaborate on tasks
          </li>

          <li className=" flex  items-center gap-2 ">
            <i className=" w-[6.1px] h-[6.1px] mt-2 rounded-full bg-[--txt-color]" />
            Manage your daily tasks
          </li>
        </ul>

        <ul>
          <li className=" flex  items-center gap-2 ">
            <i className=" w-[6.1px] h-[6.1px] mt-2 rounded-full bg-[--txt-color]" />
            Chat in real-time
          </li>

          <li className=" flex  items-center gap-2 ">
            <i className=" w-[6.1px] h-[6.1px] mt-2 rounded-full bg-[--txt-color]" />
            Onboard your whole team in seconds
          </li>

          <li className=" flex  items-center gap-2 ">
            <i className=" w-[6.1px] h-[6.1px] mt-2 rounded-full bg-[--txt-color]" />
            Integrate with your favorite tools
          </li>
        </ul>
      </ol>

      <h1 id="home-card-what-will-you-manage" className="mt-9 text-center text-[2.15rem] font-bold items-center justify-center  sm:text-[2rem] lgsm:text-[1.9rem] 600:text-[2.3rem] 800:text-[3rem] 1000:mt-14 1xl:text-[3.7rem]">
        What will you manage with Task.flow Workspace?
      </h1>

      <div className="mt-9 flex-wrap flex items-center justify-center gap-3 place-self-center  600:w-11/12 800:w-full border border-blue-600">
        <HomeCardChip chipTxt={"message"} />
        <HomeCardChip chipTxt={"Design"} />
        <HomeCardChip chipTxt={"Product management"} />
        <HomeCardChip chipTxt={"HR"} />
        <HomeCardChip chipTxt={"Remote work"} />
        <HomeCardChip chipTxt={"Sales"} />
        <HomeCardChip chipTxt={"Customer success"} />
        <HomeCardChip chipTxt={"Finance"} />
        <HomeCardChip chipTxt={"Dev teams"} />
        <HomeCardChip chipTxt={"Project management"} />
      </div>

      <button className="mt-9 flex gap-2 bg-[--pri-color] w-fit place-self-center py-[.9rem] px-7 rounded-full text-[.75rem] text-[--bg-color] font-medium tracking-wider group  600:mt-12 600:px-9 600:text-[.85rem] 700:mt-16">
        Get Started
        <BsArrowRight className=" place-self-center group-hover:translate-x-[0.35rem] ease duration-200" />
      </button>

      <h1 className="flex flex-col items-center font-bold text-center mt-6 tracking-wide  600:mt-12 600:text-[1.1rem] 900:text-[1.15rem] 1xl:text-[1.5rem]">
        Already using a project management tool?
        <span className=" flex items-center leading-tight cursor-pointer text-[--pri-color]">
          Use 1 Click Import
          <BsArrowRightShort className=" text-[1.4rem] 1xl:text-[2rem]" />
        </span>
      </h1>
    </div>
  );
};

export default HomeCard;
