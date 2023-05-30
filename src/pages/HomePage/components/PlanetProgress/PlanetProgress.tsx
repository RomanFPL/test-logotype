import React from "react";
import styles from "./PlanetProgress.module.css";

import { ReactComponent as Planet } from "assets/planets/level1.svg";
import GlassLabel from "components/GlassLabel/GlassLabel";
import ProgressBar from "components/ProgressBar/ProgressBar";

interface PlanetProgressProps {
  progressValue: number;
  level: number;
}

const PlanetProgress: React.FC<PlanetProgressProps> = ({
  progressValue,
  level,
}) => {
  return (
    <div className={styles.container}>
      <ProgressBar value={progressValue} isDot>
        <Planet className={styles.planet} />
        <div className={styles.progress}>
          <span>{level}</span>
          <GlassLabel />
        </div>
      </ProgressBar>
    </div>
  );
};

export default PlanetProgress;
