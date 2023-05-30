import React from "react";
import styles from "./GlassLabel.module.css";

import cn from "classnames";

interface GlassLabelProps {
  textClassName?: string;
  text: string;
}

const GlassLabel: React.FC<GlassLabelProps> = ({ textClassName, text }) => {
  return (
    <div className={styles.labelWrapper}>
      <div className={cn(styles.labelText, textClassName)}>{text}</div>
      <span className={styles.labelGlass} />
    </div>
  );
};

export default GlassLabel;
