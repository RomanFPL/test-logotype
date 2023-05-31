import React from "react";
import styles from "./PlanetSlider.module.css";
import GlassLabel from "components/GlassLabel/GlassLabel";
import { PlanetMap } from "config/constants/index";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { ReactComponent as Character } from "assets/other/character.svg";

interface PlanetSliderProps {
  progress: number;
  level: number;
}

const PlanetSlider: React.FC<PlanetSliderProps> = ({ progress, level }) => {
  const progressText = `${progress}% Completed`;
  const marginOffset = level * -140;

  return (
    <div className={styles.container}>
      <div className={styles.planetSlider}>
        <div
          className={styles.planetList}
          style={{ marginLeft: `${marginOffset}px` }}
        >
          {PlanetMap.map((Planet, idx) => {
            if (level - 1 === idx)
              return (
                <div key={idx} className={styles.planetWrapper}>
                  <Character className={styles.character} />
                  <ProgressBar size={130} value={progress} isDot>
                    <Planet />
                  </ProgressBar>
                </div>
              );
            return (
              <div key={idx} className={styles.planetWrapper}>
                <Planet />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.glassWrapper}>
        <GlassLabel text={progressText} textClassName={styles.text} />
      </div>
    </div>
  );
};

export default PlanetSlider;
