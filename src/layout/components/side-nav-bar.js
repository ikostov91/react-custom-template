import React, { useState} from 'react';
import history from '../../history';
import Translate from '../../components/translate';
import SiteLogo from '../../components/side-nav-bar/site-logo';
import routes from '../../routing/routes';
import Collapse from 'react-bootstrap/Collapse';

const SideNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(null);

  const onMenuItemClicked = (item, index) => {
    if (item.children) {
      onMenuOpened(index)
    } else {
      history.push(item.path);
      onMenuOpened(null);
    }
  };

  const onMenuOpened = (index) => {
    if (menuOpen === null) {
      setMenuOpen(index);
    } else if (menuOpen !== index) {
      setMenuOpen(index);
    } else {
      setMenuOpen(null);
    }
  };

  return (
    <div className='side-nav-bar'>
      <SiteLogo />
      <ul className='nav-menu'>
        {routes.map((route, index) => (
          <>
            <li
              className={index === menuOpen ? 'item-opened' : ''}
              onClick={() => onMenuItemClicked(route, index)}
            >
              {route.icon && (
                <span className='nav-icon'>
                  <route.icon />
                </span>
              )}
              <span className='nav-label'>
                <Translate id={route.name} />
              </span>
            </li>
            {route.children && (
              <Collapse in={index === menuOpen}>
                <ul>
                  {route.children.map((childRoute) => (
                    <li className='nested' onClick={() => history.push(childRoute.path)}>
                      {childRoute.icon && (
                        <span className='nav-icon'>
                          <childRoute.icon />
                        </span>
                      )}
                      <span className='nav-label'>
                        <Translate id={childRoute.name} />
                      </span>
                    </li>
                  ))}
                </ul>
              </Collapse>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
