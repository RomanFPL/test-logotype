import React from "react";
import styles from "./AuthenticatedLayout.module.css";

const AuthenticatedLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default AuthenticatedLayout;
