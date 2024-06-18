import React from "react";
import clx from "classnames";
import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "../../../shared/lib/hooks/useTheme/useTheme";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;

  const themeswitcherClasses = clx(styles.ThemeSwitcher, {
    [className!]: className,
  });

  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" className={themeswitcherClasses} onClick={toggleTheme}>
      Change theme
    </button>
  );
};
