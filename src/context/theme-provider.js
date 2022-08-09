import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggle = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);

    if (newValue) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleThemeMode: () => toggle() }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;
