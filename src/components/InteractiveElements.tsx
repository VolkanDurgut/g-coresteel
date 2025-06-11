import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Zap, 
  Gauge, 
  Factory, 
  Calendar,
  Calculator,
  Video,
  Download,
  Phone
} from 'lucide-react';

// ROI Calculator Widget
export const ROICalculator: React.FC = () => {
  const { t } = useTranslation();
  const [inputs, setInputs] = useState({ currentCost: 100000, efficiency: 85, targetEfficiency: 95 });
  const [roi, setROI] = useState(0);

  useEffect(() => {
    const savings = (inputs.currentCost * (inputs.targetEfficiency - inputs.efficiency)) / 100;
    const calculatedROI = (savings / inputs.currentCost) * 100;
    setROI(Math.max(0, calculatedROI));
  }, [inputs]);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-secondary-600" />
        <h3 className="text-xl font-poppins font-bold text-primary-700">{t('interactive.roi.title')}</h3>
      </div>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-inter font-semibold text-primary-700 mb-2">{t('interactive.roi.current_cost')}</label>
          <input type="number" value={inputs.currentCost} onChange={(e) => setInputs({...inputs, currentCost: Number(e.target.value)})} className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-inter font-semibold text-primary-700 mb-2">{t('interactive.roi.current_efficiency')}</label>
          <input type="range" min="70" max="98" value={inputs.efficiency} onChange={(e) => setInputs({...inputs, efficiency: Number(e.target.value)})} className="w-full" />
          <span className="text-primary-600 font-inter">{inputs.efficiency}%</span>
        </div>
        <div>
          <label className="block text-sm font-inter font-semibold text-primary-700 mb-2">{t('interactive.roi.target_efficiency')}</label>
          <input type="range" min="85" max="99.5" step="0.1" value={inputs.targetEfficiency} onChange={(e) => setInputs({...inputs, targetEfficiency: Number(e.target.value)})} className="w-full" />
          <span className="text-primary-600 font-inter">{inputs.targetEfficiency}%</span>
        </div>
      </div>
      <motion.div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl p-6 text-center" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="text-3xl font-orbitron font-bold text-secondary-600 mb-2">{roi.toFixed(1)}%</div>
        <div className="text-primary-700 font-inter font-semibold">{t('interactive.roi.potential_roi')}</div>
      </motion.div>
    </motion.div>
  );
};

// Real-time Power Consumption Simulator
export const PowerSimulator: React.FC = () => {
  const { t } = useTranslation();
  const [power, setPower] = useState(75);
  const [efficiency, setEfficiency] = useState(92.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setPower(prev => Math.max(50, Math.min(100, prev + (Math.random() - 0.5) * 10)));
      setEfficiency(prev => Math.max(85, Math.min(99, prev + (Math.random() - 0.5) * 2)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="bg-gradient-to-br from-dark-800 to-primary-900 rounded-2xl p-8 text-white" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-6"><Gauge className="w-6 h-6 text-secondary-400" /><h3 className="text-xl font-poppins font-bold">{t('interactive.power_monitor.title')}</h3></div>
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <motion.div className="text-4xl font-orbitron font-bold text-secondary-400 mb-2" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>{power.toFixed(1)}%</motion.div>
          <div className="text-white/80 font-inter">{t('interactive.power_monitor.power_load')}</div>
          <div className="w-full bg-white/20 rounded-full h-2 mt-2"><motion.div className="bg-secondary-500 h-2 rounded-full" style={{ width: `${power}%` }} transition={{ duration: 0.5 }}/></div>
        </div>
        <div className="text-center">
          <motion.div className="text-4xl font-orbitron font-bold text-green-400 mb-2" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>{efficiency.toFixed(1)}%</motion.div>
          <div className="text-white/80 font-inter">{t('interactive.power_monitor.efficiency')}</div>
          <div className="w-full bg-white/20 rounded-full h-2 mt-2"><motion.div className="bg-green-500 h-2 rounded-full" style={{ width: `${efficiency}%` }} transition={{ duration: 0.5 }}/></div>
        </div>
      </div>
      <motion.div className="mt-6 p-4 bg-white/10 rounded-lg" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }}>
        <div className="flex items-center gap-2 text-sm text-white/80"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>{t('interactive.power_monitor.status')}</div>
      </motion.div>
    </motion.div>
  );
};

// Interactive Project Timeline
export const ProjectTimeline: React.FC = () => {
  const { t } = useTranslation();
  const [activePhase, setActivePhase] = useState(0);

  const phaseKeys = ['consultation', 'manufacturing', 'testing', 'installation'];
  const phaseIcons = [Calculator, Factory, Gauge, Zap];
  const phaseDurations = ['2-3 weeks', '4-8 weeks', '1-2 weeks', '1-3 weeks'];

  return (
    <motion.div className="bg-white rounded-2xl shadow-xl p-8 border border-accent-200/50" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-8"><Calendar className="w-6 h-6 text-primary-600" /><h3 className="text-2xl font-poppins font-bold text-primary-700">{t('interactive.timeline.title')}</h3></div>
      <div className="space-y-4">
        {phaseKeys.map((key, index) => {
          const Icon = phaseIcons[index];
          return (
          <motion.div key={index} className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${activePhase === index ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-secondary-500' : 'bg-accent-50 hover:bg-accent-100 border-2 border-transparent'}`} onClick={() => setActivePhase(index)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${activePhase === index ? 'bg-secondary-500 text-white' : 'bg-white text-primary-600'} transition-all duration-300`}><Icon className="w-5 h-5" /></div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-poppins font-semibold text-primary-700">{t(`interactive.timeline.phases.${key}.title`)}</h4>
                  <span className="text-secondary-600 font-inter font-semibold">{phaseDurations[index]}</span>
                </div>
                <AnimatePresence>
                  {activePhase === index && (
                    <motion.p className="text-primary-600 font-inter text-sm" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                      {t(`interactive.timeline.phases.${key}.description`)}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )})}
      </div>
    </motion.div>
  );
};

// Quick Action Buttons
export const QuickActions: React.FC = () => {
  const { t } = useTranslation();

  const actions = [
    { key: 'video_call', icon: Video, color: 'from-blue-500 to-blue-600', action: () => console.log('Schedule video call') },
    { key: 'instant_quote', icon: Calculator, color: 'from-secondary-500 to-secondary-600', action: () => console.log('Get instant quote') },
    { key: 'download_catalog', icon: Download, color: 'from-primary-500 to-primary-600', action: () => console.log('Download catalog') },
    { key: 'call_expert', icon: Phone, color: 'from-green-500 to-green-600', action: () => window.open('tel:+905375293331') }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <motion.button key={index} className={`bg-gradient-to-r ${action.color} text-white p-4 rounded-xl font-inter font-semibold text-sm hover:shadow-lg transition-all duration-300 group`} onClick={action.action} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
          <action.icon className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          {t(`interactive.quick_actions.${action.key}`)}
        </motion.button>
      ))}
    </div>
  );
};
