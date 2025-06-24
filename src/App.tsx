import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Router bileşenlerini ekliyoruz
import LoadingAnimation from './components/LoadingAnimation';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

// Anasayfada gösterilecek tüm bölümleri bir araya getiren yeni bir bileşen oluşturuyoruz
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechnicalSpecs from './components/TechnicalSpecs';
import Projects from './components/Projects';
import Innovation from './components/Innovation';
import CertificatesGallery from './components/CertificatesGallery';
import TeamShowcase from './components/TeamShowcase';
import DownloadCenter from './components/DownloadCenter';

// Bu, sadece anasayfa içeriğini barındıracak.
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechnicalSpecs />
      <Projects />
      <Innovation />
      <CertificatesGallery />
      <TeamShowcase />
      <DownloadCenter />
      {/* ÖNEMLİ: Contact bileşenini buradan kaldırdık çünkü artık kendi sayfası var */}
    </>
  );
};

// Ana App bileşeninin yeni hali
function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('g-coresteel-animation-seen');
    if (hasSeenAnimation) {
      setShowLoading(false);
      setLoadingComplete(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setLoadingComplete(true);
    localStorage.setItem('g-coresteel-animation-seen', 'true');
  };

  return (
    <div className="min-h-screen bg-white">
      {showLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}

      {/* Main Website Content */}
      {loadingComplete && (
        <>
          {/* Header ve Footer tüm sayfalarda ortak olacak */}
          <Header />
          <main>
            {/* Routes, URL'e göre hangi sayfanın gösterileceğini belirler */}
            <Routes>
              {/* Ana yol ("/") için HomePage bileşenini göster */}
              <Route path="/" element={<HomePage />} />
              
              {/* "/contact" yolu için Contact bileşenini göster */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
