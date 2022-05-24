import React from 'react';
import LanguageSelector from '../../components/language-selector';
import UserProfile from '../../components/user-profile';

const TopNavBar = () => {
  return (
    <div className='top-nav-bar'>
      <LanguageSelector />
      <UserProfile />
    </div>
  )
};

export default TopNavBar;
