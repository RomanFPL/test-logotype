import React from "react";
import styles from "./PlanetProgress.module.css";

import { ReactComponent as Planet } from "assets/planets/level1.svg";

interface PlanetProgressProps {
  progressValue: number;
  level: number;
}

const PlanetProgress: React.FC<PlanetProgressProps> = ({
  progressValue,
  level,
}) => {
  const rotation = (360 / 100) * progressValue;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <svg
          className={styles.svg}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className={styles.circle} cx="50" cy="50" r="40" />
          <circle
            className={`${styles.circle} ${styles.fill}`}
            cx="50"
            cy="50"
            r="40"
            style={{
              strokeDashoffset: `calc(251.2 - (251.2 * ${progressValue}) / 100)`,
            }}
          />
          <circle
            className={`${styles.circlePath} ${styles.fill}`}
            cx="50"
            cy="50"
            r="40"
          />
        </svg>
        <Planet className={styles.planet} />
        <div className={styles.progress}>
          <span>{level}</span>
          <span className={styles.label}>level</span>
        </div>
        <div
          className={styles.dotWrapper}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
};

export default PlanetProgress;
