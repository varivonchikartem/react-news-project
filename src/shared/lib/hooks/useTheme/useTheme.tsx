import React from "react";
import { Theme } from "../../../const/schema/ThemeSchema";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
  };

  return {
    theme: theme || Theme.DARK,
    toggleTheme,
  };
}
