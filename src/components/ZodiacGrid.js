import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Grid, 
  Box, 
  Typography, 
  useTheme, 
  useMediaQuery 
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const zodiacSigns = [
  {
    name: 'aries',
    dateRange: 'Mar 21 - Apr 19',
    icon: '/images/zodiac/aries.png'
  },
  {
    name: 'taurus',
    dateRange: 'Apr 20 - May 20',
    icon: '/images/zodiac/taurus.png'
  },
  {
    name: 'gemini',
    dateRange: 'May 21 - Jun 20',
    icon: '/images/zodiac/gemini.png'
  },
  {
    name: 'cancer',
    dateRange: 'Jun 21 - Jul 22',
    icon: '/images/zodiac/cancer.png'
  },
  {
    name: 'leo',
    dateRange: 'Jul 23 - Aug 22',
    icon: '/images/zodiac/leo.png'
  },
  {
    name: 'virgo',
    dateRange: 'Aug 23 - Sep 22',
    icon: '/images/zodiac/virgo.png'
  },
  {
    name: 'libra',
    dateRange: 'Sep 23 - Oct 22',
    icon: '/images/zodiac/libra.png'
  },
  {
    name: 'scorpio',
    dateRange: 'Oct 23 - Nov 21',
    icon: '/images/zodiac/scorpio.png'
  },
  {
    name: 'sagittarius',
    dateRange: 'Nov 22 - Dec 21',
    icon: '/images/zodiac/sagittarius.png'
  },
  {
    name: 'capricorn',
    dateRange: 'Dec 22 - Jan 19',
    icon: '/images/zodiac/capricorn.png'
  },
  {
    name: 'aquarius',
    dateRange: 'Jan 20 - Feb 18',
    icon: '/images/zodiac/aquarius.png'
  },
  {
    name: 'pisces',
    dateRange: 'Feb 19 - Mar 20',
    icon: '/images/zodiac/pisces.png'
  }
];

const ZodiacGrid = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();

  const handleZodiacClick = (sign) => {
    navigate(`/horoscope/${sign.name}?dateRange=${encodeURIComponent(sign.dateRange)}&frequency=daily`);
  };

  return (
    <Box 
      sx={{ 
        p: { xs: 2, md: 4 },
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: theme.shadows[1],
      }}
    >
      <Grid 
        container 
        spacing={2}
        sx={{
          maxWidth: '100%',
          margin: '0 auto',
        }}
      >
        {zodiacSigns.map((sign) => (
          <Grid 
            item 
            xs={4} 
            md={1} 
            key={sign.name}
            component={motion.div}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              onClick={() => handleZodiacClick(sign)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                p: 1,
              }}
            >
              <Box
                sx={{
                  width: { xs: 60, md: 80 },
                  height: { xs: 60, md: 80 },
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1,
                  boxShadow: `0 0 10px ${theme.palette.primary.main}20`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: `0 0 15px ${theme.palette.primary.main}40`,
                  }
                }}
              >
                <Box
                  component="img"
                  src={sign.icon}
                  alt={t(`zodiac.${sign.name}`)}
                  sx={{
                    width: '70%',
                    height: '70%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography
                variant="subtitle2"
                align="center"
                sx={{
                  textTransform: 'capitalize',
                  fontWeight: 600,
                  mb: 0.5,
                  fontSize: { xs: '0.8rem', md: '0.9rem' }
                }}
              >
                {t(`zodiac.${sign.name}`)}
              </Typography>
              <Typography
                variant="caption"
                align="center"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
                  display: { xs: 'none', md: 'block' }
                }}
              >
                {sign.dateRange}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ZodiacGrid; 