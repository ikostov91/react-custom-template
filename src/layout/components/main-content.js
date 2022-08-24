import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import About from '../../pages/about/index';
import NotFound from '../../pages/not-found/index';
import TopNavBar from './top-nav-bar';
import CustomGridDemo from '../../pages/custom-grid-demo/index';
import PrivateRoute from '../../routing/private-route';
import TabsExample from '../../pages/tabs-example/index';
import Users from '../../pages/users/index';
import UserDetails from '../../pages/users/sub-pages/user-details';

const MainContent = () => {
  return (
    <>
      <div className='main-content'>
        <TopNavBar />
        <div className='page-content'>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="dashboard" replace />}
            />
            <Route path="custom-grid-demo" element={<PrivateRoute><CustomGridDemo /></PrivateRoute>} />
            <Route path="users" element={<PrivateRoute><Users /></PrivateRoute>} />
            <Route path="users/:id" element={<PrivateRoute><UserDetails /></PrivateRoute>} />
            <Route path="about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="tabs/*" element={<PrivateRoute><TabsExample /></PrivateRoute>} />
            <Route path="tabs" element={<PrivateRoute><TabsExample /></PrivateRoute>} />
            <Route path="*" element={<PrivateRoute><NotFound /></PrivateRoute>} />
          </Routes>
        </div>
      </div>      
    </>
  )
};

export default MainContent;
