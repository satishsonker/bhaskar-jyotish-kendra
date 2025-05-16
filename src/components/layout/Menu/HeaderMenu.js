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
  const { currentLanguage, changeLanguage, translations, supportedLanguages } = useLanguage();
  const theme = useTheme();

  const [languageMenu, setLanguageMenu] = useState(null);
  const [notificationsMenu, setNotificationsMenu] = useState(null);
  const [userMenu, setUserMenu] = useState(null);

  // Mock notifications - replace with actual data later
  const notifications = [
    { id: 1, message: translations.notifications.new_horoscope },
    { id: 2, message: translations.notifications.appointment }
  ];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Tooltip title={isDarkMode ? translations.theme.light : translations.theme.dark}>
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>

      <Tooltip title={translations.language.select}>
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
        {Object.entries(supportedLanguages).map(([code, name]) => (
          <MenuItem
            key={code}
            onClick={() => {
              changeLanguage(code);
              setLanguageMenu(null);
            }}
            selected={currentLanguage === code}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>

      <Tooltip title={translations.notifications.title}>
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
          {translations.notifications.mark_all_read}
        </MenuItem>
      </Menu>

      <Tooltip title={translations.user.profile}>
        <IconButton
          onClick={(e) => setUserMenu(e.currentTarget)}
          sx={{ p: 0, ml: 1 }}
        >
          <Avatar
            alt={translations.user.profile}
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
          {translations.user.profile}
        </MenuItem>
        <MenuItem onClick={() => setUserMenu(null)}>
          {translations.user.settings}
        </MenuItem>
        <MenuItem onClick={() => setUserMenu(null)}>
          {translations.user.logout}
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderMenu; 