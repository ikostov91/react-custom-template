import React from "react";
import Translate from "../translate";
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { useTheme } from "../../hooks/use-theme";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <span className="theme-toggle" onClick={() => toggleTheme()}>
      <span className="me-1 theme-mode-icon">
        {isDarkMode ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}
      </span>
      <label className="theme-mode-label">
        <Translate id={isDarkMode ? 'theme.mode.light' : 'theme.mode.dark'} />
      </label>
    </span>
  );
};

export default ThemeToggle;
