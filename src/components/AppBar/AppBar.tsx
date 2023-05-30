import React, { FC } from "react";
import styles from "./AppBar.module.css";
import InputSearch from "../InputSearch/InputSearch";
import { useForm } from "react-hook-form";
import IconButton from "../IconButton/IconButton";

import { ReactComponent as Notification } from "assets/icons/bell.svg";
import Select from "../Select/Select";
import { languages } from "../../config/constants/index";
import ProfileBudge, { ProfileBudgeProps } from "../ProfileBudge/ProfileBudge";

interface AppBarProps {
  user: ProfileBudgeProps;
}

type FormData = {
  search: string;
  language: string;
};

const AppBar: FC<AppBarProps> = ({ user }) => {
  const { control } = useForm<FormData>({
    defaultValues: {
      search: "",
      language: "en",
    },
    mode: "onSubmit",
  });

  return (
    <div className={styles.AppBar}>
      <div className={styles.searchBlock}>
        <InputSearch name={"search"} control={control} />
      </div>
      <div className={styles.profileBlock}>
        <div className={styles.userPanel}>
          <Select name={"language"} control={control} options={languages} />
          <IconButton>
            <Notification />
          </IconButton>
        </div>
        <ProfileBudge {...user} />
      </div>
    </div>
  );
};

export default AppBar;
