import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const languages = [{
  id: 1,
  code: 'en',
  name: 'English'
}, {
  id: 2,
  code: 'bg',
  name: 'Bulgarian'
}];

const LanguageSelector = () => {
  const [language, setLanguage] = useState(languages[0]);

  return (
    <Dropdown className='language-selector'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <img
          src={require(`../assets/flag-icons/${language.code}.svg`)}
          width="26"
          alt="lang-icon"
          className='flag-icon mr-2'
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map(lang => (
          <Dropdown.Item key={lang.code} onClick={() => setLanguage(lang)}>
            <img
              src={require(`../assets/flag-icons/${lang.code}.svg`)}
              width="26"
              alt="lang-icon"
              className='flag-icon'
            />
            <span>{lang.name}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
};

export default LanguageSelector;
