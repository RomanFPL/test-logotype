import React from "react";
import styles from "./SidebarMenu.module.css";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import { Link } from "react-router-dom";
import NavItem, { NavItemProps } from "./NavItem";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";

interface SidebarMenuProps {
  items: NavItemProps[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.logoHeader}>
        <Link to="/">
          <LogoIcon className={styles.logo} />
        </Link>
      </div>
      <ul className={styles.linkWrapper}>
        {items.map((item, idx) => (
          <NavItem key={item.title + item.type + idx} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
