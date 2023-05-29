import React, { ReactNode } from "react";
import styles from "./SidebarMenu.module.css";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import { MenuTypes } from "../../config/types/index";

export interface NavItemProps {
  icon?: ReactNode;
  title?: string;
  root?: string;
  type: MenuTypes.Divider | MenuTypes.BottomItem | MenuTypes.DefaultItem;
}

const NavItem: React.FC<NavItemProps> = ({ icon, title, root, type }) => {
  const { pathname } = useLocation();

  console.log(pathname, root);

  const isActive = pathname === root;

  if (type === "divider") {
    return <li className={styles.divider} />;
  }

  if (!icon || !title || !root) return null;

  const isBottom = type === "bottom";

  return (
    <li
      className={cn(styles.navLink, {
        [styles.activeNavLink]: isActive,
        [styles.activeNavLinkBottom]: isBottom,
      })}
    >
      <Link className={styles.link} to={root}>
        {icon}
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
