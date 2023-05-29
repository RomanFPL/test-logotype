import React, { FC } from "react";
import styles from "./AppBar.module.css";
import InputSearch from "../InputSearch/InputSearch";
import { useForm } from "react-hook-form";
import IconButton from "../IconButton/IconButton";

import { ReactComponent as Notification } from "assets/icons/bell.svg";
import Select from "../Select/Select";
import { languages } from "../../config/types/index";
import ProfileBudge from "../ProfileBudge/ProfileBudge";

interface AppBarProps {}

type FormData = {
  search: string;
  language: string;
};

const AppBar: FC<AppBarProps> = () => {
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
        <ProfileBudge
          firstName="Peter"
          role="Admin"
          imgUrl="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
        />
      </div>
    </div>
  );
};

export default AppBar;
