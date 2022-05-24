import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const UserProfile = () => {
  const userName = "Ivaylo Kostov";
  const userEmail = "i.kostov91@gmail.com";
  const userRole = "User";

  return (
    <>
      <Dropdown className='profile-button'>
        <Dropdown.Toggle variant='custom' id="dropdown-basic">
          {userName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className='user-details'>
            <div>Name: {userName}</div>
            <div>Email: {userEmail}</div>
            <div>Role: {userRole}</div>  
          </div>
          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default UserProfile;
