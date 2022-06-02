import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/dashboard';
import About from '../../pages/about/about';
import NotFound from '../../pages/not-found/not-found';
import TopNavBar from './top-nav-bar';
import CustomGridDemo from '../../pages/custom-grid-demo/custom-grid-demo';
import PrivateRoute from '../../routing/private-route';

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
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="custom-grid-demo" element={<PrivateRoute><CustomGridDemo /></PrivateRoute>} />
            <Route path="about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="*" element={<PrivateRoute><NotFound /></PrivateRoute>} />
          </Routes>
        </div>
      </div>      
    </>
  )
};

export default MainContent;
