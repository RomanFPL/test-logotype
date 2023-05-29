import React, { FC } from "react";
import styles from "./AppBar.module.css";
import InputSearch from "../InputSearch/InputSearch";
import { useForm } from "react-hook-form";
import IconButton from "../IconButton/IconButton";

import { ReactComponent as Notification } from "assets/icons/bell.svg";

interface AppBarProps {}

type FormData = {
  search: string;
};

const AppBar: FC<AppBarProps> = () => {
  const { control } = useForm<FormData>({
    defaultValues: {
      search: "",
    },
    mode: "onSubmit",
  });

  return (
    <div className={styles.AppBar}>
      <div className={styles.searchBlock}>
        <InputSearch name={"inputSearch"} control={control} />
      </div>
      <div className={styles.profileBlock}>
        <select name="language" id="language">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
        </select>
        <IconButton>
          <Notification />
        </IconButton>
        <div className={styles.profileBlock}>
          <img src="" alt="Profile Image" />
          <span>Username</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
