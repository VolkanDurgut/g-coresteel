import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Factory, 
  Building, 
  Construction, 
  Battery,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// 1. Adım: Proje görsellerini import ediyoruz
import imgPowerPlant from '../assets/project-power-plant.jpg';
import imgIndustrial from '../assets/project-industrial.jpg';
import imgInfrastructure from '../assets/project-infrastructure.jpg';
import imgRenewable from '../assets/project-renewable.jpg';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // 2. Adım: Veri yapısına 'image' alanını ekliyoruz
  const projects = [
    {
      key: 'power_plant',
      icon: Factory,
      image: imgPowerPlant,
      specs: { power: '20MVA', efficiency: '99.2%', duration: '6 months' },
      color: 'from-primary-500 to-primary-600'
    },
    {
      key: 'industrial_complex',
      icon: Building,
      image: imgIndustrial,
      specs: { units: '2500 KVA', solution: 'Customized', savings: '15% energy' },
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      key: 'infrastructure',
      icon: Construction,
      image: imgInfrastructure,
      specs: { scope: 'City grid', units: '100+ units', warranty: '2 years' },
      color: 'from-primary-600 to-secondary-500'
    },
    {
      key: 'renewable_energy',
      icon: Battery,
      image: imgRenewable,
      specs: { type: 'Solar farm', connection: 'Grid tie', integration: 'Smart grid' },
      color: 'from-green-500 to-green-600'
    }
  ];

  const testimonialKeys = ['mehmet_yilmaz', 'sarah_johnson', 'ahmed_al_rashid'];
  const testimonialRatings: { [key: string]: number } = {
    mehmet_yilmaz: 5,
    sarah_johnson: 5,
    ahmed_al_rashid: 5,
  };

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonialKeys.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6">
              {t('projects.section_title')}
            </h2>
            <p className="text-xl text-primary-600 font-inter max-w-3xl mx-auto">
              {t('projects.section_subtitle')}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-accent-200/50 group-hover:border-secondary-500/30">
                  {/* 3. Adım: İkon yerine 'img' etiketini kullanıyoruz */}
                  <div className={`h-48 bg-gray-300 relative overflow-hidden`}>
                    <img src={project.image} alt={t(`projects.cards.${project.key}.title`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-inter px-3 py-1 rounded-full">
                        {t(`projects.cards.${project.key}.category`)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-poppins font-bold text-primary-700 mb-2 group-hover:text-secondary-600 transition-colors">
                      {t(`projects.cards.${project.key}.title`)}
                    </h3>
                    <p className="text-primary-600 font-inter text-sm leading-relaxed mb-4 h-24">
                      {t(`projects.cards.${project.key}.description`)}
                    </p>
                    <div className="space-y-2 mb-4">
                      {Object.entries(project.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center text-sm">
                          <span className="text-primary-500 font-inter capitalize">
                            {t(`projects.spec_labels.${key}`)}:
                          </span>
                          <span className="text-primary-700 font-inter font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                    <motion.button
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-inter font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('projects.view_details_cta')}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Slider */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-poppins font-bold text-primary-700">
                {t('projects.testimonials.title')}
              </h3>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonialRatings[testimonialKeys[currentTestimonial]] || 0)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-primary-700 font-inter leading-relaxed mb-8 italic">
                    "{t(`projects.testimonials.data.${testimonialKeys[currentTestimonial]}.quote`)}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-poppins font-bold text-xl">
                        {t(`projects.testimonials.data.${testimonialKeys[currentTestimonial]}.author`)
                          .split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-poppins font-semibold text-primary-700">
                        {t(`projects.testimonials.data.${testimonialKeys[currentTestimonial]}.author`)}
                      </div>
                      <div className="text-primary-600 font-inter">
                        {t(`projects.testimonials.data.${testimonialKeys[currentTestimonial]}.position`)}
                      </div>
                      <div className="text-secondary-600 font-inter font-semibold">
                        {t(`projects.testimonials.data.${testimonialKeys[currentTestimonial]}.company`)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-600 hover:text-secondary-600 hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-600 hover:text-secondary-600 hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonialKeys.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-secondary-500 scale-125'
                        : 'bg-accent-300 hover:bg-accent-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
