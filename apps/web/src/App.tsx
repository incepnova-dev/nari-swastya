/**
 * Main Application Entry Point
 * Handles global routing and core structure for the Nari Swastya web app.
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};


