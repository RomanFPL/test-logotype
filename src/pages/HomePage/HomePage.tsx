import React from "react";
import styles from "./HomePage.module.css";
import Paper from "components/Paper/Paper";
import IntroCard from "./components/IntroCard/IntroCard";
import PlanetSlider from "./components/PlanetSlider/PlanetSlider";
import AchievementItem from "./components/AchievementItem/AchievementItem";
import AdditionItem from "./components/AdditionItem/AdditionItem";

import abs2 from "assets/images/abs2.png";
import abs1 from "assets/images/abs1.png";
import useUserData from "../../queries/index";

interface HomePageProps {}

const imgs = [
  abs2,
  abs1,
  abs1,
  abs2,
  abs2,
  abs1,
  abs1,
  abs2,
  abs2,
  abs1,
  abs1,
  abs2,
];

const level = 4;

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.container}>
      <Paper className={styles.progressBlock}>
        <IntroCard />
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
      <Paper className={styles.additionBlock}>
        <AdditionItem images={imgs} users={122} pages={12} />
      </Paper>
      <Paper className={styles.additionBlock}>
        <AdditionItem images={imgs} users={122} pages={12} />
      </Paper>
      <Paper className={styles.additionBlock}>
        <AdditionItem images={imgs} users={122} pages={12} />
      </Paper>
    </div>
  );
};

export default HomePage;
