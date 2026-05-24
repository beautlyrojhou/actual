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

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Enable hot module replacement in development
if (import.meta.hot) {
  import.meta.hot.accept();
}
