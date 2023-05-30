import React from "react";
import styles from "./IconButton.module.css";

import cn from "classnames";

const IconButton: React.FC<
  React.PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};

export default IconButton;
