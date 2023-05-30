import React from "react";
import styles from "./IntroCard.module.css";
import PlanetProgress from "../PlanetProgress/PlanetProgress";

interface IntroCardProps {
  name: string;
  progress: {
    level: number;
    value: number;
  };
}

const IntroCard: React.FC<IntroCardProps> = ({ name, progress }) => {
  const leftTotReach = `${100 - progress.value}% to reach next level`;
  return (
    <div className={styles.introContainer}>
      <h2>Hey, {name} 👋 </h2>
      <p>Here’s complex overview of your progress</p>
      <div className={styles.planetWrapper}>
        <PlanetProgress progressValue={progress.value} level={progress.level} />
      </div>
      <p className={styles.progressText}>{leftTotReach}</p>
    </div>
  );
};

export default IntroCard;
