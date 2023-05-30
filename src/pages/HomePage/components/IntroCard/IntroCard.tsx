import React from "react";
import styles from "./IntroCard.module.css";
import PlanetProgress from "../PlanetProgress/PlanetProgress";

interface IntroCardProps {
  name: string;
}

const IntroCard: React.FC<IntroCardProps> = ({ name }) => {
  return (
    <div className={styles.introContainer}>
      <h2>Hey, {name} 👋 </h2>
      <p>Here’s complex overview of your progress</p>
      <div className={styles.planetWrapper}>
        <PlanetProgress progressValue={20} level={4} />
      </div>
    </div>
  );
};

export default IntroCard;
