import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const zodiacInfo = [
  {
    name: 'Aries',
    element: 'Fire',
    ruling_planet: 'Mars',
    characteristics: 'Confident, courageous, enthusiastic'
  },
  {
    name: 'Taurus',
    element: 'Earth',
    ruling_planet: 'Venus',
    characteristics: 'Patient, reliable, devoted'
  },
  {
    name: 'Gemini',
    element: 'Air',
    ruling_planet: 'Mercury',
    characteristics: 'Adaptable, versatile, intellectual'
  },
  // Add more signs as needed
];

const Zodiac = () => {
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
          Zodiac Signs
        </h1>
        <p className="text-lg" style={{ color: colors.text }}>
          Explore the characteristics and meanings of each zodiac sign
        </p>
      </section>

      <section className="space-y-6">
        {zodiacInfo.map((sign, index) => (
          <motion.div
            key={sign.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-lg"
            style={{ 
              backgroundColor: colors.background,
              borderColor: colors.secondary,
              borderWidth: '1px'
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 
                  className="text-2xl font-semibold mb-2"
                  style={{ color: colors.primary }}
                >
                  {sign.name}
                </h2>
                <div className="space-y-1">
                  <p style={{ color: colors.text }}>
                    <span className="font-medium">Element:</span> {sign.element}
                  </p>
                  <p style={{ color: colors.text }}>
                    <span className="font-medium">Ruling Planet:</span> {sign.ruling_planet}
                  </p>
                  <p style={{ color: colors.text }}>
                    <span className="font-medium">Characteristics:</span> {sign.characteristics}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 md:mt-0 px-6 py-2 rounded-lg"
                style={{ 
                  backgroundColor: colors.secondary,
                  color: colors.primary
                }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default Zodiac; 