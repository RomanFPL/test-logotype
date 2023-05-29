import React from "react";
import styles from "./AuthenticatedLayout.module.css";
import cn from "classnames";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { Link, useLocation } from "react-router-dom";

const AuthenticatedLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { pathname } = useLocation();
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar} role="navigation">
        <div className={styles.logoHeader}>
          <Link to="/">
            <LogoIcon className={styles.logo} />
          </Link>
        </div>
        <ul className={styles.linkWrapper}>
          <li
            className={cn(styles.navLink, {
              [styles.activeNavLink]: pathname === "/",
            })}
          >
            <Link className={styles.link} to="/">
              <HomeIcon /> Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  return <div className={styles.container}>{children}</div>;
};

export default AuthenticatedLayout;
