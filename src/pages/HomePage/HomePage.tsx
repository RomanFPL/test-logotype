import React from "react";
import styles from "./HomePage.module.css";
import Paper from "components/Paper/Paper";
import IntroCard from "./components/IntroCard/IntroCard";
import PlanetSlider from "./components/PlanetSlider/PlanetSlider";
import AchievementItem from "./components/AchievementItem/AchievementItem";
import AdditionItem from "./components/AdditionItem/AdditionItem";

import { useSelector } from "react-redux";
import { getUser } from "../../config/redux/selectors/index";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { firstName, level, progress, courses, book, folder, additions } =
    useSelector(getUser);

  return (
    <div className={styles.container}>
      <Paper className={styles.progressBlock}>
        <IntroCard {...{ firstName, level, progress }} />
      </Paper>
      <Paper className={styles.animatedProgressBlock}>
        <PlanetSlider {...{ level, progress }} />
      </Paper>
      <Paper className={styles.miniBlock}>
        <AchievementItem type="courses" text="Courses completed" {...courses} />
      </Paper>
      <Paper className={styles.miniBlock}>
        <AchievementItem type="folder" text="Folders add" {...book} />
      </Paper>
      <Paper className={styles.miniBlock}>
        <AchievementItem type="book" text="Books read" {...folder} />
      </Paper>
      <Paper className={styles.additionBlock}>
        <AdditionItem {...additions} />
      </Paper>
      <Paper className={styles.additionBlock}>
        <AdditionItem {...additions} />
      </Paper>
      <Paper className={styles.additionBlock}>
        <AdditionItem {...additions} />
      </Paper>
    </div>
  );
};

export default HomePage;
