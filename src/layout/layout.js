import React, { useEffect } from 'react';
import SideNavBar from './components/side-nav-bar';
import MainContent from './components/main-content';
import { initApp } from '../store/actions/app-actions';
import { connect } from 'react-redux';

const Layout = ({ initApp }) => {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      <SideNavBar />
      <MainContent />
    </>
  );
};

const mapDispatchToProps = {
  initApp
};

export default connect(null, mapDispatchToProps)(Layout);