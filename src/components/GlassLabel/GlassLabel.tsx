import React from "react";
import styles from "./GlassLabel.module.css";

interface GlassLabelProps {
  textClassName?: string;
}

const GlassLabel: React.FC<GlassLabelProps> = ({ textClassName }) => {
  return (
    <div className={styles.labelWrapper}>
      <div className={styles.labelText}>level</div>
      <span className={styles.labelGlass} />
    </div>
  );
};

export default GlassLabel;
