import { TiDeviceDesktop } from "react-icons/ti";

const SmallScreens = () => {
  return (
    <div className=" flex flex-col lgsm:flex-row gap-2 items-center justify-center w-full h-screen text-center bg-[--dash-bg-color] text-[--dash-txt-color1] lgsm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]">
      Sorry this site is only available on large screens <TiDeviceDesktop className="text-[2rem] lg:text-[3rem] text-[--pri-color]"/>
    </div>
  );
};

export default SmallScreens;
