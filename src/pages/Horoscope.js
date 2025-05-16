import React from 'react';
import { Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';

const Horoscope = () => {
  const theme = useTheme();
  const { translations } = useLanguage();

  // Mock horoscope data - replace with API call later
  const horoscopeData = {
    dailyPrediction: "Today is a favorable day for spiritual activities...",
    luckyNumber: 9,
    luckyColor: "Yellow",
    compatibility: "Libra"
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          color: theme.palette.primary.main,
          textAlign: 'center',
          mb: 4
        }}
      >
        {translations.menu.horoscope}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card 
            elevation={0}
            sx={{ 
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              height: '100%',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[4]
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Daily Prediction
              </Typography>
              <Typography variant="body1" paragraph>
                {horoscopeData.dailyPrediction}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4]
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Lucky Numbers
                  </Typography>
                  <Typography variant="h3" align="center" color="secondary">
                    {horoscopeData.luckyNumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4]
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Compatibility
                  </Typography>
                  <Typography variant="h5" align="center" color="secondary">
                    {horoscopeData.compatibility}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Horoscope; 