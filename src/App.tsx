import React, { useState, useEffect } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechnicalSpecs from './components/TechnicalSpecs';
import Projects from './components/Projects';
import Innovation from './components/Innovation';
import CertificatesGallery from './components/CertificatesGallery';
import TeamShowcase from './components/TeamShowcase';
import DownloadCenter from './components/DownloadCenter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Check if user has seen animation before (optional)
    const hasSeenAnimation = localStorage.getItem('g-coresteel-animation-seen');
    if (hasSeenAnimation) {
      setShowLoading(false);
      setLoadingComplete(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setLoadingComplete(true);
    // Remember that user has seen the animation
    localStorage.setItem('g-coresteel-animation-seen', 'true');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Loading Animation */}
      {showLoading && (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      )}

      {/* Main Website Content */}
      {loadingComplete && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <TechnicalSpecs />
            <Projects />
            <Innovation />
            <CertificatesGallery />
            <TeamShowcase />
            <DownloadCenter />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
