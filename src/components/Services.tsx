import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Settings, 
  Zap, 
  Users, 
  Wrench, 
  Award, 
  Briefcase,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Hook'u import et

const Services: React.FC = () => {
  const { t } = useTranslation(); // t fonksiyonunu kullanıma hazırla
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Servis verilerini çeviri anahtarları ile yeniden tanımla
  const serviceKeys = ['manufacturing', 'industrial', 'consultancy', 'maintenance', 'quality', 'management'];
  const serviceIcons = [Settings, Zap, Users, Wrench, Award, Briefcase];
  const serviceColors = [
    'from-primary-500 to-primary-600',
    'from-secondary-500 to-secondary-600',
    'from-primary-600 to-secondary-500',
    'from-secondary-600 to-primary-500',
    'from-primary-500 to-secondary-500',
    'from-secondary-500 to-primary-600'
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              {t('services.section_title')}
            </motion.h2>
            <motion.p
              className="text-xl text-primary-600 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {t('services.section_subtitle')}
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceKeys.map((key, index) => {
              const Icon = serviceIcons[index];
              const color = serviceColors[index];
              const features = [1, 2, 3, 4].map(i => t(`services.cards.${key}.features.${i-1}`));

              return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-accent-200/50 group-hover:border-secondary-500/30 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${color} text-white mb-6 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl font-poppins font-bold text-primary-700 mb-4 group-hover:text-secondary-600 transition-colors relative z-10">
                    {t(`services.cards.${key}.title`)}
                  </h3>
                  
                  <p className="text-primary-600 font-inter leading-relaxed mb-6 relative z-10">
                    {t(`services.cards.${key}.description`)}
                  </p>

                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        className="space-y-3 mb-6 relative z-10"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                            <span className="text-sm text-primary-600 font-inter">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    className="flex items-center gap-2 text-secondary-600 font-inter font-semibold group-hover:text-secondary-500 transition-colors relative z-10"
                    whileHover={{ x: 5 }}
                  >
                    {t('services.learn_more')}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  ></motion.div>
                </div>
              </motion.div>
            )})}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white px-12 py-4 rounded-lg font-inter font-bold text-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('services.button_cta')}
              <motion.span
                className="inline-block ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
