import React from "react";
import styles from "./IntroCard.module.css";
import PlanetProgress from "../PlanetProgress/PlanetProgress";

interface IntroCardProps {
  firstName: string;
  level: number;
  progress: number;
}

const IntroCard: React.FC<IntroCardProps> = ({
  firstName,
  level,
  progress,
}) => {
  const leftTotReach = `${100 - progress}% to reach next level`;
  return (
    <div className={styles.introContainer}>
      <h2>Hey, {firstName} 👋 </h2>
      <p>Here’s complex overview of your progress</p>
      <div className={styles.planetWrapper}>
        <PlanetProgress progressValue={progress} level={level} isLabel />
      </div>
      <p className={styles.progressText}>{leftTotReach}</p>
    </div>
  );
};

export default IntroCard;
