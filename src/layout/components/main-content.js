import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/dashboard';
import About from '../../pages/about/about';
import NotFound from '../../pages/not-found/not-found';

const MainContent = () => {
  return (
    <>
      <div className='main-content'>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="dashboard" replace />}
          />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>      
    </>
  )
};

export default MainContent;
