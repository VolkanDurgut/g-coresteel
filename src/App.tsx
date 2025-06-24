import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechnicalSpecs from './components/TechnicalSpecs';
import Innovation from './components/Innovation';
import CertificatesGallery from './components/CertificatesGallery';
import TeamShowcase from './components/TeamShowcase';
import DownloadCenter from './components/DownloadCenter';
import Contact from './components/Contact';
import LoadingAnimation from './components/LoadingAnimation'; // Eğer kullanılıyorsa

// Anasayfada gösterilecek tüm bölümleri bir araya getiren bir bileşen
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechnicalSpecs />
      <Projects />
      <Innovation />
      <TeamShowcase />
      <CertificatesGallery />
      <DownloadCenter />
    </>
  );
};


// Ana App bileşeni
function App() {
  return (
    // BrowserRouter tüm uygulamayı sarmalı
    <BrowserRouter> 
      {/* Header ve Footer tüm sayfalarda ortak olacağı için Routes dışında kalabilir */}
      <Header />
      
      <main>
        {/* Routes: Adres çubuğundaki yola göre hangi bileşenin render edileceğini belirler */}
        <Routes>
          {/* Adres "/" ise HomePage bileşenini göster */}
          <Route path="/" element={<HomePage />} />
          
          {/* Adres "/contact" ise SADECE Contact bileşenini göster */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
