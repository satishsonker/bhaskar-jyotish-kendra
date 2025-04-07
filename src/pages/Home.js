import React from 'react';
import { 
  Container, 
  Typography, 
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import ZodiacGrid from '../components/ZodiacGrid';

const Home = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('common.appName')} - {t('common.home')}</title>
        <meta name="description" content={t('common.appName') + ' - ' + t('horoscope.daily')} />
      </Helmet>
      
      <Container maxWidth="xl">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            py: { xs: 4, md: 6 },
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.8) 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%)'
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 3, md: 4 },
            }}
          >
            {t('common.appName')}
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: { xs: 4, md: 6 } }}
          >
            {t('horoscope.daily')}
          </Typography>

          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: { xs: 2, md: 3 },
            }}
          >
            {t('horoscope.zodiacSigns')}
          </Typography>

          <ZodiacGrid />

          {/* Add more sections here as needed */}
        </Box>
      </Container>
    </>
  );
};

export default Home; 