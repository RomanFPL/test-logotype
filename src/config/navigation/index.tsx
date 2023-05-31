import { MenuTypes } from "../constants/index";

import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as CoursesIcon } from "assets/icons/courses.svg";
import { ReactComponent as LibrariesIcon } from "assets/icons/libraries.svg";
import { ReactComponent as StatisticsIcon } from "assets/icons/statistics.svg";
import { ReactComponent as UsersGuidelineIcon } from "assets/icons/guideLine.svg";
import { ReactComponent as SignOutIcon } from "assets/icons/logout.svg";
import getRoot from "helper/index";

const navigation = [
  {
    icon: <HomeIcon />,
    title: "Home",
    root: getRoot("/"),
    type: MenuTypes.DefaultItem,
  },
  {
    icon: <CoursesIcon />,
    title: "Courses",
    root: getRoot("/courses"),
    type: MenuTypes.DefaultItem,
  },
  {
    icon: <LibrariesIcon />,
    title: "Libraries",
    root: getRoot("/libraries"),
    type: MenuTypes.DefaultItem,
  },
  {
    icon: <StatisticsIcon />,
    title: "Statistics",
    root: getRoot("/statistics"),
    type: MenuTypes.DefaultItem,
  },
  { type: MenuTypes.Divider },
  {
    icon: <UsersGuidelineIcon />,
    title: "Users guideline",
    root: getRoot("/users-guideline"),
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
