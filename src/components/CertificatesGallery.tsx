import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Award, Shield, CheckCircle, X, ExternalLink, Download } from 'lucide-react';

const CertificatesGallery: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const certificates = [
    { id: 1, key: 'iso9001', category: 'quality', validUntil: '2025-12-31', icon: Award, color: 'from-blue-500 to-blue-600' },
    { id: 2, key: 'ce', category: 'compliance', validUntil: '2026-06-30', icon: Shield, color: 'from-green-500 to-green-600' },
    { id: 3, key: 'iec', category: 'international', validUntil: '2025-09-15', icon: CheckCircle, color: 'from-orange-500 to-orange-600' },
    { id: 4, key: 'rohs', category: 'compliance', validUntil: '2026-06-30', icon: Shield, color: 'from-red-500 to-red-600' },
    { id: 5, key: 'tse', category: 'quality', validUntil: '2025-08-20', icon: Award, color: 'from-primary-500 to-primary-600' },
  ];

  const filters = ['all', 'quality', 'compliance', 'international'];
  const filteredCertificates = certificates.filter(cert => activeFilter === 'all' || cert.category === activeFilter);

  const handleDownload = () => console.log('Download triggered for:', selectedCertificate);

  return (
    <section id="certificates" className="py-20 bg-accent-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6">{t('certificates.section_title')}</h2>
            <p className="text-xl text-primary-600 font-inter max-w-3xl mx-auto">{t('certificates.section_subtitle')}</p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                    : 'bg-white text-primary-700 hover:bg-accent-100 hover:shadow-md'
                }`}
              >
                {t(`certificates.filters.${filter}`)}
              </button>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCertificate(cert.id)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-accent-200/50 hover:border-secondary-500/30 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} text-white mb-6`}>
                        <cert.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-primary-700 mb-2">{t(`certificates.cards.${cert.key}.title`)}</h3>
                      <p className="text-secondary-600 font-inter font-semibold mb-4">{t(`certificates.cards.${cert.key}.subtitle`)}</p>
                      <p className="text-primary-600 font-inter leading-relaxed">{t(`certificates.cards.${cert.key}.description`)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {selectedCertificate !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedCertificate(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  {(() => {
                    const cert = certificates.find(c => c.id === selectedCertificate);
                    if (!cert) return null;
                    const certDate = new Date(cert.validUntil);
                    return (
                      <>
                        <div className={`p-8 bg-gradient-to-r ${cert.color} text-white text-center rounded-t-2xl relative`}>
                          <cert.icon className="w-16 h-16 mx-auto mb-4" />
                          <h2 className="text-3xl font-poppins font-bold">{t(`certificates.cards.${cert.key}.title`)}</h2>
                          <p className="text-xl font-inter opacity-90">{t(`certificates.cards.${cert.key}.subtitle`)}</p>
                          <button onClick={() => setSelectedCertificate(null)} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"><X/></button>
                        </div>
                        <div className="p-8">
                          <p className="text-lg text-primary-600 font-inter leading-relaxed mb-8">{t(`certificates.cards.${cert.key}.description`)}</p>
                          <div className="grid grid-cols-2 gap-6 mb-8 border-t border-b border-accent-200 py-6">
                            <div>
                              <h4 className="font-poppins font-semibold text-primary-700 mb-2">{t('certificates.modal.issuer')}</h4>
                              <p className="text-primary-600 font-inter">{t(`certificates.cards.${cert.key}.issuer`)}</p>
                            </div>
                            <div>
                              <h4 className="font-poppins font-semibold text-primary-700 mb-2">{t('certificates.modal.valid_until')}</h4>
                              <p className="text-primary-600 font-inter">
                                {new Date(cert.validUntil).toLocaleDateString(i18n.language, { year: 'numeric', month: 'long', day: 'numeric' })}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <button onClick={handleDownload} className="flex-1 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                              <Download className="w-5 h-5" />
                              {t('certificates.modal.download')}
                            </button>
                            <button className="flex-1 border-2 border-primary-600 text-primary-600 py-3 rounded-lg font-inter font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                              <ExternalLink className="w-5 h-5" />
                              {t('certificates.modal.verify')}
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CertificatesGallery;
