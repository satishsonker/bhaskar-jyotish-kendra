import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ZodiacIcon = ({ sign, isActive = false }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleClick = () => {
    navigate(`/horoscope/${sign.id}`);
  };

  const getElementColor = () => {
    switch (sign.element) {
      case 'fire':
        return theme.palette.mode === 'dark' ? '#FF6B6B' : '#FF4136';
      case 'earth':
        return theme.palette.mode === 'dark' ? '#68D391' : '#2ECC40';
      case 'air':
        return theme.palette.mode === 'dark' ? '#63B3ED' : '#39CCCC';
      case 'water':
        return theme.palette.mode === 'dark' ? '#4FD1C5' : '#7FDBFF';
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          p: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: 60, sm: 60, md: 60, lg: 60 },
            height: { xs: 60, sm: 60, md: 60, lg: 60 },
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[800]} 100%)`
              : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`,
            border: `2px solid ${isActive ? getElementColor() : theme.palette.divider}`,
            boxShadow: isActive 
              ? `0 0 20px ${getElementColor()}40`
              : theme.shadows[2],
            transition: theme.transitions.create(
              ['background', 'box-shadow', 'border-color'],
              { duration: theme.transitions.duration.short }
            ),
            '&:hover': {
              border: `2px solid ${getElementColor()}`,
              boxShadow: `0 0 20px ${getElementColor()}40`,
            },
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 24 24"
            sx={{
              width: { xs: 35, sm: 35, md: 35, lg: 35 },
              height: { xs: 35, sm: 35, md: 35, lg: 35 },
              fill: isActive ? getElementColor() : theme.palette.text.primary,
              transition: theme.transitions.create('fill'),
              '&:hover': {
                fill: getElementColor(),
              },
            }}
          >
            <path d={sign.icon} />
          </Box>
        </Box>
        <Typography
          variant="subtitle2"
          align="center"
          sx={{
            fontWeight: isActive ? 600 : 500,
            color: isActive ? getElementColor() : theme.palette.text.primary,
            transition: theme.transitions.create('color'),
            fontSize: { xs: '0.75rem', sm: '0.65rem', md: '0.65rem' },
            whiteSpace: { md: 'nowrap' },
          }}
        >
          {t(`zodiac.${sign.id}`)}
        </Typography>
        <Typography
          variant="caption"
          align="center"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.60rem' },
            whiteSpace: { md: 'nowrap' },
          }}
        >
          {sign.dates}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default ZodiacIcon; 