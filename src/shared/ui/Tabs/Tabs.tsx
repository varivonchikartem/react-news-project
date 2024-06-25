import React from "react";
import clx from "classnames";
import styles from "./Tabs.module.scss";
import Button, { ButtonTheme } from "../Button/Button";

export interface TabItem<T> {
  value: T;
  content: React.ReactNode;
}

interface TabsProps<T> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>({ className, tabs, value, onTabClick }: TabsProps<T>) => {
  const tabsClasses = clx(styles.Tabs, {
    [className!]: className,
  });

  console.log(value);

  return (
    <div className={tabsClasses}>
      {tabs.map((tab) => (
        <Button
          theme={tab.value === value ? ButtonTheme.DEFAULT : ButtonTheme.DISABLED}
          key={tab.value}
          onClick={() => onTabClick(tab)}
          className={styles.tabButton}
        >
          {tab.content}
        </Button>
      ))}
    </div>
  );
};
