import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sideNavSlice,
  suggestionSlice,
  reFetchAllTodos,
} from "../../../features/slices/exportSlices";
import {
  GearIcon,
  SideNav,
  AddTask,
  Suggestion,
  SuggestionQuickTools,
  EditTask,
} from "../../../components/exportComponents";
import { BiArrowToRight } from "react-icons/bi";
import { PiLightbulbFilament } from "react-icons/pi";
import { deleteTodoItem } from "../../../middleWares/exportMiddleWare";

const MyDay = () => {
  const dispatch = useDispatch();
  const { completed, title, subTitle, notes, file, selectedTaskId, deleted } =
    useSelector((state) => state.taskItemsSlice);

  const { todoTitle } = useSelector(
    (state) => state.addTaskSlice
  );

  useEffect(() => {
    reFetchAllTodos(dispatch);
  }, [dispatch, completed, todoTitle, title, subTitle, notes, file, deleted]);

  const { todoData } = useSelector((state) => state.fetchTodosSlice);

  const { sideNavVisible } = useSelector((state) => state.sideNavSlice);
  const { hideSuggestion } = useSelector((state) => state.suggestionSlice);
  const { hideEditTask } = useSelector((state) => state.editTaskSlice);

  function handleMouseEnter() {
    dispatch(sideNavSlice.actions.hideSideNav(true));
  }

  function handleHideSuggestion() {
    dispatch(suggestionSlice.actions.setHideSuggestion());
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
          className={`${sideNavVisible && "translate-x-"} ml-20 w-5/12 ${
            hideSuggestion && "translate-x-[10%]"
          } ${sideNavVisible && hideSuggestion && ""}`}
        >
          <AddTask />
        </div>

        <div
          className={`relative w-3/12 my-8 pr-8 ml-auto ${
            hideSuggestion && "translate-x-full opacity-0 w-0"
          }`}
        >
          <Suggestion />
        </div>

        <div className=" absolute right-8 top-8">
          <SuggestionQuickTools />
        </div>

        <div
          onClick={handleHideSuggestion}
          className=" cursor-pointer absolute bg-[--dash-bg-color] top-[49%] text-[--dash-txt-color1] hover:text-[--pri-color] right-4 py-7 px-4 text-[1.7rem] rounded-tl-xl rounded-bl-xl"
        >
          {!hideSuggestion ? (
            <BiArrowToRight />
          ) : (
            <PiLightbulbFilament strokeWidth={2} />
          )}
        </div>

        <div
          className={`absolute top-0 left-0 w-full h-full ease duration-200 ${
            hideEditTask ? "invisible opacity-0" : "visible opacity-100"
          }`}
        >
          {selectedTaskId &&
            todoData
              .filter((todo) => todo._id === selectedTaskId)
              .map((todo) => <EditTask key={todo._id} todoData={todo} />)}
        </div>
      </section>
    </div>
  );
};

export default MyDay;
