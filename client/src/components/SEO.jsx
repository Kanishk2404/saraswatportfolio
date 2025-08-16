import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/images/profile.jpg',
  url = '',
  type = 'website',
  author = 'Kanishk Saraswat',
  publishedTime = '',
  modifiedTime = ''
}) {
  const siteName = 'Kanishk Saraswat';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = url ? `https://yourdomain.com${url}` : 'https://yourdomain.com';
  const fullImage = image.startsWith('http') ? image : `https://yourdomain.com${image}`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kanishk Saraswat",
    "jobTitle": "Full-Stack Developer & DevOps Engineer",
  "description": "Web developer passionate about building scalable web applications and solving real-world problems with modern technology.",
    "url": "https://yourdomain.com",
    "image": fullImage,
    "sameAs": [
      "https://github.com/Kanishk2404",
      "https://linkedin.com/in/kanishk-saraswat"
    ],
    "knowsAbout": [
      "Web Development",
      "React",
      "Node.js",
      "DevOps",
      "AWS",
      "Docker",
      "SEO",
      "Cybersecurity"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Your University Name"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@yourtwitterhandle" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
    </Helmet>
  );
}
