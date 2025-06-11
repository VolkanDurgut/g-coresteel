import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Send,
  Clock,
  Globe,
  ChevronRight
} from 'lucide-react';
import { QuickActions, ROICalculator } from './InteractiveElements';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', projectType: '', budget: '', timeline: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { key: 'phone', value: '+90 537 529 33 31', action: () => window.open('tel:+905375293331'), icon: Phone, color: 'from-primary-500 to-primary-600' },
    { key: 'email', value: 'dogukan@g-coresteel.com', action: () => window.open('mailto:dogukan@g-coresteel.com'), icon: Mail, color: 'from-secondary-500 to-secondary-600' },
    { key: 'location', value: 'Istanbul, Turkey', action: () => console.log('Open map'), icon: MapPin, color: 'from-primary-600 to-secondary-500' },
    { key: 'whatsapp', value: t('contact.quick_contact.whatsapp_value'), action: () => window.open('https://wa.me/905375293331'), icon: MessageCircle, color: 'from-green-500 to-green-600' }
  ];

  const businessHours = [
    { day: t('contact.hours.weekdays'), hours: '8:00 AM - 6:00 PM' },
    { day: t('contact.hours.saturday'), hours: '9:00 AM - 2:00 PM' },
    { day: t('contact.hours.sunday'), hours: t('contact.hours.sunday_value') }
  ];

  // Get arrays from translation files
  const projectTypes = t('contact.project_types', { returnObjects: true }) as Array<string>;
  const budgetRanges = t('contact.budget_ranges', { returnObjects: true }) as Array<string>;
  const timelineOptions = t('contact.timeline_options', { returnObjects: true }) as Array<string>;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6">{t('contact.section_title')}</h2>
            <p className="text-xl text-primary-600 font-inter max-w-3xl mx-auto">{t('contact.section_subtitle')}</p>
          </motion.div>

          <motion.div className="mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
            <QuickActions />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg"><Send className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-primary-700">{t('contact.form.title')}</h3>
                    <p className="text-primary-600 font-inter">{t('contact.form.subtitle')}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-primary-700 font-inter font-semibold mb-2">{t('contact.form.labels.full_name')}</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={t('contact.form.placeholders.full_name')} required className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"/>
                        </div>
                        <div>
                            <label className="block text-primary-700 font-inter font-semibold mb-2">{t('contact.form.labels.company')}</label>
                            <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder={t('contact.form.placeholders.company')} required className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-primary-700 font-inter font-semibold mb-2">{t('contact.form.labels.email')}</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t('contact.form.placeholders.email')} required className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"/>
                        </div>
                        <div>
                            <label className="block text-primary-700 font-inter font-semibold mb-2">{t('contact.form.labels.phone')}</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={t('contact.form.placeholders.phone')} className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter"/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-primary-700 font-inter font-semibold mb-2">{t('contact.form.labels.project_type')}</label>
                        <select name="projectType" value={formData.projectType} onChange={handleInputChange} required className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter">
                            <option value="">{t('contact.form.selects.project_type')}</option>
                            {projectTypes.map((type, index) => (<option key={index} value={type}>{type}</option>))}
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-primary-700 font-inter font-semibold mb-2">{t('contact.form.labels.budget')}</label>
                            <select name="budget" value={formData.budget} onChange={handleInputChange} className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter">
                                <option value="">{t('contact.form.selects.budget')}</option>
                                {budgetRanges.map((range, index) => (<option key={index} value={range}>{range}</option>))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-primary-700 font-inter font-semibold mb-2">{t('contact.form.labels.timeline')}</label>
                            <select name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter">
                                <option value="">{t('contact.form.selects.timeline')}</option>
                                {timelineOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-primary-700 font-inter font-semibold mb-2">{t('contact.form.labels.details')}</label>
                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} placeholder={t('contact.form.placeholders.details')} required className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 font-inter resize-none"/>
                    </div>
                    <div>
                        <motion.button type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-4 rounded-lg font-inter font-bold text-lg hover:shadow-xl transition-all duration-300 group">
                            <span className="flex items-center justify-center gap-3">{t('contact.form.submit_button')}<Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                        </motion.button>
                    </div>
                </form>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-4" initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 1.0 }}>
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50">
                  <h3 className="text-2xl font-poppins font-bold text-primary-700 mb-6">{t('contact.quick_contact.title')}</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div key={index} onClick={info.action} whileHover={{ scale: 1.02, x: 5 }} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-accent-50 to-primary-50 hover:shadow-md transition-all duration-300 group cursor-pointer">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white group-hover:shadow-md transition-shadow`}><info.icon className="w-5 h-5" /></div>
                        <div>
                          <div className="text-primary-600 font-inter text-sm font-semibold">{t(`contact.quick_contact.${info.key}`)}</div>
                          <div className="text-primary-700 font-inter font-semibold">{info.value}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-primary-500 ml-auto group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <ROICalculator />

                <motion.div
                  className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.6 }}
                >
                  <div className="flex items-center gap-3 mb-6"><Clock className="w-6 h-6 text-primary-600" /><h3 className="text-xl font-poppins font-bold text-primary-700">{t('contact.hours.title')}</h3></div>
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-accent-200 last:border-0">
                      <span className="text-primary-600 font-inter">{schedule.day}</span>
                      <span className="text-primary-700 font-inter font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.8 }}
                >
                  <div className="flex items-center gap-3 mb-6"><Globe className="w-6 h-6 text-primary-600" /><h3 className="text-xl font-poppins font-bold text-primary-700">{t('contact.location.title')}</h3></div>
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center border border-accent-200">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                      <p className="text-primary-700 font-inter font-semibold">{t('contact.quick_contact.location_value', {defaultValue: 'Istanbul, Turkey'})}</p>
                      <p className="text-primary-600 font-inter text-sm">{t('contact.location.map_text')}</p>
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
