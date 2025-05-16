import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        transition: 'all 0.3s ease'
      }}
    >
      <Header toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout; 