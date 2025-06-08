import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Zap, Factory, Globe, BarChart3, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const coreValues = [
    {
      icon: Wrench,
      title: 'Technical Excellence',
      description: 'Cutting-edge engineering and precision manufacturing'
    },
    {
      icon: Zap,
      title: 'Innovative Solutions',
      description: 'Forward-thinking approaches to energy challenges'
    },
    {
      icon: Factory,
      title: 'Industrial Reliability',
      description: 'Robust systems built for demanding environments'
    },
    {
      icon: Globe,
      title: 'Sustainable Energy',
      description: 'Environmentally conscious power solutions'
    },
    {
      icon: BarChart3,
      title: 'Performance-Driven',
      description: 'Optimized efficiency and measurable results'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Dedicated partnership and superior service'
    }
  ];

  return (
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
              {/* Main Image Placeholder */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Factory className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                      <p className="text-primary-700 font-inter font-semibold text-lg">
                        Modern Manufacturing Facility
                      </p>
                      <p className="text-primary-600 font-inter">
                        Istanbul, Turkey
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-accent-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-2xl font-orbitron font-bold text-primary-600">99.8%</div>
                  <div className="text-sm text-primary-500 font-inter">Quality Rate</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-secondary-500 rounded-xl shadow-xl p-4 text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-2xl font-orbitron font-bold">ISO 9001</div>
                  <div className="text-sm font-inter opacity-90">Certified</div>
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
                Why G-Coresteel?
              </motion.h2>

              <motion.p
                className="text-lg text-primary-600 font-inter leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                With our groundbreaking solutions in the energy sector, we enhance our clients' operational efficiency, optimize their costs, and contribute to a sustainable future. Our commitment to excellence drives every aspect of our manufacturing process.
              </motion.p>

              {/* Core Values Grid */}
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
                        {value.title}
                      </h3>
                      <p className="text-sm text-primary-600 font-inter leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
              >
                <button className="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white px-8 py-4 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300 group">
                  Learn More About Us
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
  );
};

export default About;