import React from 'react';
import { Card, CardContent, Typography, IconButton, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const MotionCard = motion(Card);

const ServiceCard = ({ service }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <MotionCard
      whileHover={{ y: -10, boxShadow: theme.shadows[8] }}
      initial={{ opacity: 0, y: 20 }}
      whileTap={{ scale: 0.98 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(service.path)}
      sx={{
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover::before': {
          opacity: 1,
        }
      }}
    >
      <CardContent sx={{ 
        p: 3, 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column'
      }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2
          }}
        >
          <Box
            component={motion.div}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            sx={{
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(0, 0, 0, 0.03)',
              borderRadius: '50%',
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon 
              sx={{ 
                fontSize: 32,
                color: theme.palette.primary.main
              }} 
            />
          </Box>
        </Box>

        <Typography 
          variant="h6" 
          component="h3"
          gutterBottom
          sx={{ 
            fontWeight: 600,
            color: theme.palette.text.primary
          }}
        >
          {service.title}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ mb: 2, flex: 1 }}
        >
          {service.description}
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            mt: 'auto'
          }}
        >
          <IconButton
            size="small"
            sx={{
              color: theme.palette.primary.main,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateX(4px)'
              }
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default ServiceCard; 