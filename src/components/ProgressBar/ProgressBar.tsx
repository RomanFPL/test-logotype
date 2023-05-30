import React from "react";
import styles from "./ProgressBar.module.css";

import cn from "classnames";

interface ProgressBarProps {
  value: number;
  isDot?: boolean;
  offsetX?: number;
  size?: number;
}

const ProgressBar: React.FC<ProgressBarProps & React.PropsWithChildren> = ({
  value,
  isDot,
  children,
  size,
  offsetX,
}) => {
  const rotation = (360 / 100) * value;
  const itemSize = size ? `${size}px` : undefined;

  const commonCircleProps = { cx: "50", cy: "50", r: "40" };

  return (
    <div
      className={styles.wrapper}
      style={{ width: itemSize, height: itemSize }}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translateX(${offsetX}%)` }}
      >
        <circle className={styles.circle} {...commonCircleProps} />
        <circle
          className={`${styles.circle} ${styles.fill}`}
          {...commonCircleProps}
          style={{
            strokeDashoffset: `calc(251.2 - (251.2 * ${value}) / 100)`,
          }}
        />
        <circle
          className={cn(styles.circlePath, styles.fill)}
          {...commonCircleProps}
        />
      </svg>
      {children}
      {isDot && (
        <div
          className={styles.dotWrapper}
          style={{
            transform: `rotate(${rotation}deg)`,
            width: itemSize,
            height: itemSize,
          }}
        />
      )}
    </div>
  );
};

export default ProgressBar;
