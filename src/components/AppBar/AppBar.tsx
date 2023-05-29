import React, { FC } from "react";
import styles from "./AppBar.module.css";

interface AppBarProps {}

const AppBar: FC<AppBarProps> = () => (
  <div className={styles.AppBar}>
    <input type="text" placeholder="Search..." />
    <select name="language" id="language">
      <option value="English">English</option>
      <option value="Spanish">Spanish</option>
      <option value="German">German</option>
    </select>
    <button>Notification</button>
    <div className={styles.profileBlock}>
      <img src="" alt="Profile Image" />
      <span>Username</span>
    </div>
  </div>
);

export default AppBar;
