import { MenuTypes } from "../../config/types/index";

import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as CoursesIcon } from "assets/icons/coureses.svg";
import { ReactComponent as LibrariesIcon } from "assets/icons/libraries.svg";
import { ReactComponent as StatisticsIcon } from "assets/icons/statistics.svg";
import { ReactComponent as UsersGuidelineIcon } from "assets/icons/guideLine.svg";
import { ReactComponent as SignOutIcon } from "assets/icons/logout.svg";

const navigation = [
  {
    icon: <HomeIcon />,
    title: "Home",
    root: "/",
    type: MenuTypes.DefaultItem,
  },
  {
    icon: <CoursesIcon />,
    title: "Courses",
    root: "/courses",
    type: MenuTypes.DefaultItem,
  },
  {
    icon: <LibrariesIcon />,
    title: "Libraries",
    root: "/libraries",
    type: MenuTypes.DefaultItem,
  },
  {
    icon: <StatisticsIcon />,
    title: "Statistics",
    root: "/statistics",
    type: MenuTypes.DefaultItem,
  },
  { type: MenuTypes.Divider },
  {
    icon: <UsersGuidelineIcon />,
    title: "Users guideline",
    root: "/users-guideline",
    type: MenuTypes.DefaultItem,
  },
  {
    icon: <SignOutIcon />,
    title: "Sign Out",
    // TODO add logout action
    root: "/logout",
    type: MenuTypes.BottomItem,
  },
];

export default navigation;
