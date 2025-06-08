import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Zap, 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' }
  ];

  const services = [
    { label: 'Core Transformers', href: '#services' },
    { label: 'Industrial Solutions', href: '#services' },
    { label: 'Technical Consultancy', href: '#services' },
    { label: 'Maintenance Services', href: '#services' }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-5"></div>
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-secondary-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Settings className="w-12 h-12 text-white animate-rotate-slow" />
                  <Zap className="absolute inset-0 w-7 h-7 m-auto text-secondary-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-poppins font-bold text-white">
                    G-CORESTEEL
                  </h1>
                  <p className="text-secondary-400 font-inter text-sm">
                    Excellence in Manufacturing
                  </p>
                </div>
              </div>

              <p className="text-white/80 font-inter leading-relaxed mb-6 max-w-md">
                With over 20 years of experience in core transformer manufacturing, we deliver innovative energy solutions from Istanbul to the world, setting new standards in industrial excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80 hover:text-secondary-400 transition-colors">
                  <Phone className="w-5 h-5 text-secondary-400" />
                  <span className="font-inter">+90 537 529 33 31</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 hover:text-secondary-400 transition-colors">
                  <Mail className="w-5 h-5 text-secondary-400" />
                  <span className="font-inter">dogukan@g-coresteel.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-secondary-400" />
                  <span className="font-inter">Istanbul, Turkey</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-poppins font-bold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-secondary-400 font-inter transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-poppins font-bold text-white mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href={service.href}
                      className="text-white/80 hover:text-secondary-400 font-inter transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              className="text-white/60 font-inter text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>© 2024 G-Coresteel. All rights reserved.</p>
              <p className="mt-1">Excellence in Core Transformer Manufacturing</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-secondary-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-r from-secondary-600 to-secondary-500 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;