import React from "react";
import styles from "./IntroCard.module.css";
import PlanetProgress from "../PlanetProgress/PlanetProgress";
import { useSelector } from "react-redux";
import { getUser } from "config/redux/selctors";

interface IntroCardProps {}

const IntroCard: React.FC<IntroCardProps> = () => {
  const { firstName, level, progress } = useSelector(getUser);

  console.log(firstName);

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
