import React from "react";
import clx from "classnames";
import styles from "./MainPage.module.scss";

interface MainPageProps {
  className?: string;
}

const MainPage: React.FC<MainPageProps> = (props) => {
  const { className } = props;

  const mainpageClasses = clx(styles.MainPage, {
    [className!]: className,
  });

  return <div className={mainpageClasses}>MainPage</div>;
};

export default MainPage;
