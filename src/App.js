import React from 'react';
import Layout from './layout/layout';
import { Route, Routes } from 'react-router-dom';
import history from './history';
import NotFound from './pages/not-found/not-found';
import CustomRouter from './routing/custom-router';
import { Provider } from 'react-redux';
import store from './store/index';
import { NotificationContainer } from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import 'rsuite-table/dist/css/rsuite-table.min.css';

import Login from './pages/authentication/login/index';
import ForgotPassword from './pages/authentication/forgot-password';
import ResetPassword from './pages/authentication/reset-password';
import Register from './pages/authentication/register/register';

function App() {
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CustomRouter>
      <NotificationContainer />
    </Provider>
  );
}

export default App;
