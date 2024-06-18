import React from "react";
import { ThemeContext } from "../../../../shared/lib/context/ThemeContext/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "../../../../shared/lib/localStorage/Theme/ThemeKey";
import { Theme } from "../../../../shared/const/schema/ThemeSchema";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const themeContextValue = React.useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );
  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
