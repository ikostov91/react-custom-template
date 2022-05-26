import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import eventBus from '../event-bus/event-bus';
import { LANGUAGE_CHANGED_EVENT } from '../event-bus/events';
import appLocale from '../intl';

const LanguageSelector = () => {
  const [language, setLanguage] = useState(appLocale[0]);

  const changeLanguage = (language) => {
    setLanguage(language);
    eventBus.dispatch(LANGUAGE_CHANGED_EVENT, { locale: language.locale });
  };

  return (
    <Dropdown className='language-selector'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <img
          src={require(`../assets/flag-icons/${language.locale}.svg`)}
          width="26"
          alt="lang-icon"
          className='flag-icon mr-2'
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='languages-label'>
          Languages
        </div>
        {appLocale.map(lang => (
          <Dropdown.Item key={lang.locale} onClick={() => changeLanguage(lang)}>
            <img
              src={require(`../assets/flag-icons/${lang.locale}.svg`)}
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
