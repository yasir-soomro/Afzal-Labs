// Simple analytics utility for tracking user interactions.
// Connect this to Google Analytics, Mixpanel, Amplitude, etc. in a production app.

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // For demonstration purposes, we are logging to console.
  // In a real app, you would send this to your tracking service.
  console.log(`[Analytics Event] ${eventName}`, eventData || {});
};
