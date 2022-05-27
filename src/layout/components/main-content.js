import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/dashboard';
import About from '../../pages/about/about';
import NotFound from '../../pages/not-found/not-found';
import TopNavBar from './top-nav-bar';
import CustomGridDemo from '../../pages/custom-grid-demo/custom-grid-demo';

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
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="custom-grid-demo" element={<CustomGridDemo />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>      
    </>
  )
};

export default MainContent;
