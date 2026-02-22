import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { Journeys } from '../components/journeys';
import { Services } from '../pages/Services';
import { Stories } from '../pages/Stories';
import { About } from '../pages/About';
import { SymptomChecker } from '../pages/SymptomChecker';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/journeys" element={<Journeys />} />
      <Route path="/services" element={<Services />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/about" element={<About />} />
      <Route path="/symptomchecker" element={<SymptomChecker />} />
    </Routes>
  );
};
