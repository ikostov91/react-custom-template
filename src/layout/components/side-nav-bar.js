import React from 'react';
import history from '../../history';
import Translate from '../../components/translate';
import SiteLogo from '../../components/site-logo';
import routes from '../../routing/routes';

const SideNavBar = () => {
  return (
    <div className='side-nav-bar'>
      <SiteLogo />
      <ul className='nav-menu'>
        {routes.map(route => (
          <li onClick={() => history.push(route.path)}>
            {route.icon && (
            <span className='nav-icon'>
              <route.icon />
            </span>)}
            <span className='nav-label'>
              <Translate id={route.name} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
