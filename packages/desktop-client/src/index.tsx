/**
 * Main entry point for the Actual Budget desktop client.
 * Initializes the React application and mounts it to the DOM.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// Ensure the root element exists before mounting
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure there is a <div id="root"> in your HTML.',
  );
}

const root = createRoot(rootElement);

// Note: Removed StrictMode because it causes double-invocation of effects
// in development which makes debugging certain async operations confusing.
root.render(<App />);

// Enable hot module replacement in development
if (import.meta.hot) {
  import.meta.hot.accept();
}
