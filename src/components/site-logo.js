import React from 'react';
import history from '../history';

const SiteLogo = () => {
  return (
    <div className='logo-container'>
      <span className='site-logo' onClick={() => history.push('/')}>RCT</span>
    </div>
  );
};

export default SiteLogo;
