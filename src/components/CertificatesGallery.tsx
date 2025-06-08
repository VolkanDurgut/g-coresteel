import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Shield, CheckCircle, X, ExternalLink } from 'lucide-react';

const CertificatesGallery: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const certificates = [
    {
      id: 1,
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management System',
      description: 'International standard for quality management systems, ensuring consistent quality in our manufacturing processes.',
      issuer: 'International Organization for Standardization',
      validUntil: '2025-12-31',
      color: 'from-blue-500 to-blue-600',
      icon: Award
    },
    {
      id: 2,
      title: 'CE Conformity',
      subtitle: 'European Conformity',
      description: 'Certification ensuring our products meet EU safety, health, and environmental protection standards.',
      issuer: 'European Union',
      validUntil: '2026-06-30',
      color: 'from-green-500 to-green-600',
      icon: Shield
    },
    {
      id: 3,
      title: 'IEC 60076',
      subtitle: 'Power Transformer Standards',
      description: 'Compliance with international standards for power transformers, ensuring reliability and performance.',
      issuer: 'International Electrotechnical Commission',
      validUntil: '2025-09-15',
      color: 'from-purple-500 to-purple-600',
      icon: CheckCircle
    },
    {
      id: 4,
      title: 'TSE Certificate',
      subtitle: 'Turkish Standards Institution',
      description: 'National certification ensuring compliance with Turkish industrial standards and regulations.',
      issuer: 'Turkish Standards Institution',
      validUntil: '2025-11-20',
      color: 'from-red-500 to-red-600',
      icon: Award
    },
    {
      id: 5,
      title: 'Environmental ISO 14001',
      subtitle: 'Environmental Management',
      description: 'Certification for environmental management systems, demonstrating our commitment to sustainability.',
      issuer: 'International Organization for Standardization',
      validUntil: '2025-08-10',
      color: 'from-emerald-500 to-emerald-600',
      icon: Shield
    },
    {
      id: 6,
      title: 'OHSAS 18001',
      subtitle: 'Occupational Health & Safety',
      description: 'International standard for occupational health and safety management systems.',
      issuer: 'British Standards Institution',
      validUntil: '2025-10-05',
      color: 'from-orange-500 to-orange-600',
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-primary-600 font-inter max-w-3xl mx-auto">
              Our commitment to excellence is validated by international certifications and rigorous quality standards
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-accent-200/50 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedCertificate(cert.id)}
              >
                {/* Certificate Header */}
                <div className={`h-32 bg-gradient-to-br ${cert.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <cert.icon className="w-16 h-16 text-white/90" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <motion.div
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-bold text-primary-700 mb-2 group-hover:text-secondary-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-secondary-600 font-inter font-semibold mb-3">
                    {cert.subtitle}
                  </p>
                  <p className="text-primary-600 font-inter text-sm leading-relaxed mb-4">
                    {cert.description.substring(0, 100)}...
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-primary-500">
                    <span>Valid until: {new Date(cert.validUntil).toLocaleDateString()}</span>
                    <ExternalLink className="w-4 h-4 group-hover:text-secondary-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificate Modal */}
          <AnimatePresence>
            {selectedCertificate && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCertificate(null)}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const cert = certificates.find(c => c.id === selectedCertificate);
                    if (!cert) return null;

                    return (
                      <>
                        {/* Modal Header */}
                        <div className={`h-48 bg-gradient-to-br ${cert.color} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <button
                            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            onClick={() => setSelectedCertificate(null)}
                          >
                            <X className="w-5 h-5" />
                          </button>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <cert.icon className="w-24 h-24 text-white/90" />
                          </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                          <h2 className="text-3xl font-poppins font-bold text-primary-700 mb-2">
                            {cert.title}
                          </h2>
                          <p className="text-xl text-secondary-600 font-inter font-semibold mb-6">
                            {cert.subtitle}
                          </p>
                          
                          <div className="space-y-4 mb-6">
                            <div>
                              <h4 className="font-poppins font-semibold text-primary-700 mb-2">Description</h4>
                              <p className="text-primary-600 font-inter leading-relaxed">
                                {cert.description}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-poppins font-semibold text-primary-700 mb-2">Issuing Authority</h4>
                                <p className="text-primary-600 font-inter">{cert.issuer}</p>
                              </div>
                              <div>
                                <h4 className="font-poppins font-semibold text-primary-700 mb-2">Valid Until</h4>
                                <p className="text-primary-600 font-inter">
                                  {new Date(cert.validUntil).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <button className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300">
                              Download Certificate
                            </button>
                            <button className="flex-1 border-2 border-primary-600 text-primary-600 py-3 rounded-lg font-inter font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300">
                              Verify Online
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