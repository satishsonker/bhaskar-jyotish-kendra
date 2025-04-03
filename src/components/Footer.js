import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  const { colors } = useTheme();

  const usefulLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <footer
      className="w-full py-8 px-4"
      style={{ 
        backgroundColor: colors.background,
        borderTop: `1px solid ${colors.secondary}`,
        color: colors.text
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div 
              className="h-8 w-8 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: colors.primary,
                color: '#FFFFFF'
              }}
            >
              <span className="font-bold text-sm">{siteConfig.shortName}</span>
            </div>
            <h3 className="text-lg font-semibold" style={{ color: colors.primary }}>
              {siteConfig.name}
            </h3>
          </div>
          <p className="text-sm">
            {siteConfig.description}
          </p>
          <div className="mt-4 text-sm">
            <p>{siteConfig.contact.address}</p>
            <p>Email: {siteConfig.contact.email}</p>
            <p>Phone: {siteConfig.contact.phone}</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>
            Useful Links
          </h3>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: colors.text }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                className="hover:opacity-80 transition-opacity capitalize"
                style={{ color: colors.accent }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div 
        className="mt-8 pt-4 text-center text-sm"
        style={{ borderTop: `1px solid ${colors.secondary}` }}
      >
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 