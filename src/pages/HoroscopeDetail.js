import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Container,
  Typography,
  Paper,
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
  IconButton,
  useTheme,
  Chip,
  Grid,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { useLanguage } from '../context/LanguageContext';

const zodiacInfo = {
  aries: {
    symbol: '♈',
    element: 'Fire',
    ruling_planet: 'Mars',
    lucky_numbers: [1, 9, 17],
    lucky_colors: ['Red', 'Orange'],
    lucky_day: 'Tuesday',
  },
  taurus: {
    symbol: '♉',
    element: 'Earth',
    ruling_planet: 'Venus',
    lucky_numbers: [2, 6, 15],
    lucky_colors: ['Green', 'Pink'],
    lucky_day: 'Friday',
  },
  gemini: {
    symbol: '♊',
    element: 'Air',
    ruling_planet: 'Mercury',
    lucky_numbers: [3, 12, 21],
    lucky_colors: ['Yellow', 'Blue'],
    lucky_day: 'Wednesday',
  },
  cancer: {
    symbol: '♋',
    element: 'Water',
    ruling_planet: 'Moon',
    lucky_numbers: [4, 13, 22],
    lucky_colors: ['White', 'Silver'],
    lucky_day: 'Monday',
  },
  leo: {
    symbol: '♌',
    element: 'Fire',
    ruling_planet: 'Sun',
    lucky_numbers: [5, 14, 23],
    lucky_colors: ['Gold', 'Orange'],
    lucky_day: 'Sunday',
  },
  virgo: {
    symbol: '♍',
    element: 'Earth',
    ruling_planet: 'Mercury',
    lucky_numbers: [6, 15, 24],
    lucky_colors: ['Navy', 'Grey'],
    lucky_day: 'Wednesday',
  },
  libra: {
    symbol: '♎',
    element: 'Air',
    ruling_planet: 'Venus',
    lucky_numbers: [7, 16, 25],
    lucky_colors: ['Pink', 'Blue'],
    lucky_day: 'Friday',
  },
  scorpio: {
    symbol: '♏',
    element: 'Water',
    ruling_planet: 'Mars/Pluto',
    lucky_numbers: [8, 17, 26],
    lucky_colors: ['Red', 'Black'],
    lucky_day: 'Tuesday',
  },
  sagittarius: {
    symbol: '♐',
    element: 'Fire',
    ruling_planet: 'Jupiter',
    lucky_numbers: [9, 18, 27],
    lucky_colors: ['Purple', 'Blue'],
    lucky_day: 'Thursday',
  },
  capricorn: {
    symbol: '♑',
    element: 'Earth',
    ruling_planet: 'Saturn',
    lucky_numbers: [10, 19, 28],
    lucky_colors: ['Brown', 'Black'],
    lucky_day: 'Saturday',
  },
  aquarius: {
    symbol: '♒',
    element: 'Air',
    ruling_planet: 'Uranus/Saturn',
    lucky_numbers: [11, 20, 29],
    lucky_colors: ['Electric Blue', 'Turquoise'],
    lucky_day: 'Saturday',
  },
  pisces: {
    symbol: '♓',
    element: 'Water',
    ruling_planet: 'Neptune/Jupiter',
    lucky_numbers: [12, 21, 30],
    lucky_colors: ['Sea Green', 'Lavender'],
    lucky_day: 'Thursday',
  },
};

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`horoscope-tabpanel-${index}`}
    aria-labelledby={`horoscope-tab-${index}`}
    {...other}
  >
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const HoroscopeDetail = () => {
  const { sign } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const { currentLanguage } = useLanguage();
  const [tabValue, setTabValue] = useState(0);
  const [horoscopeData, setHoroscopeData] = useState({
    love: "Today's celestial alignment brings positive energy to your relationships. Focus on open communication and expressing your feelings.",
    career: "Professional opportunities are highlighted. Your innovative ideas will be well-received by colleagues and superiors.",
    health: "Pay attention to your physical well-being. A balanced diet and regular exercise will boost your energy levels.",
    general: "The stars are aligned in your favor today. Trust your intuition and take calculated risks. Your natural leadership abilities will shine through.",
  });

  const signInfo = zodiacInfo[sign?.toLowerCase()] || {};

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>{t(`zodiac.${sign}`)} {t('horoscope.title')} - {t('app.title')}</title>
        <meta 
          name="description" 
          content={t('meta.horoscope.description')} 
        />
      </Helmet>
      <Container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        maxWidth="lg"
        sx={{ py: 4 }}
      >
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={() => navigate('/horoscope')}
            sx={{ mr: 2 }}
            aria-label={t('common.back')}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #F1C40F 30%, #F4D03F 90%)'
                : 'linear-gradient(45deg, #2874A6 30%, #3498DB 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {signInfo.symbol} {t(`zodiac.${sign}`)}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              component={motion.div}
              variants={cardVariants}
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, rgba(41, 128, 185, 0.1), rgba(52, 152, 219, 0.1))'
                  : 'linear-gradient(45deg, rgba(241, 196, 15, 0.1), rgba(244, 208, 63, 0.1))',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>Zodiac Information</Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography><strong>Element:</strong> {signInfo.element}</Typography>
                  <Typography><strong>Ruling Planet:</strong> {signInfo.ruling_planet}</Typography>
                  <Typography><strong>Lucky Day:</strong> {signInfo.lucky_day}</Typography>
                  <Typography><strong>Lucky Numbers:</strong> {signInfo.lucky_numbers?.join(', ')}</Typography>
                  <Typography><strong>Lucky Colors:</strong> {signInfo.lucky_colors?.join(', ')}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper
              component={motion.div}
              variants={cardVariants}
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, rgba(41, 128, 185, 0.1), rgba(52, 152, 219, 0.1))'
                  : 'linear-gradient(45deg, rgba(241, 196, 15, 0.1), rgba(244, 208, 63, 0.1))',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    minHeight: 64,
                  },
                }}
              >
                <Tab icon={<StarIcon />} label="General" />
                <Tab icon={<FavoriteIcon />} label="Love" />
                <Tab icon={<WorkIcon />} label="Career" />
                <Tab icon={<HealthAndSafetyIcon />} label="Health" />
              </Tabs>

              <TabPanel value={tabValue} index={0}>
                <Typography variant="body1">{horoscopeData.general}</Typography>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Typography variant="body1">{horoscopeData.love}</Typography>
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <Typography variant="body1">{horoscopeData.career}</Typography>
              </TabPanel>
              <TabPanel value={tabValue} index={3}>
                <Typography variant="body1">{horoscopeData.health}</Typography>
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HoroscopeDetail; 