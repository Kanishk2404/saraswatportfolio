import { Helmet } from 'react-helmet-async';

const siteName = 'Kanishk Saraswat | Full-Stack Developer | SuiteGenie Founder';

export default function SEO({ 
  title, 
  description = 'Full-stack developer and founder of SuiteGenie - AI social media automation platform. Expert in React, Node.js, PostgreSQL, Redis, OAuth 2.0. Built platform serving 30 users with significant infrastructure optimizations.', 
  keywords = [], 
  url, 
  ogImage = '/images/suitegenie_card.jpg',
  type = 'website',
  author = 'Kanishk Saraswat',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = `https://kanishksaraswat.me${url}`;

  const defaultKeywords = [
    'Anicafe',
    'SuiteGenie'
  ];
  const allKeywords = keywords.length ? keywords : defaultKeywords;

  // Generate schema markup based on page type
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kanishk Saraswat",
      "url": "https://kanishksaraswat.me",
      "image": "https://kanishksaraswat.me/images/profile.jpg",
      "sameAs": [
        "https://github.com/kanishksaraswat",
        "https://linkedin.com/in/kanishksaraswat"
      ],
      "jobTitle": "Full Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "description": "Full-stack developer and founder of SuiteGenie - AI social media automation platform. Expert in React, Node.js, PostgreSQL, Redis, OAuth 2.0."
    };

    // Blog post specific schema
    if (type === 'article' && publishedTime) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": ogImage.startsWith('http') ? ogImage : `https://kanishksaraswat.me${ogImage}`,
        "author": {
          "@type": "Person",
          "name": author,
          "url": "https://kanishksaraswat.me"
        },
        "publisher": {
          "@type": "Organization",
          "name": siteName,
          "logo": {
            "@type": "ImageObject",
            "url": "https://kanishksaraswat.me/images/profile.jpg"
          }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": fullUrl
        },
        "articleSection": section,
        "keywords": tags.join(', '),
        "wordCount": description?.length || 0
      };
    }

    // Project page specific schema
    if (url?.includes('/projects')) {
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Projects Portfolio",
        "description": "Web development projects and portfolio showcase",
        "url": fullUrl,
        "author": {
          "@type": "Person",
          "name": author
        }
      };
    }

    // About page specific schema
    if (url?.includes('/about')) {
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Kanishk Saraswat",
        "description": description,
        "url": fullUrl,
        "mainEntity": {
          "@type": "Person",
          "name": "Kanishk Saraswat",
          "description": description,
          "jobTitle": "Full Stack Developer",
          "knowsAbout": ["Web Development", "DevOps", "SEO", "React", "Node.js", "AWS"]
        }
      };
    }

    // Skills page specific schema
    if (url?.includes('/skills')) {
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Technical Skills",
        "description": "Comprehensive technical skills and expertise",
        "url": fullUrl,
        "mainEntity": {
          "@type": "ItemList",
          "name": "Technical Skills",
          "description": "Programming languages, frameworks, and technologies",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Frontend Development",
              "description": "React, JavaScript, TypeScript, HTML, CSS"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Backend Development",
              "description": "Node.js, Express, Python, PHP"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "DevOps & Cloud",
              "description": "AWS, Docker, Kubernetes, CI/CD"
            }
          ]
        }
      };
    }

    // Contact page specific schema
    if (url?.includes('/contact')) {
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact",
        "description": description,
        "url": fullUrl,
        "mainEntity": {
          "@type": "Person",
          "name": "Kanishk Saraswat",
          "email": "contact@kanishksaraswat.me",
          "url": "https://kanishksaraswat.me"
        }
      };
    }

    // Blog listing page specific schema
    if (url?.includes('/blog') && !url.includes('/blog/')) {
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog",
        "description": "Web development, SEO, and technology blog",
        "url": fullUrl,
        "author": {
          "@type": "Person",
          "name": author,
          "url": "https://kanishksaraswat.me"
        },
        "publisher": {
          "@type": "Organization",
          "name": siteName,
          "logo": {
            "@type": "ImageObject",
            "url": "https://kanishksaraswat.me/images/profile.jpg"
          }
        }
      };
    }

    // Default to Person schema for homepage and other pages
    return baseSchema;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : `${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `https://kanishksaraswat.me${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : `${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `https://kanishksaraswat.me${ogImage}`} />
      <meta name="twitter:creator" content="@kanishksaraswat" />

      {/* Additional Meta Tags for Articles */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
}
