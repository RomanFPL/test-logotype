import React from "react";
import styles from "./IconButton.module.css";

const IconButton: React.FC<
  React.PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};

export default IconButton;
