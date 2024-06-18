import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";
import { Header } from "../widgets/Header";
import { Sidebar } from "../widgets/Sidebar";
import { PageWrapper } from "../widgets/PageWrapper/index.";

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
      <PageWrapper >1</PageWrapper>
    </div>
  );
};
