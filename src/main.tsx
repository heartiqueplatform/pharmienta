import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Simple version-based cache buster
const VERSION = '1.0.8'; // Increment this on each deploy

// Check if page is outdated
const checkForUpdates = () => {
  const storedVersion = localStorage.getItem('appVersion');

  if (storedVersion !== VERSION) {
    // Clear old cache
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }

    // Store new version
    localStorage.setItem('appVersion', VERSION);

    // Force reload to get fresh assets
    window.location.reload();
  }
};

// Run update check
checkForUpdates();

// Render app
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}