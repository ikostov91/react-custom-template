import React from 'react';
import SideNavBar from './components/side-nav-bar';
import TopNavBar from './components/top-nav-bar';
import MainContent from './components/main-content';

const Layout = () => {
  return (
    <>
      <TopNavBar />
      <SideNavBar />
      <MainContent />
    </>
  );
};

export default Layout;