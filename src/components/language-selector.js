import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import languages from '../common/languages';
import i18n from '../i18n';
import { withTranslation } from "react-i18next";
import Translate from './translate';
import { DEFAULT_LANG } from '../i18n';

const LanguageSelector = ({ t }) => {
  const [language, setLanguage] = useState(DEFAULT_LANG);

  const changeLanguage = (langKey) => {
    setLanguage(langKey);
    i18n.changeLanguage(langKey);
  };

  return (
    <Dropdown className='language-selector'>
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        <img
          src={require(`../assets/flag-icons/${language}.svg`)}
          alt={language}
          width="26"
          className='flag-icon me-2'
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='languages-label'>
          <Translate id="language.selector.dropdown.title" />
        </div>
        {Object.keys(languages).map(key => (
          <Dropdown.Item key={key} onClick={() => changeLanguage(key)}>
            <div>
              <img
                src={require(`../assets/flag-icons/${key}.svg`)}
                alt={key}
                width="26"
                className='flag-icon'
              />
              <Translate
                id={`language.selector.dropdown.${key}.label`}
                defaultMessage={languages[key].label}
              />
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default withTranslation()(LanguageSelector);
