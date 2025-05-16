import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import ZodiacGrid from '../components/ZodiacGrid';

const Home = () => {
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
            borderRadius: { xs: 0, md: 2 },
            mb: 6,
            textAlign: 'center'
          }}
        >
          <Container maxWidth="md">
            <Typography
              component={motion.h1}
              variant="h2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              gutterBottom
            >
              Welcome to Bhaskar Jyotish Kendra
            </Typography>
            <Typography
              variant="h5"
              component={motion.p}
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              sx={{ mb: 4 }}
            >
              Your Trusted Destination for Vedic Astrology
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </Button>
          </Container>
        </Box>

        {/* Services Section */}
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {[
              'Birth Chart Analysis',
              'Marriage Compatibility',
              'Career Guidance',
              'Spiritual Counseling'
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={service}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  sx={{ height: '100%' }}
                >
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {service}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Detailed analysis and guidance based on ancient Vedic principles.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <ZodiacGrid />
    </>
  );
};

export default Home; 