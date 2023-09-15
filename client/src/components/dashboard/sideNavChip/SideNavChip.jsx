/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SideNavChip = ({
  to,
  icon: Icon,
  txt,
  txtStyle,
  notification,
  notificationStyle,
}) => {
  return (
    <NavLink
      to={to}
      className={`px-5 py-[.65rem] text- flex items-center cursor-pointer group hover:bg-[--dash-bg-color2] gap-2 text-[.9rem] font-medium`}
    >
      {Icon && <Icon className={`text-[1.5rem] group-hover:scale-110 `} />}

      <p className={`${txtStyle}`}>{txt}</p>

      <span
        className={`p-[.13rem] px-[.45rem] rounded-full  text-[.75rem] font-medium text-[--dash-txt-color1] bg-[--dash-bg-color2] group-hover:bg-[--dash-txt-color1] group-hover:text-[--neutral-color] ${notificationStyle}`}
      >
        {notification}
      </span>
    </NavLink>
  );
};

export default SideNavChip;
