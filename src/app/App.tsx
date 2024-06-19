import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";

import { Header } from "../widgets/Header";
import { Sidebar } from "../widgets/Sidebar";
import { AppRouter } from "./providers/AppRouter";

interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = (props) => {
  const { className } = props;

  const appClasses = clx(styles.App, {
    [className!]: className,
  });

  return (
    <div className={appClasses}>
      <Header />
      <Sidebar />
      <AppRouter />
    </div>
  );
};
