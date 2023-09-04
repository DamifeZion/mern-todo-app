import { VscTarget, VscCalendar } from "react-icons/vsc";
import { PiClipboardText } from "react-icons/pi";

const sideNavData = {
  mainMenu: [
    {
      to: "/dashboard/myday",
      icon: VscTarget,
      txt: "My day",
    },

    {
      to: "/dashboard/tasks/next-seven-days",
      icon: VscCalendar,
      txt: "Next 7 days",
      notification: 4,
    },

    {
      to: "/dashboard/tasks/all",
      icon: PiClipboardText,
      txt: "All my tasks",
      notification: 4,
    },
  ],

  myLists: [
    {
      to: "/dashboard/tasks/lists/:id",
      txt: "Personal",
      icon: null,
      notification: 4,
    },

    {
      to: "/dashboard/tasks/lists/work",
      txt: "Work",
      icon: null,
      notification: null,
    },

    {
      to: "/dashboard/tasks/lists/grocery",
      txt: "Grocery List",
      icon: null,
      notification: null,
    },
  ],

  tags: [
    {
      to: "/dashboard/tasks/#priority",
      txt: "#Priority",
      txtStyle: "text-[#f9d21f]",
    },
  ],
};

export default sideNavData;
