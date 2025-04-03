import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const SEO = ({ 
  title, 
  description = siteConfig.description,
  image = siteConfig.seo.defaultImage,
  article = false 
}) => {
  const { pathname } = useLocation();
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;

  const url = `${siteConfig.domain}${pathname}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="canonical" href={url} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(', ')} />

      {/* OpenGraph meta tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={article ? 'article' : siteConfig.seo.type} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.seo.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.seo.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Verification tags */}
      {siteConfig.seo.googleSiteVerification && (
        <meta 
          name="google-site-verification" 
          content={siteConfig.seo.googleSiteVerification} 
        />
      )}
      {siteConfig.seo.microsoftVerification && (
        <meta 
          name="msvalidate.01" 
          content={siteConfig.seo.microsoftVerification} 
        />
      )}

      {/* Language tags */}
      <html lang={siteConfig.seo.language} />
      {siteConfig.seo.locales.map(locale => (
        <link 
          key={locale}
          rel="alternate" 
          hrefLang={locale} 
          href={`${siteConfig.domain}/${locale}${pathname}`}
        />
      ))}

      {/* PWA tags */}
      <meta name="theme-color" content={siteConfig.pwa.themeColor} />
      <meta name="application-name" content={siteConfig.pwa.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteConfig.pwa.shortName} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content={siteConfig.pwa.themeColor} />
      <meta name="msapplication-tap-highlight" content="no" />
    </Helmet>
  );
};

export default SEO; 