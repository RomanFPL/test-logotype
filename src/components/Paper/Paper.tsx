import React from "react";
import styles from "./Paper.module.css";
import cn from "classnames";

interface PaperProps extends React.PropsWithChildren {
  className?: string;
}

const Paper: React.FC<PaperProps> = ({ children, className }) => {
  return <div className={cn(styles.paper, className)}>{children}</div>;
};

export default Paper;
