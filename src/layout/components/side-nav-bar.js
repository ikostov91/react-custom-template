import React, { useState} from 'react';
import history from '../../history';
import Translate from '../../components/translate';
import SiteLogo from '../../components/side-nav-bar/site-logo';
import routes from '../../routing/menu-routes';
import Collapse from 'react-bootstrap/Collapse';
import { AiOutlineArrowRight } from 'react-icons/ai';
import classNames from 'classnames';

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
    if (menuOpen === null || menuOpen !== index) {
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
              id={route.id}
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
              {route.children && (
                <span className={classNames(index === menuOpen ? 'opened' : '', 'item-children-arrow')}>
                  <AiOutlineArrowRight />
                </span>
              )}
            </li>
            {route.children && (
              <Collapse in={index === menuOpen}>
                <ul>
                  {route.children.map((childRoute) => (
                    <li id={childRoute.id} className='nested' onClick={() => history.push(childRoute.path)}>
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
