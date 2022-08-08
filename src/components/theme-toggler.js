import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Translate from "./translate";

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
      <Form.Check 
        type="switch"
        id="custom-switch"
        size="lg"
        className="theme-toggle-switch"
        label={<Translate id={isDarkMode ? 'theme.mode.dark' : 'theme.mode.light'} />}
        onChange={(e) => {
          setIsDarkMode(e.target.checked);
        }}
      />
  );
};

export default ThemeToggler;
