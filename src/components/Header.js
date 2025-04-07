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
import { motion } from 'framer-motion';
import { useThemeMode } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Header = ({ onMenuClick }) => {
  const { darkMode, toggleTheme } = useThemeMode();
  const { currentLang, changeLanguage, supportedLanguages, t } = useLanguage();
  const [langMenuAnchor, setLangMenuAnchor] = useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [notifMenuAnchor, setNotifMenuAnchor] = useState(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Mock notifications
  const notifications = [
    { id: 1, text: t('notifications.newHoroscope'), unread: true },
    { id: 2, text: t('notifications.dailyPrediction'), unread: true },
    { id: 3, text: t('notifications.auspiciousDates'), unread: false },
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
      elevation={darkMode ? 2 : 1}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label={t('common.menu')}
            onClick={onMenuClick}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box 
          component="img"
          src="/logo.svg"
          alt={t('common.appName')}
          sx={{ 
            width: { xs: 32, sm: 40 },
            height: { xs: 32, sm: 40 },
            mr: 1,
            filter: darkMode ? 'brightness(1.2)' : 'none',
            transition: theme.transitions.create(['filter']),
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
            fontSize: { xs: '1rem', sm: '1.25rem' },
          }}
        >
          {t('common.appName')}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
          <Tooltip title={darkMode ? t('common.lightMode') : t('common.darkMode')}>
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

          <Tooltip title={t('common.changeLanguage')}>
            <IconButton 
              color="inherit"
              onClick={handleLanguageMenu}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
            >
              <TranslateIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={t('common.notifications')}>
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

          <Tooltip title={t('common.accountSettings')}>
            <IconButton
              onClick={handleUserMenu}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
            >
              <Avatar 
                sx={{ 
                  width: { xs: 28, sm: 32 }, 
                  height: { xs: 28, sm: 32 }, 
                  bgcolor: 'secondary.main',
                }}
              >
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
            sx: { 
              mt: 1.5,
              bgcolor: 'background.paper',
              borderRadius: 2,
              minWidth: 180,
            }
          }}
        >
          {Object.entries(supportedLanguages).map(([code, { name, nativeName }]) => (
            <MenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              selected={code === currentLang}
              sx={{
                py: 1,
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                },
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
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
            sx: { 
              mt: 1.5, 
              minWidth: 280,
              bgcolor: 'background.paper',
              borderRadius: 2,
            }
          }}
        >
          {notifications.map((notif) => (
            <MenuItem 
              key={notif.id}
              onClick={handleCloseMenus}
              sx={{ 
                py: 1.5,
                px: 2,
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
            sx: { 
              mt: 1.5,
              bgcolor: 'background.paper',
              borderRadius: 2,
              minWidth: 180,
            }
          }}
        >
          <MenuItem onClick={handleCloseMenus}>
            {t('common.profile')}
          </MenuItem>
          <MenuItem onClick={handleCloseMenus}>
            {t('common.myAccount')}
          </MenuItem>
          <MenuItem onClick={handleCloseMenus}>
            {t('common.logout')}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 