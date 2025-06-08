import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Factory, 
  Building, 
  Construction, 
  Battery,
  Star,
  Calendar,
  Gauge,
  TrendingUp,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      icon: Factory,
      title: 'Power Plant Project',
      category: 'Energy Generation',
      specs: {
        power: '50MVA',
        efficiency: '99.2%',
        duration: '6 months'
      },
      description: 'Major power plant transformer installation with cutting-edge efficiency ratings.',
      image: 'power-plant',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Building,
      title: 'Industrial Complex',
      category: 'Manufacturing',
      specs: {
        units: '25 transformers',
        solution: 'Customized',
        savings: '15% energy'
      },
      description: 'Comprehensive transformer solution for large-scale industrial manufacturing facility.',
      image: 'industrial',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Construction,
      title: 'Infrastructure Project',
      category: 'Urban Development',
      specs: {
        scope: 'City grid',
        units: '100+ units',
        warranty: '2 years'
      },
      description: 'City-wide electrical grid reinforcement with modern transformer technology.',
      image: 'infrastructure',
      color: 'from-primary-600 to-secondary-500'
    },
    {
      icon: Battery,
      title: 'Renewable Energy',
      category: 'Green Technology',
      specs: {
        type: 'Solar farm',
        connection: 'Grid tie',
        integration: 'Smart grid'
      },
      description: 'Solar farm transformer solutions with smart grid integration capabilities.',
      image: 'renewable',
      color: 'from-secondary-600 to-primary-500'
    }
  ];

  const testimonials = [
    {
      quote: "Working with G-Coresteel played a critical role in the success of our project. Their technical expertise and commitment to quality exceeded our expectations.",
      author: "Dr. Mehmet Yılmaz",
      position: "Chief Engineer",
      company: "TurkPower Industries",
      rating: 5
    },
    {
      quote: "The custom transformer solutions provided by G-Coresteel have significantly improved our operational efficiency and reduced our energy costs by 15%.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "Global Manufacturing Corp",
      rating: 5
    },
    {
      quote: "Outstanding project management and technical support. G-Coresteel delivered on time and within budget while maintaining the highest quality standards.",
      author: "Ahmed Al-Rashid",
      position: "Project Manager",
      company: "Middle East Energy Solutions",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            <motion.h2
              className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Success Stories & Reference Projects
            </motion.h2>
            <motion.p
              className="text-xl text-primary-600 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Proven excellence across diverse industries and challenging environments
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-accent-200/50 group-hover:border-secondary-500/30">
                  {/* Project Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-white/80" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-inter px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-poppins font-bold text-primary-700 mb-2 group-hover:text-secondary-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-primary-600 font-inter text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Specs */}
                    <div className="space-y-2 mb-4">
                      {Object.entries(project.specs).map(([key, value], specIndex) => (
                        <div key={specIndex} className="flex justify-between items-center text-sm">
                          <span className="text-primary-500 font-inter capitalize">{key}:</span>
                          <span className="text-primary-700 font-inter font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-inter font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project Details
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
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-poppins font-bold text-primary-700">
                What Our Clients Say
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
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl text-primary-700 font-inter leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-poppins font-bold text-xl">
                        {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-poppins font-semibold text-primary-700">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-primary-600 font-inter">
                        {testimonials[currentTestimonial].position}
                      </div>
                      <div className="text-secondary-600 font-inter font-semibold">
                        {testimonials[currentTestimonial].company}
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
                {testimonials.map((_, index) => (
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