import React from 'react';
import history from '../history';

const SiteLogo = () => {
  return (
    <div className='site-logo'>
      <span className='site-title' onClick={() => history.push('/')}>RCT</span>
    </div>
  );
};

export default SiteLogo;
