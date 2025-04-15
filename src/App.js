import React from 'react';
import './components/styles/App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LogoIntro from './components/LogoIntro';
import SelectorPage from './components/SelectorPage';
import DeveloperPage from './components/DeveloperView/DeveloperPage';
import RecruiterPage from './components/RecruiterView/RecruiterPage';
import ClientPage from './components/ClientView/ClientPage';
import StalkerPage from './components/StalkerView/StalkerPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LogoIntro />} />
        <Route path="/select" element={<SelectorPage />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/recruiter" element={<RecruiterPage />} />
        <Route path="/client" element={<ClientPage />} />
        <Route path="/stalker" element={<StalkerPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;