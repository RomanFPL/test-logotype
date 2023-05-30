import React from "react";
import styles from "./PlanetProgress.module.css";

import GlassLabel from "components/GlassLabel/GlassLabel";
import ProgressBar from "components/ProgressBar/ProgressBar";
import Planet from "../Planet/Planet";

interface PlanetProgressProps {
  progressValue: number;
  level: number;
  isLabel?: boolean;
}

const PlanetProgress: React.FC<PlanetProgressProps> = ({
  progressValue,
  level,
  isLabel,
}) => {
  return (
    <div className={styles.container}>
      <ProgressBar size={200} value={progressValue} isDot offsetX={-50}>
        <Planet level={level} />
        {isLabel && (
          <div className={styles.progress}>
            <span>{level}</span>
            <GlassLabel text="level" />
          </div>
        )}
      </ProgressBar>
    </div>
  );
};

export default PlanetProgress;
