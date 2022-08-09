import React from 'react';
import LanguageSelector from '../../components/language-selector';
import UserProfile from '../../components/user-profile';
import ThemeToggleSwitch from '../../components/theme-toggle-switch';

const TopNavBar = () => {
  return (
    <div className='top-nav-bar'>
      <ThemeToggleSwitch />
      <LanguageSelector />
      <UserProfile />
    </div>
  )
};

export default TopNavBar;
