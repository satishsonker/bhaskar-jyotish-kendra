import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Badge,
  Box,
  Avatar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Translate as TranslateIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useThemeMode } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Header = ({ onMenuClick }) => {
  const { darkMode, toggleTheme } = useThemeMode();
  const { currentLang, changeLanguage, supportedLanguages, currentLangName } = useLanguage();
  const [langMenuAnchor, setLangMenuAnchor] = useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [notifMenuAnchor, setNotifMenuAnchor] = useState(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Mock notifications
  const notifications = [
    { id: 1, text: 'New horoscope available', unread: true },
    { id: 2, text: 'Your daily prediction is ready', unread: true },
    { id: 3, text: 'Upcoming auspicious dates', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleLanguageMenu = (event) => setLangMenuAnchor(event.currentTarget);
  const handleUserMenu = (event) => setUserMenuAnchor(event.currentTarget);
  const handleNotifMenu = (event) => setNotifMenuAnchor(event.currentTarget);
  
  const handleCloseMenus = () => {
    setLangMenuAnchor(null);
    setUserMenuAnchor(null);
    setNotifMenuAnchor(null);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    handleCloseMenus();
  };

  return (
    <AppBar 
      position="sticky" 
      component={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box 
          component="img"
          src="/logo.svg"
          alt="BJK Logo"
          sx={{ 
            width: 40, 
            height: 40, 
            mr: 1,
            filter: darkMode ? 'brightness(1.2)' : 'none',
          }}
        />

        <Typography
          variant="h6"
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{ 
            flexGrow: 1,
            fontWeight: 600,
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Bhaskar Jyotish Kendra
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
            <IconButton 
              color="inherit" 
              onClick={toggleTheme}
              component={motion.button}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? <LightIcon /> : <DarkIcon />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Change language">
            <IconButton 
              color="inherit"
              onClick={handleLanguageMenu}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
            >
              <TranslateIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton 
              color="inherit"
              onClick={handleNotifMenu}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
            >
              <Badge badgeContent={unreadCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleUserMenu}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
                <PersonIcon />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        {/* Language Menu */}
        <Menu
          anchorEl={langMenuAnchor}
          open={Boolean(langMenuAnchor)}
          onClose={handleCloseMenus}
          PaperProps={{
            elevation: 3,
            sx: { mt: 1.5 }
          }}
        >
          {Object.entries(supportedLanguages).map(([code, { name, nativeName }]) => (
            <MenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              selected={code === currentLang}
            >
              <Typography variant="body2">
                {nativeName} ({name})
              </Typography>
            </MenuItem>
          ))}
        </Menu>

        {/* Notifications Menu */}
        <Menu
          anchorEl={notifMenuAnchor}
          open={Boolean(notifMenuAnchor)}
          onClose={handleCloseMenus}
          PaperProps={{
            elevation: 3,
            sx: { mt: 1.5, minWidth: 280 }
          }}
        >
          {notifications.map((notif) => (
            <MenuItem 
              key={notif.id}
              onClick={handleCloseMenus}
              sx={{ 
                bgcolor: notif.unread ? 'action.hover' : 'inherit',
                '&:hover': { bgcolor: 'action.selected' }
              }}
            >
              <Typography variant="body2">{notif.text}</Typography>
            </MenuItem>
          ))}
        </Menu>

        {/* User Menu */}
        <Menu
          anchorEl={userMenuAnchor}
          open={Boolean(userMenuAnchor)}
          onClose={handleCloseMenus}
          PaperProps={{
            elevation: 3,
            sx: { mt: 1.5 }
          }}
        >
          <MenuItem onClick={handleCloseMenus}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenus}>My Account</MenuItem>
          <MenuItem onClick={handleCloseMenus}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 