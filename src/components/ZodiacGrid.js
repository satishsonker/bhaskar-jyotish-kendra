import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Grid, 
  Box, 
  Typography, 
  useTheme, 
  useMediaQuery,
  Container,
  Card,
  CardContent
} from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import ErrorBoundary from './ErrorBoundary';

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

const ZodiacCard = ({ sign, onClick }) => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Card
      component={motion.div}
      whileHover={{ 
        scale: 1.05,
        boxShadow: theme.shadows[8],
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{
        height: '100%',
        cursor: 'pointer',
        background: theme.palette.mode === 'dark' 
          ? `linear-gradient(45deg, ${theme.palette.background.paper}, ${theme.palette.grey[900]})`
          : `linear-gradient(45deg, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      onClick={onClick}
    >
      <CardContent sx={{ p: 2, textAlign: 'center' }}>
        <Box
          sx={{
            width: { xs: 60, sm: 80, md: 100 },
            height: { xs: 60, sm: 80, md: 100 },
            mx: 'auto',
            mb: 2,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
              borderRadius: '50%',
              zIndex: 0
            }
          }}
        >
          <Box
            component={motion.img}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            src={sign.icon}
            alt={t(`zodiac.${sign.name}`)}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1
            }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {t(`zodiac.${sign.name}`)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.75rem', md: '0.875rem' }
          }}
        >
          {sign.dateRange}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ZodiacGrid = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleZodiacClick = (sign) => {
    navigate(`/horoscope/${sign.name}?dateRange=${encodeURIComponent(sign.dateRange)}&frequency=daily`);
  };

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{t('zodiac.title')} - Bhaskar Jyotish Kendra</title>
        <meta 
          name="description" 
          content="Explore your zodiac sign's daily horoscope, characteristics, and compatibility with our detailed astrological insights."
        />
      </Helmet>

      <Box 
        component="section"
        sx={{ 
          py: { xs: 4, md: 6 },
          bgcolor: 'background.default',
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
          <Grid 
            container 
            spacing={2}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {zodiacSigns.map((sign) => (
              <Grid 
                item 
                xs={6} 
                sm={4} 
                md={3}
                key={sign.name}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ZodiacCard
                  sign={sign}
                  onClick={() => handleZodiacClick(sign)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ErrorBoundary>
  );
};

export default ZodiacGrid; 