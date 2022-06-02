import React from 'react';
import history from '../../history';
import Logo from '../logo';

const SiteLogo = () => {
  return (
    <div className='logo-container'>
      <span className='pointer-cursor' onClick={() => history.push('/')}>
        <Logo />
      </span>
    </div>
  );
};

export default SiteLogo;
