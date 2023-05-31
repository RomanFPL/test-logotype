import React from "react";
import styles from "./AchievementItem.module.css";
import ProgressBar from "components/ProgressBar/ProgressBar";

import { ReactComponent as Courses } from "assets/icons/book.svg";
import { ReactComponent as Book } from "assets/icons/paper.svg";
import { ReactComponent as Folder } from "assets/icons/folder.svg";

interface AchievementItemProps {
  type: "book" | "folder" | "courses";
  value: number;
  total: number;
  text: string;
}

const IconsMap = { courses: Courses, book: Book, folder: Folder };

const AchievementItem: React.FC<AchievementItemProps> = ({
  type,
  value,
  total,
  text,
}) => {
  const Icon = IconsMap[type];
  return (
    <div className={styles.container}>
      <ProgressBar value={10} size={64} offsetX={-50}>
        <Icon className={styles.itemIcon} />
      </ProgressBar>
      <div className={styles.textWrapper}>
        <div className={styles.valueWrapper}>
          <span className={styles.current}>{value}</span>
          <span className={styles.total}>/{total}</span>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default AchievementItem;
