import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const zodiacSigns = [
  { name: 'Aries', date: 'Mar 21 - Apr 19' },
  { name: 'Taurus', date: 'Apr 20 - May 20' },
  { name: 'Gemini', date: 'May 21 - Jun 20' },
  { name: 'Cancer', date: 'Jun 21 - Jul 22' },
  { name: 'Leo', date: 'Jul 23 - Aug 22' },
  { name: 'Virgo', date: 'Aug 23 - Sep 22' },
  { name: 'Libra', date: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', date: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', date: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', date: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', date: 'Jan 20 - Feb 18' },
  { name: 'Pisces', date: 'Feb 19 - Mar 20' }
];

const Horoscope = () => {
  const { colors } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <section className="text-center py-8">
        <h1 
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: colors.primary }}
        >
          Daily Horoscope
        </h1>
        <p className="text-lg" style={{ color: colors.text }}>
          Select your zodiac sign to view your daily horoscope
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={sign.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg text-center cursor-pointer hover:shadow-lg transition-shadow"
            style={{ 
              backgroundColor: colors.background,
              borderColor: colors.secondary,
              borderWidth: '1px'
            }}
          >
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: colors.primary }}
            >
              {sign.name}
            </h3>
            <p 
              className="text-sm"
              style={{ color: colors.text }}
            >
              {sign.date}
            </p>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default Horoscope; 