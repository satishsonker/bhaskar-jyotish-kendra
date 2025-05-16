import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  useTheme,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useThemeMode } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Settings = () => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeMode();
  const { currentLanguage, changeLanguage, translations, supportedLanguages } = useLanguage();

  // Mock notification settings - replace with actual state management later
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const handleNotificationChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
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
        {translations.user.settings}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DarkModeIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary={translations.theme.dark}
                    secondary="Enable dark mode for better visibility at night"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={isDarkMode}
                      onChange={toggleTheme}
                    />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <TranslateIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary={translations.language.select}
                    secondary="Choose your preferred language"
                  />
                  <ListItemSecondaryAction>
                    <FormControl size="small">
                      <Select
                        value={currentLanguage}
                        onChange={(e) => changeLanguage(e.target.value)}
                        sx={{ minWidth: 120 }}
                      >
                        {Object.entries(supportedLanguages).map(([code, name]) => (
                          <MenuItem key={code} value={code}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Notifications"
                    secondary="Receive updates and alerts"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notificationsEnabled}
                      onChange={handleNotificationChange}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              bgcolor: theme.palette.primary.main + '10'
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                About
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Version 1.0.0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                © 2024 Bhaskar Jyotish Kendra. All rights reserved.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings; 