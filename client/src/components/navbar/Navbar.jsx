import { Link } from "react-router-dom";
// import { AssignmentTurnedInOutlined } from "@mui/icons-material";
import { MdDragHandle } from "react-icons/md";

import { useMediaQuery } from "@mui/material";
import { useDispatch} from "react-redux";
import { mobileMenuSlice } from "../../features/slices/exportSlices";

//Devices Menu Imports
import MobileMenu from "./MobileMenu";
import PcMenu from "./PcMenu";

const Navbar = () => {
  //Toggle menu from redux
  const dispatch = useDispatch();

  //renderNavConsitionally
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const handleToggleMenu = () => {
    dispatch(mobileMenuSlice.actions.ToggleMenu());
  };

  return (
    <header className=" bg-[--bg-color] shadow-nav">
      <nav className="flex items-center justify-between mx-auto max-w-[1600px] w-full py-[--py] px-[--px]">
        {/*Logo*/}

        <Link
          to="/"
          className=" flex flex-row-reverse items-center w-fit gap-2 font-bold tracking-wide text-md lgsm:text-lg lg:text-[1.8rem] xl:text-[2rem] "
        >
          <h1 className=" font-poppins">Task.flow</h1>

        </Link>

        {/*Menu*/}

        {!isMobile ? <PcMenu /> : <MobileMenu/>}

        <span
          onClick={handleToggleMenu}
          className=" absolute lg:hidden top-1/2 -translate-y-1/2 right-[--px] text-[2rem] px-[0.2rem] py-[0.2rem] md:px-2 md:py-1 shadow-mobileHam rounded-md"
        >
          <MdDragHandle />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
