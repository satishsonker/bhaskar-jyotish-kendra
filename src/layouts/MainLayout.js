import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Home as HomeIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useThemeMode } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const { darkMode } = useThemeMode();
  const { t } = useLanguage();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: t('common.home'), icon: <HomeIcon />, path: '/' },
    { text: t('common.horoscope'), icon: <CalendarIcon />, path: '/horoscope' },
    { text: t('common.profile'), icon: <PersonIcon />, path: '/profile' },
    { text: t('common.settings'), icon: <SettingsIcon />, path: '/settings' },
  ];

  const drawer = (
    <Box 
      sx={{ 
        width: 250,
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text}
            component={motion.div}
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      bgcolor: 'background.default',
      color: 'text.primary',
    }}>
      <Header onMenuClick={handleDrawerToggle} />

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            bgcolor: 'background.default',
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
        sx={{
          width: isMobile ? 0 : 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          bgcolor: 'background.default',
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.standard,
          }),
          ml: isMobile ? 0 : '250px',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          bgcolor: 'background.paper',
          color: 'text.secondary',
          ml: isMobile ? 0 : '250px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t('common.footer.copyright', { year: new Date().getFullYear() })}
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 