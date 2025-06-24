import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Zap, Factory, Globe, BarChart3, Users, X, Package, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/gcoresteel-about.jpg'; 
import modalImage1 from '../assets/modal-image-1.jpeg';
import modalImage2 from '../assets/modal-image-2.jpg';


const About: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const coreValues = [
    { icon: Wrench, key: 'technical' },
    { icon: Zap, key: 'innovative' },
    { icon: Factory, key: 'reliability' },
    { icon: Globe, key: 'sustainable' },
    { icon: BarChart3, key: 'performance' },
    { icon: Users, key: 'satisfaction' },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div ref={ref} className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Visual Content */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={aboutImage} 
                      alt="G-Coresteel Transformatör Nüve İmalatı" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-800/20 to-transparent"></div>
                  </div>
                  <motion.div
                    className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-accent-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-2xl font-orbitron font-bold text-primary-600">99.8%</div>
                    <div className="text-sm text-primary-500 font-inter">{t('about.stats_quality')}</div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-secondary-500 rounded-xl shadow-xl p-4 text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="text-2xl font-orbitron font-bold">ISO 9001</div>
                    <div className="text-sm font-inter opacity-90">{t('about.stats_certified')}</div>
                  </motion.div>
                </div>
              </motion.div>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  {t('about.title')}
                </motion.h2>
                <motion.p
                  className="text-lg text-primary-600 font-inter leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  {t('about.description')}
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-accent-50 to-primary-50 hover:shadow-md transition-all duration-300 group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="bg-white rounded-lg p-3 shadow-sm group-hover:shadow-md transition-shadow">
                        <value.icon className="w-6 h-6 text-primary-600 group-hover:text-secondary-600 transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-primary-700 mb-1 group-hover:text-secondary-600 transition-colors">
                          {t(`about.values.${value.key}.title`)}
                        </h3>
                        <p className="text-sm text-primary-600 font-inter leading-relaxed">
                          {t(`about.values.${value.key}.description`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.4 }}
                >
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white px-8 py-4 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300 group"
                  >
                    {t('about.button_cta')}
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Yeniden Tasarlanmış ve Dinamik Metinli Modal Yapısı */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-poppins font-bold text-primary-700">{t('about_modal.main_title')}</h2>
                  <button onClick={() => setIsModalOpen(false)} className="text-primary-400 hover:text-primary-600 transition-colors">
                    <X className="w-8 h-8"/>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <img src={modalImage1} alt="Üretim prosesi" className="rounded-lg shadow-md aspect-video object-cover"/>
                    <img src={modalImage2} alt="Hammadde" className="rounded-lg shadow-md aspect-video object-cover"/>
                </div>

                <div>
                  <h3 className="text-2xl font-poppins font-bold text-primary-700 mb-3">{t('about_modal.philosophy_title')}</h3>
                  <p className="text-primary-600 font-inter mb-4 leading-relaxed">
                    {t('about_modal.philosophy_p1')}
                  </p>
                  <p className="text-primary-600 font-inter mb-8 leading-relaxed">
                    {t('about_modal.philosophy_p2')}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-poppins font-bold text-primary-700 mb-6">{t('about_modal.capacity_title')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-accent-50/70 p-5 rounded-xl border border-accent-100 text-center hover:border-secondary-300 hover:bg-accent-100 transition-all">
                      <Package className="w-10 h-10 text-secondary-600 mb-3 mx-auto" />
                      <h4 className="font-poppins font-semibold text-primary-700">{t('about_modal.capacity_card1_title')}</h4>
                      <p className="text-sm text-primary-600">{t('about_modal.capacity_card1_desc')}</p>
                    </div>
                    <div className="bg-accent-50/70 p-5 rounded-xl border border-accent-100 text-center hover:border-secondary-300 hover:bg-accent-100 transition-all">
                      <Zap className="w-10 h-10 text-secondary-600 mb-3 mx-auto" />
                      <h4 className="font-poppins font-semibold text-primary-700">{t('about_modal.capacity_card2_title')}</h4>
                      <p className="text-sm text-primary-600">{t('about_modal.capacity_card2_desc')}</p>
                    </div>
                    <div className="bg-accent-50/70 p-5 rounded-xl border border-accent-100 text-center hover:border-secondary-300 hover:bg-accent-100 transition-all">
                      <Shield className="w-10 h-10 text-secondary-600 mb-3 mx-auto" />
                      <h4 className="font-poppins font-semibold text-primary-700">{t('about_modal.capacity_card3_title')}</h4>
                      <p className="text-sm text-primary-600">{t('about_modal.capacity_card3_desc')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-accent-100 p-6 rounded-xl border border-accent-200">
                   <p className="text-primary-700 font-inter font-medium text-center text-lg">{t('about_modal.final_paragraph')}</p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
