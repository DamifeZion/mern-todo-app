import { Link } from "react-router-dom";
import { AssignmentTurnedInOutlined } from "@mui/icons-material";
import { MdDragHandle } from "react-icons/md";

import { useMediaQuery } from "@mui/material";
import { useDispatch} from "react-redux";
import { mobileMenuSlice } from "../../features/slices/exportSlices";

//Devices Menu Imports
import MobileMenu from "./MobileMenu";
import PcMenu from "./PcMenu";

const todoIconResponsiveness = {
  mobile: {
    fontSize: "1rem",
  },

  tab: {
    "@media (min-width: 341px)": {
      fontSize: "1.3rem",
    },
  },

  pc: {
    "@media (min-width: 764px)": {
      fontSize: "2rem",
    },
  },

  monitor: {
    "@media (min-width: 1440px)": {
      fontSize: "2.5rem"
    }
  }
};

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
          className=" flex flex-row-reverse items-center w-fit gap-2 font-semibold tracking-wide text-xs sm:text-sm md:text-md lg:text-lg  2xl:text-3xl"
        >
          <h1 className=" font-poppins">Task.flow</h1>
          <AssignmentTurnedInOutlined
            className="text-[--pri-color]"
            sx={{
              ...todoIconResponsiveness.mobile,
              ...todoIconResponsiveness.tab,
              ...todoIconResponsiveness.pc,
              ...todoIconResponsiveness.monitor,
            }}
          />
        </Link>

        {/*Menu*/}

        {!isMobile ? <PcMenu /> : <MobileMenu />}

        <span
          onClick={handleToggleMenu}
          className=" absolute lg:hidden top-1/2 -translate-y-1/2 right-[--px] text-[2rem] px-[0.2rem] py-[0.2rem] md:px-2 md:py-1 shadow-sm rounded-md"
        >
          <MdDragHandle />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
