import React, { useState, createContext } from "react";
import { THEME } from "../helpers/constants";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(THEME.LIGHT);

  const toggle = () => {
    const nextMode = themeMode === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setThemeMode(nextMode);
    document.documentElement.setAttribute('data-theme', nextMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode: themeMode === THEME.DARK, toggleTheme: toggle }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;
