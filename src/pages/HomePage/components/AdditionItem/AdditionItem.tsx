import React from "react";
import styles from "./AdditionItem.module.css";

import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { ReactComponent as Dots } from "assets/icons/dots.svg";

import IconButton from "components/IconButton/IconButton";
import Counter from "../Counter/Counter";

interface AdditionItemProps {
  pages: number;
  users: number;
  images: string[];
}

const AdditionItem: React.FC<AdditionItemProps> = ({
  pages,
  users,
  images = [],
}) => {
  const previewImages = images.slice(0, 3);
  const moreImages = images.length > 3 ? images.length - 3 : 0;

  return (
    <div className={styles.container}>
      <div className={styles.actionPanel}>
        <div className={styles.actionName}>
          <IconButton className={styles.iconButton}>
            <Plus />
          </IconButton>
          <h3>New Additions</h3>
        </div>
        <IconButton className={styles.menuIcon}>
          <Dots />
        </IconButton>
      </div>
      <div className={styles.counterPanel}>
        <Counter type="book" amount={pages} />
        <Counter type="user" amount={users} />
      </div>
      <div className={styles.imagesPanel}>
        {previewImages.map((src, idx) => (
          <div className={styles.imageWrapper}>
            {idx === 2 && !!moreImages && (
              <div className={styles.more}>+{moreImages}</div>
            )}
            <img src={src} className={styles.images} alt="preview" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionItem;
