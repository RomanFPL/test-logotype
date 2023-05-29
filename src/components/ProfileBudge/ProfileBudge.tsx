import React from "react";
import styles from "./ProfileBudge.module.css";

export interface ProfileBudgeProps {
  firstName: string;
  role: string;
  imgUrl: string;
}

const ProfileBudge: React.FC<ProfileBudgeProps> = ({
  firstName,
  role,
  imgUrl,
}) => {
  return (
    <div className={styles.profileBudge}>
      <div className={styles.names}>
        <span>{firstName}</span>
        <span className={styles.role}>{role}</span>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imgUrl} alt="profile" />
      </div>
    </div>
  );
};

export default ProfileBudge;
