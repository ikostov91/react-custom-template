import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Translate from "./translate";
import { ThemeContext } from "../context/theme-provider";

const ThemeToggleSwitch = () => {
  const { isDarkMode, toggleThemeMode } = useContext(ThemeContext);

  return (
      <Form.Check 
        type="switch"
        id="custom-switch"
        className="theme-toggle-switch"
        label={<Translate id={isDarkMode ? 'theme.mode.dark' : 'theme.mode.light'} />}
        onChange={(e) => {
          toggleThemeMode();
        }}
      />
  );
};

export default ThemeToggleSwitch;