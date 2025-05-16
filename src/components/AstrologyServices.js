import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useLanguage } from '../context/LanguageContext';

const servicesData = [
  {
    id: 'panchang',
    title: 'पंचांग',
    icon: CalendarMonthIcon,
    color: '#FFD700',
    items: [
      { label: 'दिनांक', value: 'Friday, 16 May 2025' },
      { label: 'तिथि', value: 'कृष्ण चतुर्थी' },
      { label: 'वार', value: 'शुक्रवार' },
      { label: 'पक्ष', value: 'कृष्ण पक्ष' },
      { label: 'सूर्योदय', value: '5:30:4' }
    ],
    buttonText: 'आगे देखें'
  },
  {
    id: 'festivals',
    title: 'पर्व व त्योहार',
    icon: CelebrationIcon,
    color: '#FFA500',
    items: [
      'अक्षय तृतीया 2025',
      'बुद्ध पूर्णिमा 2025',
      'शनि जयंती 2025',
      'गुरु पूर्णिमा 2025',
      'हरियाली तीज 2025',
      'नाग पंचमी 2025'
    ]
  },
  {
    id: 'spirituality',
    title: 'आध्यात्मिकता',
    icon: SelfImprovementIcon,
    color: '#9370DB',
    items: [
      'योग',
      'ध्यान',
      'राशि रत्न',
      'रुद्राक्ष',
      'मंत्र',
      'चालीसा'
    ]
  },
  {
    id: 'love-marriage',
    title: 'प्रेम/विवाह समस्या',
    icon: FavoriteIcon,
    color: '#FF69B4',
    items: [
      'कुंडली में प्रेम योग',
      'कुंडली में विवाह योग',
      'जानिये, दाम्पत्य जीवन में कटुता और मधुरता के योग',
      'प्यार की पौधे बढ़ानी है तो याद रखें फेंग शुई के ये सब टिप्स',
      'कुंडली में संतान योग',
      'मंगल ग्रह एवम् विवाह'
    ]
  },
  {
    id: 'health',
    title: 'स्वास्थ्य समस्या',
    icon: HealthAndSafetyIcon,
    color: '#4CAF50',
    items: [
      'आपके किचन में मौजूद हैं, आयुर्वैदिक दवायें',
      'स्वस्थ रहने के 5 सरल वास्तु उपाय',
      'सभी प्रकार की पीड़ाओं को खत्म कर सकता है बारह मुखी रुद्राक्ष',
      'नवरात्रों में डायबिटीज के रोगियों के लिए आवश्यक बातें'
    ]
  },
  {
    id: 'financial',
    title: 'आर्थिक समस्या',
    icon: AccountBalanceWalletIcon,
    color: '#FFD700',
    items: [
      'जानिये, राशि के अनुसार धन प्राप्ति के मंत्र',
      'कुंडली के वह योग, जो व्यक्ति को बनाते है धनवान !',
      'हनुमान यंत्र से प्राप्त होता है धन और यश',
      'इन 5 वास्तु उपायों की मदद से प्राप्त हो सकता है धन',
      'कुंडली का यह योग व्यक्ति को बना देता है राजा'
    ]
  }
];

const MotionCard = motion(Card);

const AstrologyServices = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{
          mb: 6,
          fontWeight: 600,
          color: theme.palette.mode === 'dark' ? '#FFD700' : '#FF8C00',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
        }}
      >
        अन्य ज्योतिषीय जानकारी
      </Typography>

      <Grid container spacing={3}>
        {servicesData.map((service) => {
          const IconComponent = service.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <MotionCard
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                sx={{
                  height: '100%',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 140, 0, 0.1))'
                    : 'linear-gradient(45deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.05))',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconComponent
                      sx={{
                        fontSize: 40,
                        color: service.color,
                        mr: 2
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.mode === 'dark' ? service.color : 'inherit'
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  {service.id === 'panchang' ? (
                    <List dense>
                      {service.items.map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                <strong>{item.label}:</strong> {item.value}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                      <Button
                        variant="text"
                        color="primary"
                        sx={{ mt: 1 }}
                      >
                        {service.buttonText}
                      </Button>
                    </List>
                  ) : (
                    <List dense>
                      {service.items.map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemText
                            primary={
                              <Typography
                                variant="body2"
                                sx={{
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                }}
                              >
                                {item}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </CardContent>
              </MotionCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AstrologyServices; 