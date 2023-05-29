import React from "react";
import styles from "./HomePage.module.css";
import Paper from "../../components/Paper/Paper";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.container}>
      <Paper className={styles.progressBlock}>ok</Paper>
      <Paper className={styles.animatedProgressBlock}>ok</Paper>
      <Paper className={styles.coursesBlock}>ok</Paper>
      <Paper className={styles.folderBlock}>ok</Paper>
      <Paper className={styles.booksBlock}>ok</Paper>
      <Paper className={styles.additionBlock}>ok</Paper>
      <Paper className={styles.additionBlock}>ok</Paper>
      <Paper className={styles.additionBlock}>ok</Paper>
    </div>
  );
};

export default HomePage;
