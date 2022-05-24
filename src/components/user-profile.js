import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const UserProfile = () => {
  const userName = "Ivaylo Kostov";
  const email = "i.kostov91@gmail.com";

  return (
    <>
      <Dropdown className='profile-button' menuVariant="dark">
        <Dropdown.Toggle id="dropdown-basic">
          {userName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className='user-details'>
            {email}
          </div>
          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default UserProfile;
