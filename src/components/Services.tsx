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

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Settings,
      title: 'Core Transformer Manufacturing',
      description: 'Custom design and production with high-efficiency technology and international quality standards.',
      features: [
        'Custom design and engineering',
        'High-efficiency technology',
        'International quality standards',
        'Advanced cooling systems'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Zap,
      title: 'Industrial Transformer Solutions',
      description: 'Comprehensive power and distribution transformers for specialized industrial applications.',
      features: [
        'Power transformers (1-100 MVA)',
        'Distribution transformers',
        'Specialized applications',
        'Custom voltage ratings'
      ],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Users,
      title: 'Technical Consultancy',
      description: 'Expert analysis and consulting for energy efficiency optimization and project development.',
      features: [
        'Energy efficiency analysis',
        'System optimization',
        'Project development consulting',
        'Performance assessments'
      ],
      color: 'from-primary-600 to-secondary-500'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Service',
      description: 'Comprehensive maintenance programs with emergency response and performance monitoring.',
      features: [
        'Periodic maintenance programs',
        'Emergency response service',
        'Performance monitoring systems',
        '24/7 technical support'
      ],
      color: 'from-secondary-600 to-primary-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control with international certifications and comprehensive testing.',
      features: [
        'ISO 9001:2015 certified',
        'CE conformity certified',
        'Comprehensive testing procedures',
        'Quality documentation'
      ],
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'End-to-end project management with timeline control and 24/7 project tracking.',
      features: [
        'End-to-end project management',
        'Timeline and budget control',
        '24/7 project tracking',
        'Regular progress reports'
      ],
      color: 'from-secondary-500 to-primary-600'
    }
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
              Our Comprehensive Transformer Solutions & Services
            </motion.h2>
            <motion.p
              className="text-xl text-primary-600 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              From design to deployment, we provide complete transformer solutions that power industries worldwide
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-bold text-primary-700 mb-4 group-hover:text-secondary-600 transition-colors relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary-600 font-inter leading-relaxed mb-6 relative z-10">
                    {service.description}
                  </p>

                  {/* Features */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        className="space-y-3 mb-6 relative z-10"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.features.map((feature, featureIndex) => (
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

                  {/* CTA */}
                  <motion.button
                    className="flex items-center gap-2 text-secondary-600 font-inter font-semibold group-hover:text-secondary-500 transition-colors relative z-10"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
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
              Request Custom Solution
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