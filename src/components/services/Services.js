import React from 'react';
import { Container, Grid, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/services';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('services.title')} - Bhaskar Jyotish Kendra</title>
        <meta name="description" content={t('services.description')} />
        <meta name="keywords" content="astrology services, horoscope, birth chart, marriage compatibility, career guidance" />
      </Helmet>

      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: theme.palette.background.default,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            opacity: 0.03,
            backgroundImage: 'url("/images/zodiac-bg-pattern.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: '2rem', md: '2.5rem' },
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {t('services.title')}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto', px: 2 }}
            >
              {t('services.subtitle')}
            </Typography>
          </Box>

          <Grid
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            container
            spacing={3}
          >
            {services.map((service) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={service.id}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services; 