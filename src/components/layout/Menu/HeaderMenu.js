import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Tooltip,
  Avatar,
  useTheme
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TranslateIcon from '@mui/icons-material/Translate';
import { useThemeMode } from '../../../context/ThemeContext';
import { useLanguage } from '../../../context/LanguageContext';

const HeaderMenu = () => {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const { currentLang, changeLanguage, t, supportedLanguages } = useLanguage();
  const theme = useTheme();

  const [languageMenu, setLanguageMenu] = useState(null);
  const [notificationsMenu, setNotificationsMenu] = useState(null);
  const [userMenu, setUserMenu] = useState(null);

  // Mock notifications - replace with actual data later
  const notifications = [
    { id: 1, message: t('notifications.newHoroscope') },
    { id: 2, message: t('notifications.dailyPrediction') }
  ];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Tooltip title={isDarkMode ? t('theme.light') : t('theme.dark')}>
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>

      <Tooltip title={t('language.select')}>
        <IconButton
          onClick={(e) => setLanguageMenu(e.currentTarget)}
          color="inherit"
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={languageMenu}
        open={Boolean(languageMenu)}
        onClose={() => setLanguageMenu(null)}
      >
        {Object.entries(supportedLanguages).map(([code, lang]) => (
          <MenuItem
            key={code}
            onClick={() => {
              changeLanguage(code);
              setLanguageMenu(null);
            }}
            selected={currentLang === code}
          >
            {lang.nativeName} {lang.icon}
          </MenuItem>
        ))}
      </Menu>

      <Tooltip title={t('notifications.title')}>
        <IconButton
          onClick={(e) => setNotificationsMenu(e.currentTarget)}
          color="inherit"
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={notificationsMenu}
        open={Boolean(notificationsMenu)}
        onClose={() => setNotificationsMenu(null)}
      >
        {notifications.map((notification) => (
          <MenuItem key={notification.id}>
            {notification.message}
          </MenuItem>
        ))}
        <MenuItem onClick={() => setNotificationsMenu(null)}>
          {t('notifications.markAllAsRead')}
        </MenuItem>
      </Menu>

      <Tooltip title={t('user.profile')}>
        <IconButton
          onClick={(e) => setUserMenu(e.currentTarget)}
          sx={{ p: 0, ml: 1 }}
        >
          <Avatar
            alt={t('user.profile')}
            src="/path-to-user-image.jpg"
            sx={{ 
              width: 35, 
              height: 35,
              border: `2px solid ${theme.palette.primary.main}` 
            }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={userMenu}
        open={Boolean(userMenu)}
        onClose={() => setUserMenu(null)}
      >
        <MenuItem onClick={() => setUserMenu(null)}>
          {t('user.profile')}
        </MenuItem>
        <MenuItem onClick={() => setUserMenu(null)}>
          {t('user.settings')}
        </MenuItem>
        <MenuItem onClick={() => setUserMenu(null)}>
          {t('user.logout')}
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderMenu; 