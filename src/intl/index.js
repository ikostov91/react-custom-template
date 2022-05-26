import EnglishMessages from './messages/en';
import BulgarianMessages from './messages/bg';

const appLocale = [{
  messages: EnglishMessages,
  locale: 'en',
  name: 'English'
}, {
  messages: BulgarianMessages,
  locale: 'bg',
  name: 'Bulgarian'
}];

export default appLocale;
