import { Cookies } from 'react-cookie';
import { LANGUAGE_COOKIE_NAME } from '../constants/cookie-names';
import LANGUAGES from '../constants/languages';

export const setLangInCookies = (langId, langName, langCode) => {
  const cookies = new Cookies();
  cookies.remove(LANGUAGE_COOKIE_NAME);
  cookies.set(LANGUAGE_COOKIE_NAME, { id: langId, name: langName, code: langCode });
};

export const getLangId = () => {
  const lang = getLangFromCookies();
  return lang.id;
};

export const getLangCode = () => {
  const lang = getLangFromCookies();
  return lang.code;
};

export const getLang = () => {
  const lang = getLangFromCookies();
  return lang;
}

const getLangFromCookies = () => {
  const cookies = new Cookies();
  const lang = cookies.get(LANGUAGE_COOKIE_NAME);
  return lang || LANGUAGES.find(x => x.isDefault);
};
