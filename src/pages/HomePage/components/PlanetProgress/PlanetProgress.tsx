import React from "react";
import styles from "./PlanetProgress.module.css";

import GlassLabel from "components/GlassLabel/GlassLabel";
import ProgressBar from "components/ProgressBar/ProgressBar";
import Planet from "../Planet/Planet";

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
        <Planet level={level} />
        <div className={styles.progress}>
          <span>{level}</span>
          <GlassLabel text="level" />
        </div>
      </ProgressBar>
    </div>
  );
};

export default PlanetProgress;
