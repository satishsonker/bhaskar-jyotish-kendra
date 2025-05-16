import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', symbol: '♈' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', symbol: '♉' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', symbol: '♊' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', symbol: '♋' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', symbol: '♌' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', symbol: '♍' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', symbol: '♎' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', symbol: '♏' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', symbol: '♐' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', symbol: '♑' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', symbol: '♒' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', symbol: '♓' },
];

const MotionCard = motion(Card);

const DailyHoroscope = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { currentLanguage } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Daily Horoscope - Bhaskar Jyotish Kendra</title>
        <meta name="description" content="Get your daily horoscope reading for all zodiac signs. Find out what the stars have in store for you today." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 4,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(45deg, #F1C40F 30%, #F4D03F 90%)'
              : 'linear-gradient(45deg, #2874A6 30%, #3498DB 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {currentLanguage === 'en' ? 'Daily Horoscope' : 'दैनिक राशिफल'}
        </Typography>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3}>
            {zodiacSigns.map((sign, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={sign.name}>
                <MotionCard
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    height: '100%',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(45deg, rgba(41, 128, 185, 0.1), rgba(52, 152, 219, 0.1))'
                      : 'linear-gradient(45deg, rgba(241, 196, 15, 0.1), rgba(244, 208, 63, 0.1))',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <CardActionArea
                    onClick={() => navigate(`/horoscope/${sign.name.toLowerCase()}`)}
                    sx={{ height: '100%' }}
                  >
                    <CardContent>
                      <Typography
                        variant="h2"
                        align="center"
                        sx={{
                          fontSize: '3rem',
                          mb: 2,
                          color: theme.palette.mode === 'dark'
                            ? theme.palette.primary.light
                            : theme.palette.primary.main,
                        }}
                      >
                        {sign.symbol}
                      </Typography>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{
                          fontWeight: 'bold',
                          color: theme.palette.text.primary,
                        }}
                      >
                        {sign.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        color="textSecondary"
                        sx={{
                          fontSize: isMobile ? '0.75rem' : '0.875rem',
                        }}
                      >
                        {sign.dates}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DailyHoroscope; 