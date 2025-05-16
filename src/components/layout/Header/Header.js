import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Box,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeMode } from '../../../context/ThemeContext';
import { useLanguage } from '../../../context/LanguageContext';
import HeaderMenu from '../Menu/HeaderMenu';
import Logo from '../../common/Logo';
import { useNavigation } from '../Navigation/NavigationItems';

const Header = ({ toggleDrawer }) => {
  const { toggleTheme } = useThemeMode();
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { items, currentPath, navigate } = useNavigation();

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
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

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
              {t('app.title')}
            </Typography>
          )}
        </Box>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1, mx: 4 }}>
            {items.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  color: currentPath === item.path 
                    ? theme.palette.primary.main 
                    : theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  fontWeight: currentPath === item.path ? 600 : 400,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
                startIcon={item.icon}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header; 