import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowRight, Award, Users, Target, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentStats, setCurrentStats] = useState({
    projects: 0,
    collaborations: 0,
    satisfaction: 0,
    experience: 0,
  });

  const finalStats = {
    projects: 1000,
    collaborations: 50,
    satisfaction: 99.8,
    experience: 20,
  };

  useEffect(() => {
    const duration = 3000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCurrentStats({
        projects: Math.floor(finalStats.projects * progress),
        collaborations: Math.floor(finalStats.collaborations * progress),
        satisfaction: Math.floor(finalStats.satisfaction * progress * 10) / 10,
        experience: Math.floor(finalStats.experience * progress),
      });
      if (step >= steps) {
        clearInterval(timer);
        setCurrentStats(finalStats);
      }
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const statsData = [
    { key: 'projects', icon: Target, value: `${currentStats.projects}+` },
    { key: 'collaborations', icon: Users, value: `${currentStats.collaborations}+` },
    { key: 'satisfaction', icon: Award, value: `${currentStats.satisfaction}%` },
    { key: 'experience', icon: Calendar, value: `${currentStats.experience}+` },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-800">
        <div className="absolute inset-0 bg-industrial-pattern opacity-10"></div>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
              <motion.span className="inline-block" animate={{ textShadow: ['0 0 20px rgba(255, 255, 255, 0.5)', '0 0 40px rgba(255, 255, 255, 0.8)', '0 0 20px rgba(255, 255, 255, 0.5)'] }} transition={{ duration: 3, repeat: Infinity }}>
                {t('hero.title_part1')}
              </motion.span>
              <br />
              <motion.span className="inline-block bg-gradient-to-r from-secondary-500 to-secondary-400 bg-clip-text text-transparent" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                {t('hero.title_part2')}
              </motion.span>
            </h1>
          </motion.div>
          <motion.p className="text-xl md:text-2xl text-white/90 font-inter max-w-4xl mx-auto mb-12 leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}>
            {t('hero.subtitle')}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.1 }}>
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 group animate-pulse-glow" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              {t('hero.button_primary')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 backdrop-blur-sm bg-white/10" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              {t('hero.button_secondary')}
            </motion.a>
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }}>
            {statsData.map((stat, index) => (
              <motion.div key={index} className="text-center group" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }} whileHover={{ scale: 1.1, y: -5 }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-secondary-500/50 transition-all duration-300 group-hover:bg-white/15">
                  <stat.icon className="w-8 h-8 text-secondary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-orbitron font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 font-inter text-sm">
                    {t(`hero.stats.${stat.key}`)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
          <motion.a 
            href="#about"
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }} 
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-sm font-inter">{t('hero.scroll_text')}</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
