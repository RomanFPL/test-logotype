import React from "react";
import styles from "./AuthenticatedLayout.module.css";

import SidebarMenu from "components/SidebarMenu/SidebarMenu";
import AppBar from "components/AppBar/AppBar";

import navigation from "config/navigation/index";

const AuthenticatedLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const user = {
    firstName: "Peter",
    role: "admin",
    imgUrl: "",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigationWrapper}>
        <SidebarMenu items={navigation} />
      </div>
      <div className={styles.appBarWrapper}>
        <AppBar user={user} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AuthenticatedLayout;
