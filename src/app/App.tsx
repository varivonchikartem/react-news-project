import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";

import { Header } from "../widgets/Header";
import { Sidebar } from "../widgets/Sidebar";
import { AppRouter } from "./providers/AppRouter";
import { useAppDispatch } from "../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { UserActions } from "../entities/User";

interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = (props) => {
  const { className } = props;

  const appClasses = clx(styles.App, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={appClasses}>
      <Header />
      <Sidebar />
      <AppRouter />
    </div>
  );
};
