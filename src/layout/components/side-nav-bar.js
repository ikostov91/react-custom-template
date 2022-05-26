import React from 'react';
import history from '../../history';

const SideNavBar = () => {
  return (
    <div className='side-nav-bar'>
      <ul>
        <li onClick={() => history.push('/dashboard')}>Dashboard</li>
        <li onClick={() => history.push('/about')}>About</li>
      </ul>
    </div>
  );
};

export default SideNavBar;
