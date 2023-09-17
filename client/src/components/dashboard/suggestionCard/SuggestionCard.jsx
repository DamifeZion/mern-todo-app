import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {
  suggestionSlice,
  comingSoonSlice,
} from "../../../features/slices/exportSlices";

const SuggestionCard = () => {
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
          Your Task
        </small>

        <p className="text-[.85rem] max-h-[5rem] overflow-hidden text-[#e4e4e4]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ut
          deserunt pariatur facere ullam repellendus nobis, distinctio id unde
          sit eaque, harum sequi tenetur eveniet consequatur atque, quae tempore
          consectetur iusto tempora? Iusto inventore delectus alias molestiae,
          ut expedita labore voluptatem nihil fuga recusandae numquam modi iure
          omnis consequatur eveniet, quisquam ab, rem placeat quis. Velit
          aliquam similique cupiditate, vero ratione quaerat voluptates debitis
          nulla adipisci molestias iste, quis quidem delectus magnam, eius
          distinctio reiciendis. Cum amet nihil, praesentium et totam esse
          itaque sint quia veritatis soluta in ullam consectetur facilis
          dignissimos est sequi inventore placeat optio voluptatum consequatur
          magni.
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
