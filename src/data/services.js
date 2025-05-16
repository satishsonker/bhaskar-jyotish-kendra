import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export const services = [
  {
    id: 1,
    icon: CalendarTodayIcon,
    title: 'Daily Horoscope',
    description: 'Get detailed daily predictions for your zodiac sign',
    path: '/horoscope/daily'
  },
  {
    id: 2,
    icon: AutoGraphIcon,
    title: 'Birth Chart Analysis',
    description: 'Comprehensive analysis of your birth chart and planetary positions',
    path: '/services/birth-chart'
  },
  {
    id: 3,
    icon: CakeIcon,
    title: 'Marriage Compatibility',
    description: 'Check your compatibility with your potential life partner',
    path: '/services/compatibility'
  },
  {
    id: 4,
    icon: FavoriteIcon,
    title: 'Love Compatibility',
    description: 'Understand your romantic compatibility with your partner',
    path: '/services/love-compatibility'
  },
  {
    id: 5,
    icon: SchoolIcon,
    title: 'Career Guidance',
    description: 'Get astrological insights for your career decisions',
    path: '/services/career'
  },
  {
    id: 6,
    icon: BusinessCenterIcon,
    title: 'Business Astrology',
    description: 'Astrological guidance for business decisions and timing',
    path: '/services/business'
  }
]; 