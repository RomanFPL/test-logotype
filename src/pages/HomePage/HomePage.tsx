import React from "react";
import styles from "./HomePage.module.css";
import Paper from "../../components/Paper/Paper";
import { useSelector } from "react-redux";
import { getUser } from "config/redux/slectors/index";
import IntroCard from "./components/IntroCard/IntroCard";
import PlanetSlider from "./components/PlanetSlider/PlanetSlider";

interface HomePageProps {}

const level = 4;

const HomePage: React.FC<HomePageProps> = () => {
  const { firstName } = useSelector(getUser);
  return (
    <div className={styles.container}>
      <Paper className={styles.progressBlock}>
        <IntroCard name={firstName} progress={{ value: 40, level }} />
      </Paper>
      <Paper className={styles.animatedProgressBlock}>
        <PlanetSlider value={40} level={level} />
      </Paper>
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
