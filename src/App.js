// src/App.js
import React, {useEffect}from 'react';
import '../src/style/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout';
import Home from '../src/components/pages/Home';
import ListTelegram from './components/pages/ListTelegramScreen';
import ListDomain from './components/pages/ListDomainscreen';
import GuidelinePage from './components/pages/guide';
import ScanDomainPage from './components/pages/scandomain';

function App() {
  useEffect(() => {
    console.log("chay ne")
  }, [])

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<GuidelinePage />} />
          <Route path="/domains/list_domains" element={<ListDomain />} />
          <Route path="/telegram/list_telegram" element={<ListTelegram />} />
          <Route path="/scan_domains" element={<ScanDomainPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
