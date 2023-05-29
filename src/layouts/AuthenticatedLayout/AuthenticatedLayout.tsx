import React from "react";
import styles from "./AuthenticatedLayout.module.css";

import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";

import navigation from "../../config/navigation/index";

const AuthenticatedLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <SidebarMenu items={navigation} />
    </div>
  );
  return <div className={styles.container}>{children}</div>;
};

export default AuthenticatedLayout;
