import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { zodiacSigns } from '../config/zodiacSigns';
import ZodiacGrid from '../components/ZodiacGrid';

const tabs = ['today', 'yesterday', 'tomorrow', 'weekly', 'monthly', 'yearly'];

const HoroscopePage = () => {
  const { signId } = useParams();
  const theme = useTheme();
  const { t } = useLanguage();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState('today');

  const sign = zodiacSigns.find(s => s.id === signId) || zodiacSigns[0];
  const date = new Date();

  // Mock horoscope data - replace with API call
  const horoscopeData = {
    prediction: "Dear Aries, as the Moon transits into Cancer, it can cause a stressful situation for you. You might also have arguments with people. You can hope to get better ideas in your professional life today. However, they might not be appreciated by all. Astrology experts suggest maintaining your calm temperament to handle the obstacles in life. Instead of indulging in arguments, try to do something creative that inspires you the most. You can get enough mental peace and find your self-confidence in your creative skills. Try to wear anything in pink to enhance your chances of attracting good luck. Also, try to plan your essential tasks between 2:00 p.m. and 4:00 p.m. as it is the most promising time.",
    luckyColor: "Pink",
    luckyNumber: "7",
    luckyTime: "2:00 PM - 4:00 PM"
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            fontWeight: 600,
            mb: 4,
            color: 'primary.main'
          }}
        >
          {t('horoscope.title')} - {sign.name}
        </Typography>

        <Paper 
          elevation={2}
          sx={{ 
            mb: 4,
            overflow: 'hidden',
            borderRadius: 2
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons="auto"
            sx={{
              bgcolor: 'background.paper',
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab}
                value={tab}
                label={t(`horoscope.${tab}`)}
                sx={{
                  textTransform: 'capitalize',
                  minWidth: isMobile ? 'auto' : 120,
                }}
              />
            ))}
          </Tabs>

          <Box sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              gutterBottom
            >
              {date.toLocaleDateString()} - {sign.dates}
            </Typography>

            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                lineHeight: 1.8,
                textAlign: 'justify'
              }}
            >
              {horoscopeData.prediction}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 2,
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  bgcolor: 'background.default',
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  {t('horoscope.luckyColor')}
                </Typography>
                <Typography variant="h6" color="primary">
                  {horoscopeData.luckyColor}
                </Typography>
              </Paper>

              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  bgcolor: 'background.default',
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  {t('horoscope.luckyNumber')}
                </Typography>
                <Typography variant="h6" color="primary">
                  {horoscopeData.luckyNumber}
                </Typography>
              </Paper>

              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  bgcolor: 'background.default',
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  {t('horoscope.luckyTime')}
                </Typography>
                <Typography variant="h6" color="primary">
                  {horoscopeData.luckyTime}
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Paper>

        <Box sx={{ mt: 6 }}>
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ 
              textAlign: 'center',
              mb: 3
            }}
          >
            {t('horoscope.otherSigns')}
          </Typography>
          <ZodiacGrid activeSign={signId} />
        </Box>
      </Box>
    </Container>
  );
};

export default HoroscopePage; 