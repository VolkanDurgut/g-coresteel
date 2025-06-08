import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Power, Settings } from 'lucide-react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(1);
  const [showSkip, setShowSkip] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate real asset loading
  useEffect(() => {
    const simulateAssetLoading = () => {
      const totalAssets = 25; // Simulated number of assets
      let loadedAssets = 0;
      
      const loadInterval = setInterval(() => {
        loadedAssets++;
        const newProgress = (loadedAssets / totalAssets) * 100;
        setProgress(newProgress);
        
        if (loadedAssets >= totalAssets) {
          clearInterval(loadInterval);
          setAssetsLoaded(true);
          setTimeout(() => {
            if (phase === 1) {
              setPhase(2);
              setProgress(0);
            }
          }, 500);
        }
      }, 80);
      
      return () => clearInterval(loadInterval);
    };

    if (phase === 1) {
      simulateAssetLoading();
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 2 && assetsLoaded) {
      const timer = setTimeout(() => {
        setPhase(3);
        setTimeout(onComplete, 1500);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [phase, assetsLoaded, onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  // Enhanced particle system with 150-200 particles
  const particleCount = 175;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2
  }));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-800 flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
      >
        {/* Enhanced Particle System */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-industrial-pattern opacity-10"></div>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-secondary-500 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -50, -100],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: [0.4, 0.0, 0.2, 1]
              }}
            />
          ))}
        </div>

        {/* Skip Button */}
        {showSkip && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors text-sm font-inter z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
            onClick={handleSkip}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip Animation
          </motion.button>
        )}

        <div className="text-center relative z-10">
          {/* Phase 1: Enhanced Loading Core */}
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Energy Core - 15% of viewport width */}
              <motion.div
                className="relative mx-auto mb-8"
                style={{ width: '15vw', height: '15vw', minWidth: '120px', minHeight: '120px' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                {/* Multiple rotating rings */}
                <div className="absolute inset-0 border-4 border-secondary-500/20 rounded-full"></div>
                <div className="absolute inset-2 border-4 border-secondary-500/40 rounded-full"></div>
                <div className="absolute inset-4 border-4 border-secondary-500/60 rounded-full"></div>
                <div className="absolute inset-6 border-4 border-secondary-500/80 rounded-full"></div>
                
                {/* Central core */}
                <motion.div
                  className="absolute inset-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 20px rgba(255, 107, 53, 0.5)',
                      '0 0 40px rgba(255, 107, 53, 0.8)',
                      '0 0 20px rgba(255, 107, 53, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Power className="w-8 h-8 text-white" />
                </motion.div>

                {/* Energy arcs */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 bg-secondary-400 rounded-full"
                    style={{
                      height: '20px',
                      left: '50%',
                      top: '-10px',
                      transformOrigin: '50% calc(50% + 7.5vw)',
                      transform: `rotate(${i * 45}deg)`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scaleY: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>

              <motion.h2
                className="text-xl font-orbitron text-white mb-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                INITIALIZING POWER SYSTEMS...
              </motion.h2>

              {/* Enhanced progress bar with real asset loading */}
              <div className="w-80 bg-white/20 rounded-full h-3 mx-auto mb-4 border border-white/30">
                <motion.div
                  className="bg-gradient-to-r from-secondary-600 to-secondary-500 h-3 rounded-full relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              <p className="text-white/70 mt-2 font-inter">
                Loading Assets: {Math.round(progress)}%
              </p>
            </motion.div>
          )}

          {/* Phase 2: Enhanced Logo Formation */}
          {phase === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.div
                className="relative mb-8"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 3, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <div className="text-6xl md:text-8xl font-poppins font-bold text-white flex items-center justify-center gap-2">
                  <motion.span
                    initial={{ x: -100, opacity: 0, rotateY: -90 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    G
                  </motion.span>
                  <motion.span
                    className="text-secondary-500"
                    initial={{ y: -100, opacity: 0, scale: 0 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    -
                  </motion.span>
                  <motion.span
                    initial={{ x: 100, opacity: 0, rotateY: 90 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    CORESTEEL
                  </motion.span>
                </div>

                {/* 3D Rotating Transformer Core */}
                <motion.div
                  className="absolute -top-8 -right-8 w-20 h-20"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <div className="relative w-full h-full">
                    <Settings className="w-full h-full text-secondary-500" />
                    <motion.div
                      className="absolute inset-0 border-2 border-secondary-400 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>

                {/* Electrical effects */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-16 bg-secondary-400 rounded-full"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: '50%',
                      transformOrigin: 'center',
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scaleY: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>

              <motion.p
                className="text-xl text-white/80 font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, ease: [0.4, 0.0, 0.2, 1] }}
              >
                Excellence in Core Transformer Manufacturing
              </motion.p>
            </motion.div>
          )}

          {/* Phase 3: Enhanced Welcome Message */}
          {phase === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
              transition={{ ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.div
                className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(255, 107, 53, 0.5)',
                    '0 0 40px rgba(255, 107, 53, 0.8)',
                    '0 0 60px rgba(255, 107, 53, 1)',
                    '0 0 40px rgba(255, 107, 53, 0.8)',
                    '0 0 20px rgba(255, 107, 53, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                WELCOME TO THE FUTURE OF POWER
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-16 h-16 text-secondary-500 mx-auto" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;