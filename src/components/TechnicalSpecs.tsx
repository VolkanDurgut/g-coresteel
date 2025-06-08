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

const TechnicalSpecs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: 'Production Capacity',
      icon: BarChart3,
      content: {
        title: 'World-Class Production Capabilities',
        specs: [
          { label: 'Daily Production Capacity', value: '50+ units', icon: Gauge },
          { label: 'Maximum Power Range', value: '10kVA - 10MVA', icon: Zap },
          { label: 'Customization Lead Time', value: '2-6 weeks', icon: Clock },
          { label: 'Quality Testing Rate', value: '100%', icon: Shield }
        ]
      }
    },
    {
      id: 1,
      label: 'Technology Infrastructure',
      icon: Cpu,
      content: {
        title: 'Advanced Manufacturing Technology',
        specs: [
          { label: 'CNC Machine Park', value: 'Fully Automated', icon: Cpu },
          { label: 'Automated Winding Systems', value: 'AI-Controlled', icon: BarChart3 },
          { label: '3D Design & Simulation', value: 'CAD/CAM Integration', icon: Layers },
          { label: 'Digital Quality Control', value: 'Real-time Monitoring', icon: TestTube }
        ]
      }
    },
    {
      id: 2,
      label: 'Material Quality',
      icon: Layers,
      content: {
        title: 'Premium Materials & Components',
        specs: [
          { label: 'Silicon Steel', value: 'Premium Grade', icon: Layers },
          { label: 'Copper Windings', value: 'Imported Quality', icon: Zap },
          { label: 'Insulation Materials', value: 'High-Grade Standards', icon: Shield },
          { label: 'Environmental Coatings', value: 'Weather Resistant', icon: Gauge }
        ]
      }
    },
    {
      id: 3,
      label: 'Testing Standards',
      icon: TestTube,
      content: {
        title: 'Rigorous Quality Testing',
        specs: [
          { label: 'IEC Standards', value: 'Full Compliance', icon: TestTube },
          { label: 'Routine Test Procedures', value: '100% Coverage', icon: BarChart3 },
          { label: 'Type Test Capabilities', value: 'In-house Laboratory', icon: Cpu },
          { label: 'Reliability Testing', value: 'Long-term Analysis', icon: Clock }
        ]
      }
    }
  ];

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
              Our Technical Superiority
            </motion.h2>
            <motion.p
              className="text-xl text-primary-600 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Cutting-edge technology and rigorous standards that set us apart in the industry
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
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        : 'bg-accent-50 hover:bg-accent-100 text-primary-700'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        activeTab === tab.id
                          ? 'bg-white/20'
                          : 'bg-white shadow-sm group-hover:shadow-md'
                      } transition-all duration-300`}>
                        <tab.icon className={`w-6 h-6 ${
                          activeTab === tab.id ? 'text-white' : 'text-primary-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-lg mb-1">
                          {tab.label}
                        </h3>
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          activeTab === tab.id ? 'rotate-90' : 'group-hover:translate-x-1'
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
                    {tabs[activeTab].content.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tabs[activeTab].content.specs.map((spec, index) => (
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
                            <spec.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-poppins font-semibold text-primary-700 mb-1 group-hover:text-secondary-600 transition-colors">
                              {spec.label}
                            </h4>
                            <p className="text-primary-600 font-inter font-semibold">
                              {spec.value}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <motion.div
                    className="mt-8 p-6 bg-white rounded-xl border border-accent-200/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
                      <span className="font-inter font-semibold text-primary-700">
                        Key Advantage
                      </span>
                    </div>
                    <p className="text-primary-600 font-inter leading-relaxed">
                      {activeTab === 0 && "Our high-volume production capacity ensures rapid delivery without compromising quality standards."}
                      {activeTab === 1 && "State-of-the-art automation reduces human error and ensures consistent, precision manufacturing."}
                      {activeTab === 2 && "Premium materials sourced globally guarantee superior performance and extended operational life."}
                      {activeTab === 3 && "Comprehensive testing protocols exceed industry standards, ensuring reliability in demanding applications."}
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