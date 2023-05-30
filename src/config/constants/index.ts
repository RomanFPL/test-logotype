import { ReactComponent as Planet1 } from "assets/planets/level1.svg";
import { ReactComponent as Planet2 } from "assets/planets/level2.svg";
import { ReactComponent as Planet3 } from "assets/planets/level3.svg";
import { ReactComponent as Planet4 } from "assets/planets/level4.svg";
import { ReactComponent as Planet5 } from "assets/planets/level5.svg";
import { ReactComponent as Planet6 } from "assets/planets/level6.svg";
import { ReactComponent as Planet7 } from "assets/planets/level7.svg";
import { ReactComponent as Planet8 } from "assets/planets/level8.svg";
import { ReactComponent as Planet9 } from "assets/planets/level9.svg";

export enum MenuTypes {
  Divider = "divider",
  BottomItem = "bottom",
  DefaultItem = "default",
}

export const languages = [
  { label: "ua", value: "ua" },
  { label: "en", value: "en" },
  { label: "es", value: "es" },
];

export const PlanetMap = [
  Planet1,
  Planet2,
  Planet3,
  Planet4,
  Planet5,
  Planet6,
  Planet7,
  Planet8,
  Planet9,
];
