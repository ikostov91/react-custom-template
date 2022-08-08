import React from 'react';
import LanguageSelector from '../../components/language-selector';
import UserProfile from '../../components/user-profile';
import ThemeToggler from '../../components/theme-toggler';

const TopNavBar = () => {
  return (
    <div className='top-nav-bar'>
      <ThemeToggler />
      <LanguageSelector />
      <UserProfile />
    </div>
  )
};

export default TopNavBar;
