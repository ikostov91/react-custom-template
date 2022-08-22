import React from 'react';
import LanguageSelector from '../../components/top-nav-bar/language-selector';
import UserProfile from '../../components/top-nav-bar/user-profile';
import ThemeToggle from '../../components/top-nav-bar/theme-toggle';

const TopNavBar = () => {
  return (
    <div className='top-nav-bar'>
      <ThemeToggle />
      <LanguageSelector />
      <UserProfile />
    </div>
  )
};

export default TopNavBar;
