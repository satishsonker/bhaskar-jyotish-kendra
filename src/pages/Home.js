import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import ZodiacGrid from '../components/ZodiacGrid';
import Services from '../components/services/Services';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Bhaskar Jyotish Kendra - Your Trusted Astrology Center</title>
        <meta
          name="description"
          content="Welcome to Bhaskar Jyotish Kendra, your trusted destination for authentic astrology services and spiritual guidance."
        />
      </Helmet>

      <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: { xs: 6, md: 12 },
            borderRadius: { xs: 0, md: '0 0 2rem 2rem' },
            mb: 6,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(45deg, ${theme.palette.primary.dark}80, ${theme.palette.primary.main}80)`,
              zIndex: 1
            }
          }}
        >
          <Container 
            maxWidth="md"
            sx={{ 
              position: 'relative',
              zIndex: 2
            }}
          >
            <Typography
              component={motion.h1}
              variant="h2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              {t('home.welcome')}
            </Typography>
            <Typography
              variant="h5"
              component={motion.p}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              sx={{ 
                mb: 4,
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                opacity: 0.9
              }}
            >
              {t('home.subtitle')}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              sx={{
                borderRadius: '2rem',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                boxShadow: theme.shadows[4]
              }}
            >
              {t('common.getStarted')}
            </Button>
          </Container>
        </Box>

        {/* Services Section */}
        <Services />

        {/* Zodiac Grid Section */}
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              sx={{ textAlign: 'center', mb: 6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {t('zodiac.title')}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ maxWidth: '600px', mx: 'auto', px: 2 }}
              >
                {t('zodiac.description', 'Explore your zodiac sign to discover daily predictions and insights about your life path.')}
              </Typography>
            </Box>
            <ZodiacGrid />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home; 