import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={theme.palette.primary.main}
            strokeWidth="2"
            fill="none"
          />
          
          {/* Sun rays */}
          <g transform="rotate(45, 50, 50)">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="50"
                y1="15"
                x2="50"
                y2="25"
                stroke={theme.palette.primary.main}
                strokeWidth="2"
                transform={`rotate(${angle}, 50, 50)`}
              />
            ))}
          </g>

          {/* Moon */}
          <path
            d="M65 35 Q 80 50 65 65 Q 85 50 65 35"
            fill={theme.palette.secondary.main}
          />

          {/* Stars */}
          <circle cx="30" cy="30" r="2" fill={theme.palette.primary.main} />
          <circle cx="40" cy="45" r="2" fill={theme.palette.primary.main} />
          <circle cx="25" cy="60" r="2" fill={theme.palette.primary.main} />

          {/* Om Symbol */}
          <text
            x="45"
            y="60"
            fontSize="24"
            fill={theme.palette.primary.main}
            fontFamily="Arial"
          >
            ॐ
          </text>
        </svg>
      </Box>
    </Link>
  );
};

export default Logo; 