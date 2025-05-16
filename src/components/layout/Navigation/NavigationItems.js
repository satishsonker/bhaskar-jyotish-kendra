import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLanguage } from '../../../context/LanguageContext';

export const getNavigationItems = (t) => [
  { path: '/', icon: <HomeIcon />, label: t('menu.home') },
  { path: '/horoscope', icon: <StarIcon />, label: t('menu.horoscope') },
  { path: '/profile', icon: <PersonIcon />, label: t('menu.profile') },
  { path: '/settings', icon: <SettingsIcon />, label: t('menu.settings') }
];

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  return {
    items: getNavigationItems(t),
    currentPath: location.pathname,
    navigate
  };
}; 