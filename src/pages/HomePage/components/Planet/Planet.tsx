import React from "react";
import styles from "./Planet.module.css";

import cn from "classnames";
import { PlanetMap } from "config/constants";

interface PlanetProps {
  level: number;
}

const Planet: React.FC<PlanetProps> = ({ level }) => {
  const Planet = PlanetMap[level - 1];
  return (
    <Planet
      className={cn(
        styles.planet,
        { [styles.planetMid]: level > 4 },
        { [styles.planetMax]: level > 8 }
      )}
    />
  );
};

export default Planet;
