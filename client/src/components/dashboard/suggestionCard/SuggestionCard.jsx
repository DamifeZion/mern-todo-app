/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {
  suggestionSlice,
  comingSoonSlice,
} from "../../../features/slices/exportSlices";

const SuggestionCard = ({todoData}) => {
  const dispatch = useDispatch();

  const { removeCard, addSuggestion } = useSelector(
    (state) => state.suggestionSlice
  );

  function handleRemoveSuggestion() {
    dispatch(suggestionSlice.actions.setRemoveCard());
    // console.log(removeCard);
  }

  function handleAddSuggestion() {
    dispatch(suggestionSlice.actions.setAddSuggestion());
    dispatch(comingSoonSlice.actions.showComingSoon());
    // console.log(addSuggestion)
  }

  return (
    <div className="relative flex items-center gap-4 border-2 border-transparent hover:border-[--pri-color] bg-[#252525] py-4 px-4 rounded-lg cursor-pointer group">
      <div className="text-[1.25rem] text-[--pri-color]">
        <AiOutlinePlus
          onClick={handleAddSuggestion}
          strokeWidth={7}
        />
      </div>

      <div className="flex gap-2 justify-center flex-col">
        <small className="text-[.7rem] text-[--dash-txt-color1] font-light">
          {todoData.title}
        </small>

        <p className="text-[.85rem] max-h-[5rem] overflow-hidden text-[#e4e4e4]">
          {todoData.notes || todoData.subTitle}
        </p>

        <span className="text-[.75rem] font-medium text-[--pri-color]">
          from 5 days ago
        </span>
      </div>

      <span
        onClick={handleRemoveSuggestion}
        className="opacity-0 ease duration-300 group-hover:opacity-100 cursor-pointer absolute -right-[.20rem] top-0 p-4 text-[1.1rem] text-[--dash-txt-color1] hover:text-[--pri-color]"
      >
        <IoCloseSharp />
      </span>
    </div>
  );
};

export default SuggestionCard;
