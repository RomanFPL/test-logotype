import React from "react";
import styles from "./AuthenticatedLayout.module.css";

import SidebarMenu from "components/SidebarMenu/SidebarMenu";
import AppBar from "components/AppBar/AppBar";

import navigation from "config/navigation/index";
import { getUser } from "../../config/redux/slectors/index";
import { useSelector } from "react-redux";

const AuthenticatedLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { firstName = "", role = "", imgUrl = "" } = useSelector(getUser);
  const user = { firstName, role, imgUrl };

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
