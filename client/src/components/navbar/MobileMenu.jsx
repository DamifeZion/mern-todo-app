/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { mobileMenuSlice } from "../../features/slices/exportSlices";

//Dependencies import
import { HomeRounded } from "@mui/icons-material";

const MobileMenu = () => {
  //Querying menuState from the Redux Store
  const { menu } = useSelector((state) => state.mobileMenuSlice);
  const dispatch = useDispatch();

  //handle state update in mobileMenu which is in redux action
  const handleToggleMenu = () => {
    dispatch(mobileMenuSlice.actions.ToggleMenu());
  };

  return (
    <div
      className={`h-screen fixed top-[--menu-top] left-0 w-full pb-10 overflow-hidden bg-mobileMenuOverlay text-[--txt-color] select-none duration-200
        ${menu ? `visible opacity-100` : `invisible opacity-0`}
        `}
    >
      {/*Below is hidden but hides the menu onClick out of the menu*/}
      <span
        onClick={handleToggleMenu}
        className={`absolute top-[0] right-0 bg-transparent w-1/2 h-full
      `}
      />

      <ul 
        onClick={handleToggleMenu}
        className={`overflow-y-scroll h-full flex gap-5 items-center w-4/6 sm:w-3/6 md:w-2/6 bg-[--pri-color] flex-col py-5 px-1 duration-200
        ${menu ? `translate-x-fit` : `-translate-x-full` } 
        `}
      >
        <ol className="flex flex-col items-center gap-2 font-semibold w-full text-center">
          <Link
            to="/"
            className="ease duration-150 hover:text-[--neutral-color] text-[--bg-color] w-full flex gap-1 items-center justify-center py-3"
          >
            <HomeRounded />
            Home
          </Link>
        </ol>

        <Link to="/login" className=" w-full">
          <button className="w-full overflow-hidden shadow-sm px-[.3rem] py-[.5rem] border bg-[--bg-color] hover:bg-[--neutral-color] ease duration-300 hover:text-[--pri-color] font-medium">
            Login
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default MobileMenu;
