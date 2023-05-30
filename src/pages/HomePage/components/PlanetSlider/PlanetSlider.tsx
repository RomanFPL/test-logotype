import React from "react";
import styles from "./PlanetSlider.module.css";
import GlassLabel from "components/GlassLabel/GlassLabel";

interface PlanetSliderProps {
  value: number;
}

const PlanetSlider: React.FC<PlanetSliderProps> = ({ value }) => {
  const progressText = `${value}% Completed`;
  return (
    <div className={styles.glassWrapper}>
      <GlassLabel text={progressText} textClassName={styles.text} />
    </div>
  );
};

export default PlanetSlider;
