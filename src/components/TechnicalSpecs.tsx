import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Cpu, 
  Layers, 
  TestTube, 
  ChevronRight,
  Gauge,
  Zap,
  Shield,
  Clock
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TechnicalSpecs: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState(0);
  
  // Veri yapısı basitleştirildi. Tüm metinler artık çeviri dosyasından geliyor.
  const tabsData = [
    { key: 'production_capacity', icon: BarChart3, specs: [
        { key: 'daily_capacity', icon: Gauge },
        { key: 'power_range', icon: Zap },
        { key: 'lead_time', icon: Clock },
        { key: 'testing_rate', icon: Shield }
    ]},
    { key: 'technology_infrastructure', icon: Cpu, specs: [
        { key: 'cnc_park', icon: Cpu },
        { key: 'winding_systems', icon: BarChart3 },
        { key: 'design_simulation', icon: Layers },
        { key: 'quality_control', icon: TestTube }
    ]},
    { key: 'material_quality', icon: Layers, specs: [
        { key: 'silicon_steel', icon: Layers },
        { key: 'copper_windings', icon: Zap },
        { key: 'insulation_materials', icon: Shield },
        { key: 'environmental_coatings', icon: Gauge }
    ]},
    { key: 'testing_standards', icon: TestTube, specs: [
        { key: 'iec_standards', icon: TestTube },
        { key: 'routine_procedures', icon: BarChart3 },
        { key: 'type_test', icon: Cpu },
        { key: 'reliability_testing', icon: Clock }
    ]}
  ];
  
  const activeTabKey = tabsData[activeTab].key;

  return (
    <section className="py-20 bg-white overflow-hidden">
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
              {t('technical_specs.section_title')}
            </motion.h2>
            <motion.p
              className="text-xl text-primary-600 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {t('technical_specs.section_subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Tabs Navigation */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-3">
                {tabsData.map((tab, index) => (
                  <motion.button
                    key={index}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        : 'bg-accent-50 hover:bg-accent-100 text-primary-700'
                    }`}
                    onClick={() => setActiveTab(index)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        activeTab === index
                          ? 'bg-white/20'
                          : 'bg-white shadow-sm group-hover:shadow-md'
                      } transition-all duration-300`}>
                        <tab.icon className={`w-6 h-6 ${
                          activeTab === index ? 'text-white' : 'text-primary-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-lg mb-1">
                          {t(`technical_specs.tabs.${tab.key}.label`)}
                        </h3>
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          activeTab === index ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`} />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 border border-accent-200/50"
                >
                  <h3 className="text-2xl font-poppins font-bold text-primary-700 mb-8">
                    {t(`technical_specs.tabs.${activeTabKey}.title`)}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tabsData[activeTab].specs.map((spec, index) => {
                      const SpecIcon = spec.icon;
                      return (
                      <motion.div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-accent-200/50 group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-lg group-hover:shadow-md transition-shadow">
                            <SpecIcon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-poppins font-semibold text-primary-700 mb-1 group-hover:text-secondary-600 transition-colors">
                              {t(`technical_specs.tabs.${activeTabKey}.specs.${spec.key}`)}
                            </h4>
                            <p className="text-primary-600 font-inter font-semibold">
                              {t(`technical_specs.tabs.${activeTabKey}.specs.${spec.key}_value`)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )})}
                  </div>

                  <motion.div
                    className="mt-8 p-6 bg-white rounded-xl border border-accent-200/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
                      <span className="font-inter font-semibold text-primary-700">
                        {t('technical_specs.key_advantage')}
                      </span>
                    </div>
                    <p className="text-primary-600 font-inter leading-relaxed">
                      {t(`technical_specs.tabs.${activeTabKey}.advantage`)}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
