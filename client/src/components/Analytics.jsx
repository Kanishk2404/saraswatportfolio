import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    const trackPageView = () => {
      // You can replace this with your actual analytics service
      // For now, we'll just log to console
      console.log(`Page view: ${location.pathname}`);
      
      // Example: Google Analytics 4
      // if (typeof gtag !== 'undefined') {
      //   gtag('config', 'GA_MEASUREMENT_ID', {
      //     page_path: location.pathname,
      //   });
      // }
      
      // Example: Simple analytics
      // if (typeof sa !== 'undefined') {
      //   sa('pageview');
      // }
    };

    trackPageView();
  }, [location]);

  // Track custom events
  const trackEvent = (eventName, parameters = {}) => {
    console.log(`Event: ${eventName}`, parameters);
    
    // Example: Google Analytics 4
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', eventName, parameters);
    // }
  };

  // Track project views
  const trackProjectView = (projectName) => {
    trackEvent('project_view', {
      project_name: projectName,
      timestamp: new Date().toISOString()
    });
  };

  // Track contact form submissions
  const trackContactSubmission = (success) => {
    trackEvent('contact_submission', {
      success: success,
      timestamp: new Date().toISOString()
    });
  };

  // Track resume downloads
  const trackResumeDownload = () => {
    trackEvent('resume_download', {
      timestamp: new Date().toISOString()
    });
  };

  // Track social link clicks
  const trackSocialClick = (platform) => {
    trackEvent('social_click', {
      platform: platform,
      timestamp: new Date().toISOString()
    });
  };

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    window.trackEvent = trackEvent;
    window.trackProjectView = trackProjectView;
    window.trackContactSubmission = trackContactSubmission;
    window.trackResumeDownload = trackResumeDownload;
    window.trackSocialClick = trackSocialClick;
  }, []);

  return null; // This component doesn't render anything
}
