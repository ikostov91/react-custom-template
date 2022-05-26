import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/dashboard';
import About from '../../pages/about/about';

const MainContent = () => {
  return (
    <>
      <div className='main-content'>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>      
    </>
  )
};

export default MainContent;
