import React from 'react';
import history from '../../history';
import Translate from '../../components/translate';

const SideNavBar = () => {
  return (
    <div className='side-nav-bar'>
      <ul>
        <li onClick={() => history.push('/dashboard')}><Translate id="navigation.menu.dashboard.label" /></li>
        <li onClick={() => history.push('/about')}><Translate id="navigation.menu.about.label" /></li>
      </ul>
    </div>
  );
};

export default SideNavBar;
