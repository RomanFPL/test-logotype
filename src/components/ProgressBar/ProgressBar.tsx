import React from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  value: number;
  isDot?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps & React.PropsWithChildren> = ({
  value,
  isDot,
  children,
}) => {
  const rotation = (360 / 100) * value;

  return (
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
            strokeDashoffset: `calc(251.2 - (251.2 * ${value}) / 100)`,
          }}
        />
        <circle
          className={`${styles.circlePath} ${styles.fill}`}
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
      {children}
      {isDot && (
        <div
          className={styles.dotWrapper}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      )}
    </div>
  );
};

export default ProgressBar;