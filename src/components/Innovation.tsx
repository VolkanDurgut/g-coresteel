import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { 
  Zap, 
  Leaf, 
  Microscope, 
  Smartphone,
  Wifi,
  Brain,
  Shield,
  Gauge
} from 'lucide-react';

const Innovation: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const innovations = [
    { key: 'smart', icon: Zap, color: 'from-blue-500 to-blue-600' },
    { key: 'eco', icon: Leaf, color: 'from-green-500 to-green-600' },
    { key: 'rd', icon: Microscope, color: 'from-purple-500 to-purple-600' },
    { key: 'digital', icon: Smartphone, color: 'from-orange-500 to-orange-600' }
  ];

  const techFeatures = [
    { key: 'iot', icon: Wifi },
    { key: 'ai', icon: Brain },
    { key: 'cybersecurity', icon: Shield },
    { key: 'performance', icon: Gauge }
  ];

  return (
    <section id="innovation" className="py-20 bg-gradient-to-br from-dark-800 via-primary-900 to-dark-900 overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-industrial-pattern opacity-5"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary-400 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              {t('innovation.section_title')}
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {t('innovation.section_subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-secondary-500/50 transition-all duration-500 hover:bg-white/15 group-hover:scale-105 h-full">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${innovation.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <innovation.icon className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors">
                        {t(`innovation.cards.${innovation.key}.title`)}
                      </h3>
                      <p className="text-secondary-400 font-inter font-semibold">
                        {t(`innovation.cards.${innovation.key}.subtitle`)}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/80 font-inter leading-relaxed mb-6">
                    {t(`innovation.cards.${innovation.key}.description`)}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {(t(`innovation.cards.${innovation.key}.features`, { returnObjects: true }) as Array<string>).map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 + index * 0.2 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                        <span className="text-white/70 font-inter">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-poppins font-bold text-white mb-4">
                {t('innovation.highlights_title')}
              </h3>
              <p className="text-white/70 font-inter">
                {t('innovation.highlights_subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/10 group-hover:border-secondary-500/30 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-secondary-400 mx-auto mb-3 group-hover:text-secondary-300 transition-colors" />
                    <div className="text-white font-poppins font-semibold mb-1">
                      {t(`innovation.tech_features.${feature.key}.label`)}
                    </div>
                    <div className="text-white/70 font-inter text-sm">
                      {t(`innovation.tech_features.${feature.key}.value`)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2 }}
          >
            <motion.button
              className="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white px-12 py-4 rounded-lg font-inter font-bold text-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('innovation.button_cta')}
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

export default Innovation;
