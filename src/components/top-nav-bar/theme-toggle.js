import React, { useContext } from "react";
import Translate from "../translate";
import { ThemeContext } from "../../context/theme-provider";
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
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
