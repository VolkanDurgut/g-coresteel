import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Leaf, 
  Microscope, 
  Smartphone,
  Wifi,
  Brain,
  Shield,
  Gauge,
  TrendingUp,
  Cpu
} from 'lucide-react';

const Innovation: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const innovations = [
    {
      icon: Zap,
      title: 'Smart Transformers',
      subtitle: 'IoT-Enabled Intelligence',
      features: [
        'IoT-enabled monitoring',
        'Predictive maintenance',
        'Remote diagnostics',
        'Real-time analytics'
      ],
      description: 'Next-generation transformers with integrated IoT sensors for intelligent monitoring and predictive maintenance.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Solutions',
      subtitle: 'Sustainable Technology',
      features: [
        'Energy-efficient designs',
        'Recyclable materials',
        'Carbon footprint reduction',
        'Green manufacturing'
      ],
      description: 'Environmentally conscious transformer solutions designed for sustainability and reduced environmental impact.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Microscope,
      title: 'R&D Innovations',
      subtitle: 'Advanced Engineering',
      features: [
        'Advanced cooling systems',
        'Noise reduction technology',
        'Compact design solutions',
        'Material optimization'
      ],
      description: 'Cutting-edge research and development driving the future of transformer technology and efficiency.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: Smartphone,
      title: 'Digital Integration',
      subtitle: 'Connected Solutions',
      features: [
        'Mobile monitoring apps',
        'Cloud-based analytics',
        'AI-powered optimization',
        'Digital twin technology'
      ],
      description: 'Seamless digital integration with mobile applications and cloud-based monitoring systems.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ];

  const techFeatures = [
    { icon: Wifi, label: 'IoT Connectivity', value: '24/7 Monitoring' },
    { icon: Brain, label: 'AI Analytics', value: 'Predictive Intelligence' },
    { icon: Shield, label: 'Cybersecurity', value: 'Enterprise Grade' },
    { icon: Gauge, label: 'Performance', value: '99.9% Uptime' }
  ];

  return (
    <section id="innovation" className="py-20 bg-gradient-to-br from-dark-800 via-primary-900 to-dark-900 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-industrial-pattern opacity-5"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
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
              The Future of Transformer Technology
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Leading innovation in intelligent, sustainable, and connected power solutions
            </motion.p>
          </motion.div>

          {/* Innovation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-secondary-500/50 transition-all duration-500 hover:bg-white/15 group-hover:scale-105">
                  {/* Icon and Title */}
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
                        {innovation.title}
                      </h3>
                      <p className="text-secondary-400 font-inter font-semibold">
                        {innovation.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 font-inter leading-relaxed mb-6">
                    {innovation.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {innovation.features.map((feature, featureIndex) => (
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

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Features */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-poppins font-bold text-white mb-4">
                Technology Highlights
              </h3>
              <p className="text-white/70 font-inter">
                Key technological advantages that define our innovation leadership
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
                      {feature.label}
                    </div>
                    <div className="text-white/70 font-inter text-sm">
                      {feature.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
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
              Explore Innovation Portfolio
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