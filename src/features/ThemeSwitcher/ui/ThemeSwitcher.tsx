import React from "react";
import clx from "classnames";
import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "../../../shared/lib/hooks/useTheme/useTheme";
import { Icon, IconTheme } from "../../../shared/ui/Icon/Icon";
import ThemeSwitcherLightIcon from "../../../shared/assets/icons/ThemeSwitcherLightIcon.svg";
import ThemeSwitcherDarkIcon from "../../../shared/assets/icons/ThemeSwitcherDarkIcon.svg";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { Theme } from "../../../shared/const/schema/ThemeSchema";

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
    <Button theme={ButtonTheme.DEFAULT} type="button" className={themeswitcherClasses} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? (
        <Icon theme={IconTheme.TRANSPARENT} Svg={ThemeSwitcherLightIcon} width="30" height="25" />
      ) : (
        <Icon theme={IconTheme.TRANSPARENT} Svg={ThemeSwitcherDarkIcon} width="30" height="25" />
      )}
    </Button>
  );
};
