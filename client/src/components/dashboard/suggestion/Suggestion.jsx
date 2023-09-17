import { PiLightbulbFilament } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { LuLoader2 } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { suggestionSlice } from "../../../features/slices/exportSlices";
import { SuggestionCard } from "../../exportComponents";

const Suggestion = () => {
  const dispatch = useDispatch();
  const { filter, isLoading, success } = useSelector(
    (state) => state.suggestionSlice
  );

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(suggestionSlice.actions.handleFilter(value));
    //if fetching from the api you can run this
    // dispatch(suggestionSlice.actions.isLoading(false));
  };

  const clearFilterValue = () => {
    dispatch(suggestionSlice.actions.resetFilter());
  };

  function changeFilterIcon() {
    let icon = <RiMenu4Line />;

    if (filter.length > 0) {
      icon = (
        <span
          onClick={clearFilterValue}
          className="pl-2 pr-3 pb-3 absolute cursor-pointer bottom-0 -right-1 text-[#e4e4e4] text-[1.3rem] hover:text-[--pri-color]"
        >
          <IoCloseSharp />
        </span>
      );
    }

    if (isLoading) {
      icon = <LuLoader2 className="animate-spin text-[--pri-color]" />;
    }

    return icon;
  }

  return (
    <div className="w-full flex flex-col text-[.9rem] h-full">
      <div className="pl-2 flex items-center text-[#e4e4e4] text-[.95rem]">
        <PiLightbulbFilament strokeWidth={2} className="text-[1.6rem]" />
        <h1 className=" ml-2">Suggestions</h1>
      </div>

      <div className="relative mt-6 w-full">
        <input
          onChange={handleChange}
          value={filter}
          className="px-4 pr-9 py-1 bg-transparent placeholder:text-[1.03rem] placeholder:text-[--dash-txt-color1] border-b border-[--dash-txt-color1] focus:border-b-2 focus:border-[--pri-color] text-[--dash-txt-color2] caret-[--pri-color] w-full outline-none"
          placeholder="Filter"
        />

        <span className="pl-2 pr-3 pb-3 absolute bottom-0 -right-1 text-[#e4e4e4] text-[1.3rem] hover:text-[--pri-color]">
          {changeFilterIcon()}
        </span>
      </div>

      <div id="suggestion-chip" className="mt-4 flex flex-col gap-4 overflow-y-scroll h-3/6">
        <SuggestionCard />
      </div>
    </div>
  );
};

export default Suggestion;
