import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import ZodiacIcon from './ZodiacIcon';
import { zodiacSigns } from '../config/zodiacSigns';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const ZodiacGrid = ({ activeSign = null }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      sx={{
        display: 'grid',
        gridTemplateColumns: isMobile 
          ? 'repeat(3, 1fr)' 
          : isTablet
          ? 'repeat(4, 1fr)'
          : 'repeat(12, 1fr)',
        gap: { 
          xs: 1,    // Compact gap for mobile
          sm: 1.5,  // Slightly larger for tablet
          md: 2     // Comfortable gap for desktop single row
        },
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        mx: 'auto',
        my: { xs: 2, sm: 3, md: 4 }
      }}
    >
      {zodiacSigns.map((sign) => (
        <Box
          key={sign.id}
          component={motion.div}
          variants={item}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ZodiacIcon 
            sign={sign} 
            isActive={activeSign === sign.id}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ZodiacGrid; 