import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Send,
  Clock,
  Globe,
  Award,
  ChevronRight,
  Calendar,
  Video,
  Calculator
} from 'lucide-react';
import { QuickActions, ROICalculator } from './InteractiveElements';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Dynamic form fields based on project type
    if (name === 'projectType') {
      // This could trigger additional fields or validation
      console.log('Project type changed:', value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+90 537 529 33 31',
      action: () => window.open('tel:+905375293331'),
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'dogukan@g-coresteel.com',
      action: () => window.open('mailto:dogukan@g-coresteel.com'),
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Istanbul, Turkey',
      action: () => console.log('Open map'),
      color: 'from-primary-600 to-secondary-500'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Direct Line Available',
      action: () => window.open('https://wa.me/905375293331'),
      color: 'from-green-500 to-green-600'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' }
  ];

  const projectTypes = [
    'Power Transformers (1-10 MVA)',
    'Power Transformers (10-50 MVA)',
    'Power Transformers (50+ MVA)',
    'Distribution Transformers',
    'Industrial Solutions',
    'Renewable Energy Integration',
    'Smart Grid Solutions',
    'Maintenance Services',
    'Technical Consultancy',
    'Custom Requirements'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000 - $5,000,000',
    'Over $5,000,000',
    'Prefer not to specify'
  ];

  const timelineOptions = [
    'Urgent (Within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Planning phase'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50 overflow-hidden">
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
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-xl text-primary-600 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Ready to power your project? Contact our experts for customized transformer solutions
            </motion.p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <QuickActions />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Enhanced Contact Form */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-primary-700">
                      Request a Quote
                    </h3>
                    <p className="text-primary-600 font-inter">
                      Get customized solutions for your project
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.0 }}
                    >
                      <label className="block text-primary-700 font-inter font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"
                        placeholder="Your full name"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.1 }}
                    >
                      <label className="block text-primary-700 font-inter font-semibold mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"
                        placeholder="Your company name"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 }}
                    >
                      <label className="block text-primary-700 font-inter font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"
                        placeholder="your@email.com"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.3 }}
                    >
                      <label className="block text-primary-700 font-inter font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"
                        placeholder="+90 xxx xxx xx xx"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4 }}
                  >
                    <label className="block text-primary-700 font-inter font-semibold mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"
                      required
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.5 }}
                    >
                      <label className="block text-primary-700 font-inter font-semibold mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.6 }}
                    >
                      <label className="block text-primary-700 font-inter font-semibold mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.7 }}
                  >
                    <label className="block text-primary-700 font-inter font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter resize-none"
                      placeholder="Please describe your project requirements, specifications, power ratings, environmental conditions, and any other relevant details..."
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.8 }}
                  >
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-4 rounded-lg font-inter font-bold text-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-3">
                        Send Quote Request
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information & ROI Calculator */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50">
                  <h3 className="text-2xl font-poppins font-bold text-primary-700 mb-6">
                    Quick Contact
                  </h3>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-accent-50 to-primary-50 hover:shadow-md transition-all duration-300 group cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        onClick={info.action}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white group-hover:shadow-md transition-shadow`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-primary-600 font-inter text-sm font-semibold">
                            {info.label}
                          </div>
                          <div className="text-primary-700 font-inter font-semibold">
                            {info.value}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-primary-500 ml-auto group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ROI Calculator */}
                <ROICalculator />

                {/* Business Hours */}
                <motion.div
                  className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-primary-600" />
                    <h3 className="text-xl font-poppins font-bold text-primary-700">
                      Business Hours
                    </h3>
                  </div>
                  
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-accent-200 last:border-0">
                      <span className="text-primary-600 font-inter">{schedule.day}</span>
                      <span className="text-primary-700 font-inter font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                  className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-primary-600" />
                    <h3 className="text-xl font-poppins font-bold text-primary-700">
                      Our Location
                    </h3>
                  </div>
                  
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center border border-accent-200">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                      <p className="text-primary-700 font-inter font-semibold">
                        Istanbul, Turkey
                      </p>
                      <p className="text-primary-600 font-inter text-sm">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;