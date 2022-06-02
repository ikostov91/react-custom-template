import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { logoutUser } from '../helpers/auth-utils';
import history from '../history';
import Translate from './translate';

const UserProfile = () => {
  const userName = "Ivaylo Kostov";
  const userEmail = "i.kostov91@gmail.com";
  const userRole = "User";

  const logout = () => {
    logoutUser();
    history.push('/login');
  };

  return (
    <>
      <Dropdown className='profile-button'>
        <Dropdown.Toggle variant='custom' id="dropdown-basic">
          {userName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className='user-details'>
            <div>
              <Translate id="user.profile.dropdown.name.label" stringValues={{ name: userName }} />
            </div>
            <div>
              <Translate id="user.profile.dropdown.email.label" stringValues={{ email: userEmail }} />
            </div>
            <div>
              <Translate id="user.profile.dropdown.role.label" stringValues={{ role: userRole }} />
            </div>
          </div>
          <Dropdown.Item onClick={() => history.push('/user-settings')}>
            <div>
              <Translate id="user.profile.dropdown.settings.label" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => logout()}>
            <div>
              <Translate id="user.profile.dropdown.logout.label" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default UserProfile;
