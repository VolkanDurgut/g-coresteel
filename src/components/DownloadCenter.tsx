import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Download, 
  FileText, 
  Video, 
  Search,
  Filter,
  Eye,
  Star
} from 'lucide-react';

const DownloadCenter: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState<number | null>(null);

  const categories = [
    { id: 'all', count: 6 },
    { id: 'catalogs', count: 1 },
    { id: 'technical', count: 2 },
    { id: 'certificates', count: 1 },
    { id: 'case_studies', count: 1 },
    { id: 'videos', count: 1 }
  ];

  const documents = [
    { id: 1, key: 'catalog_2024', category: 'catalogs', type: 'PDF', size: '15.2 MB', pages: 48, downloads: 1250, rating: 4.9, date: '2024-01-15', featured: true, icon: FileText },
    { id: 2, key: 'tech_specs', category: 'technical', type: 'PDF', size: '8.7 MB', pages: 32, downloads: 890, rating: 4.8, date: '2024-01-10', featured: false, icon: FileText },
    { id: 3, key: 'iso_cert', category: 'certificates', type: 'PDF', size: '2.1 MB', pages: 4, downloads: 567, rating: 5.0, date: '2023-12-20', featured: false, icon: FileText },
    { id: 4, key: 'mfg_video', category: 'videos', type: 'MP4', size: '125 MB', duration: '8:45', downloads: 423, rating: 4.7, date: '2024-01-05', featured: true, icon: Video },
    { id: 5, key: 'case_study', category: 'case-studies', type: 'PDF', size: '6.3 MB', pages: 16, downloads: 334, rating: 4.6, date: '2023-12-15', featured: false, icon: FileText },
    { id: 6, key: 'install_guide', category: 'technical', type: 'PDF', size: '12.4 MB', pages: 28, downloads: 756, rating: 4.8, date: '2024-01-08', featured: false, icon: FileText }
  ];

  const filteredDocuments = documents.filter(doc => {
    const title = t(`downloads.documents.${doc.key}.title`).toLowerCase();
    const description = t(`downloads.documents.${doc.key}.description`).toLowerCase();
    const matchesSearch = title.includes(searchTerm.toLowerCase()) || description.includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (document: any) => console.log(`Downloading: ${document.key}`);

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6">{t('downloads.section_title')}</h2>
            <p className="text-xl text-primary-600 font-inter max-w-3xl mx-auto">{t('downloads.section_subtitle')}</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-accent-200/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500" />
                <input
                  type="text"
                  placeholder={t('downloads.search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent font-inter"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent font-inter appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {t(`downloads.filters.${category.id}`)} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-accent-200/50 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
                  {doc.featured && (
                    <div className="absolute top-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-inter font-semibold">
                      {t('downloads.card.featured')}
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <doc.icon className="w-16 h-16 text-primary-600/50" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-primary-700 font-inter font-semibold text-sm">{doc.type}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-poppins font-bold text-primary-700 mb-2 group-hover:text-secondary-600 transition-colors">
                    {t(`downloads.documents.${doc.key}.title`)}
                  </h3>
                  <p className="text-primary-600 font-inter text-sm leading-relaxed mb-4">
                    {t(`downloads.documents.${doc.key}.description`)}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-primary-500">
                    <div>
                      <span className="block">{t('downloads.card.size')}: {doc.size}</span>
                      {doc.pages && <span className="block">{t('downloads.card.pages')}: {doc.pages}</span>}
                      {doc.duration && <span className="block">{t('downloads.card.duration')}: {doc.duration}</span>}
                    </div>
                    <div>
                      <span className="block">{t('downloads.card.downloads')}: {doc.downloads}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{doc.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => handleDownload(doc)}
                      className="flex-1 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300 group flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4 group-hover:translate-y-[-1px] transition-transform" />
                      {t('downloads.card.download_button')}
                    </motion.button>
                    <motion.button
                      onClick={() => setSelectedDocument(doc.id)}
                      className="px-4 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <FileText className="w-16 h-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-700 mb-2">{t('downloads.no_results.title')}</h3>
              <p className="text-primary-600 font-inter">{t('downloads.no_results.subtitle')}</p>
            </motion.div>
          )}

          <AnimatePresence>
            {selectedDocument && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDocument(null)}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const doc = documents.find(d => d.id === selectedDocument);
                    if (!doc) return null;
                    return (
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h2 className="text-2xl font-poppins font-bold text-primary-700 mb-2">{t(`downloads.documents.${doc.key}.title`)}</h2>
                            <p className="text-primary-600 font-inter">{t(`downloads.documents.${doc.key}.description`)}</p>
                          </div>
                          <button onClick={() => setSelectedDocument(null)} className="text-primary-500 hover:text-primary-700">✕</button>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 mb-6 text-center">
                          <doc.icon className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                          <p className="text-primary-600 font-inter">{t('downloads.modal.preview')}</p>
                        </div>
                        <div className="flex gap-4">
                          <button
                            onClick={() => handleDownload(doc)}
                            className="flex-1 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <Download className="w-5 h-5" />
                            {t('downloads.modal.download_button', { type: doc.type })}
                          </button>
                        </div>
                      </div>
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

export default DownloadCenter;
