import React from "react";
import styles from "./HomePage.module.css";
import Paper from "../../components/Paper/Paper";
import { useSelector } from "react-redux";
import { getUser } from "config/redux/slectors/index";
import IntroCard from "./components/IntroCard/IntroCard";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { firstName } = useSelector(getUser);
  return (
    <div className={styles.container}>
      <Paper className={styles.progressBlock}>
        <IntroCard name={firstName} progress={{ value: 40, level: 1 }} />
      </Paper>
      <Paper className={styles.animatedProgressBlock}></Paper>
      <Paper className={styles.miniBlock}></Paper>
      <Paper className={styles.miniBlock}></Paper>
      <Paper className={styles.miniBlock}></Paper>
      <Paper className={styles.additionBlock}></Paper>
      <Paper className={styles.additionBlock}></Paper>
      <Paper className={styles.additionBlock}></Paper>
    </div>
  );
};

export default HomePage;
