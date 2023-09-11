import { BiSearch } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";

const SuggestionQuickTools = () => {
  return (
    <div className="flex items-center gap-5 linear text-[#e4e4e4]">
      <TfiReload 
        strokeWidth={1}
      className=" text-[1.2rem] cursor-pointer duration-500 hover:text-[--pri-color]" />
      <BiSearch className=" text-[1.5rem] cursor-pointer duration-500 hover:text-[--pri-color]" />
    </div>
  );
};

export default SuggestionQuickTools;
