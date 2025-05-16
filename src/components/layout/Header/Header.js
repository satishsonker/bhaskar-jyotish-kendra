import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeMode } from '../../../context/ThemeContext';
import { useLanguage } from '../../../context/LanguageContext';
import HeaderMenu from '../Menu/HeaderMenu';
import Logo from '../../common/Logo';

const Header = ({ toggleDrawer }) => {
  const { toggleTheme } = useThemeMode();
  const { currentLanguage, translations } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar 
      position="fixed" 
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        background: theme.palette.background.paper,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Logo />
          {!isMobile && (
            <Typography 
              variant="h6" 
              sx={{ 
                ml: 2,
                color: theme.palette.text.primary,
                fontWeight: 600
              }}
            >
              {translations.app.title}
            </Typography>
          )}
        </Box>

        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header; 