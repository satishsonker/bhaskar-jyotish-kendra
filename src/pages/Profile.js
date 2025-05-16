import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Box,
  useTheme
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLanguage } from '../context/LanguageContext';

const Profile = () => {
  const theme = useTheme();
  const { translations } = useLanguage();

  // Mock user data - replace with API call later
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    birthChart: {
      ascendant: "Leo",
      moon: "Pisces",
      sun: "Aries"
    }
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
        {translations.user.profile}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              textAlign: 'center',
              py: 3
            }}
          >
            <Avatar
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto',
                backgroundColor: theme.palette.primary.main,
                fontSize: '3rem'
              }}
            >
              {userData.name.charAt(0)}
            </Avatar>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
              {userData.name}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{ mt: 2 }}
            >
              Edit Profile
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              height: '100%'
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Personal Information
              </Typography>
              
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PersonIcon color="action" />
                    <Typography>{userData.name}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon color="action" />
                    <Typography>{userData.email}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhoneIcon color="action" />
                    <Typography>{userData.phone}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOnIcon color="action" />
                    <Typography>{userData.location}</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
                Birth Chart Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.divider}`,
                      textAlign: 'center',
                      p: 2
                    }}
                  >
                    <Typography variant="subtitle2" color="textSecondary">
                      Ascendant
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {userData.birthChart.ascendant}
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.divider}`,
                      textAlign: 'center',
                      p: 2
                    }}
                  >
                    <Typography variant="subtitle2" color="textSecondary">
                      Moon Sign
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {userData.birthChart.moon}
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.divider}`,
                      textAlign: 'center',
                      p: 2
                    }}
                  >
                    <Typography variant="subtitle2" color="textSecondary">
                      Sun Sign
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {userData.birthChart.sun}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 