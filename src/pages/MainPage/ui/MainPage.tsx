import React from "react";
import clx from "classnames";
import styles from "./MainPage.module.scss";
import { PageWrapper } from "../../../widgets/PageWrapper/index.";
import { Link } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleList } from "../../../entities/Article/ui/ArticleList/ui/ArticleList";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleView } from "../../../entities/Article/modal/types/ArticleSchema";
import { getRouteArticles } from "../../../shared/const/PageRoutes/PageRoutes";

interface MainPageProps {
  className?: string;
}

const MainPage: React.FC<MainPageProps> = (props) => {
  const { className } = props;

  const mainpageClasses = clx(styles.MainPage, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();

  return (
    <div className={mainpageClasses}>
      <section className={styles.Intro}>
        <div className={styles.IntroInner}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita?</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium mollitia itaque laudantium
            deleniti porro!
          </p>
        </div>
      </section>
      <section className={styles.Releases}>
        <header className={styles.ReleasesPanel}>
          <h2 className={styles.title}>New Releases</h2>
          <Link className={styles.link} to={getRouteArticles()}>
            View All Stories
          </Link>
        </header>
      </section>
    </div>
  );
};

export default MainPage;
