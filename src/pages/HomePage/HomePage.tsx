import React from "react";
import styles from "./HomePage.module.css";
import Paper from "../../components/Paper/Paper";
import { useSelector } from "react-redux";
import { getUser } from "config/redux/slectors/index";
import IntroCard from "./components/IntroCard/IntroCard";
import PlanetSlider from "./components/PlanetSlider/PlanetSlider";
import AchievementItem from "./components/AchievementItem/AchievementItem";

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
      <Paper className={styles.miniBlock}>
        <AchievementItem
          type="courses"
          text="Courses completed"
          currentValue={3}
          total={15}
        />
      </Paper>
      <Paper className={styles.miniBlock}>
        <AchievementItem
          type="folder"
          text="Folders add"
          currentValue={3}
          total={15}
        />
      </Paper>
      <Paper className={styles.miniBlock}>
        <AchievementItem
          type="book"
          text="Books read"
          currentValue={3}
          total={15}
        />
      </Paper>
      <Paper className={styles.additionBlock}></Paper>
      <Paper className={styles.additionBlock}></Paper>
      <Paper className={styles.additionBlock}></Paper>
    </div>
  );
};

export default HomePage;
