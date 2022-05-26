import React, { useEffect, useState } from 'react';
import Layout from './layout/layout';
import { Route, Routes } from 'react-router-dom';
import history from './history';
import NotFound from './pages/not-found/not-found';
import CustomRouter from './routes/custom-router';
import appLocale from './intl';
import { IntlProvider } from 'react-intl'
import eventBus from './event-bus/event-bus';
import { LANGUAGE_CHANGED_EVENT } from './event-bus/events';

function App() {
  useEffect(() => {
    setLanguage(appLocale[0]);
  }, []);
  useEffect(() => {
    eventBus.on(LANGUAGE_CHANGED_EVENT, (data) => {
      const { locale } = data;
      const newLanguage = appLocale.find(x => x.locale === locale);
      setLanguage(newLanguage || appLocale[0]); 
    });
  }, []);

  const [language, setLanguage] = useState(appLocale[0]);

  const selectedLocale = language.locale;
  const selectedMessages = language.messages;

  return ( 
    <IntlProvider
      messages={selectedMessages}
      locale={selectedLocale}
      defaultLocale={selectedLocale}
    >  
      <CustomRouter history={history}>
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CustomRouter>
    </IntlProvider> 
  );
}

export default App;
