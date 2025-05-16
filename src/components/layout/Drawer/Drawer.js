import React from 'react';
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Box
} from '@mui/material';
import { useNavigation } from '../Navigation/NavigationItems';

const drawerWidth = 240;

const Drawer = ({ open, onClose }) => {
  const theme = useTheme();
  const { items, currentPath, navigate } = useNavigation();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  const drawerContent = (
    <Box sx={{ mt: 8 }}>
      <List>
        {items.map((item) => (
          <ListItem
            button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            selected={currentPath === item.path}
            sx={{
              my: 0.5,
              mx: 1,
              borderRadius: 1,
              '&.Mui-selected': {
                backgroundColor: theme.palette.primary.main + '20',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main + '30',
                },
              },
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
              transition: 'all 0.3s ease'
            }}
          >
            <ListItemIcon
              sx={{
                color: currentPath === item.path 
                  ? theme.palette.primary.main 
                  : theme.palette.text.primary
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label}
              sx={{
                color: currentPath === item.path 
                  ? theme.palette.primary.main 
                  : theme.palette.text.primary
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <MuiDrawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          backgroundColor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      {drawerContent}
    </MuiDrawer>
  );
};

export default Drawer; 