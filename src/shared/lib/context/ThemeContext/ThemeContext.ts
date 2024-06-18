import React from "react";
import { Theme } from "../../../const/schema/ThemeSchema";

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({});
