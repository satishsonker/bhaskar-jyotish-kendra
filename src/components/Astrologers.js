import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Button,
  Stack,
  Rating,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import { useLanguage } from '../context/LanguageContext';

const astrologers = [
  {
    id: 1,
    name: 'देसी ख्याति',
    avatar: '/assets/astrologers/astrologer1.jpg',
    rating: 4.97,
    languages: ['हिंदी'],
    expertise: ['टैरो कार्ड रीडिंग', 'अंक ज्योतिष'],
    experience: '1 साल',
    price: '31/Min',
    consultations: '5335',
    status: 'online',
  },
  {
    id: 2,
    name: 'आचार्य ब्रह्मानंद',
    avatar: '/assets/astrologers/astrologer2.jpg',
    rating: 4.94,
    languages: ['हिंदी'],
    expertise: ['वैदिक ज्योतिष', 'प्रश्न', 'हस्तरेखा'],
    experience: '15 साल',
    price: '47/Min',
    consultations: '7003',
    status: 'online',
  },
  {
    id: 3,
    name: 'एस्ट्रो कुंजल',
    avatar: '/assets/astrologers/astrologer3.jpg',
    rating: 4.89,
    languages: ['गुजराती', 'हिंदी', 'मराठी'],
    expertise: ['वैदिक ज्योतिष', 'फेस रीडिंग'],
    experience: '4 साल',
    price: '25/Min',
    consultations: '677',
    status: 'online',
  },
  {
    id: 4,
    name: 'एस्ट्रो सिद्धि',
    avatar: '/assets/astrologers/astrologer4.jpg',
    rating: 4.94,
    languages: ['इंग्लिश', 'हिंदी'],
    expertise: ['टैरो कार्ड रीडिंग', 'हस्तरेखा'],
    experience: '6 साल',
    price: '39/Min',
    consultations: '517',
    status: 'offline',
  },
];

const MotionCard = motion(Card);

const Astrologers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          mb: 4,
          fontWeight: 600,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(45deg, #F1C40F 30%, #F4D03F 90%)'
            : 'linear-gradient(45deg, #2874A6 30%, #3498DB 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('home.ourAstrologers')}
      </Typography>

      <Grid container spacing={3}>
        {astrologers.map((astrologer) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={astrologer.id}>
            <MotionCard
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              initial="hidden"
              animate="visible"
              sx={{
                height: '100%',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, rgba(41, 128, 185, 0.1), rgba(52, 152, 219, 0.1))'
                  : 'linear-gradient(45deg, rgba(241, 196, 15, 0.1), rgba(244, 208, 63, 0.1))',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar
                    src={astrologer.avatar}
                    alt={astrologer.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {astrologer.name}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating
                        value={astrologer.rating}
                        precision={0.1}
                        size="small"
                        readOnly
                      />
                      <Typography variant="body2" color="text.secondary">
                        {astrologer.rating}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                <Stack spacing={1} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {astrologer.languages.map((lang) => (
                      <Chip
                        key={lang}
                        label={lang}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {astrologer.expertise.join(', ')}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {astrologer.experience}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{astrologer.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {astrologer.consultations}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} justifyContent="center">
                  <Button
                    variant="outlined"
                    startIcon={<ChatIcon />}
                    disabled={astrologer.status === 'offline'}
                    sx={{ flex: 1 }}
                  >
                    Chat
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CallIcon />}
                    disabled={astrologer.status === 'offline'}
                    sx={{ flex: 1 }}
                  >
                    Call
                  </Button>
                </Stack>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Astrologers; 