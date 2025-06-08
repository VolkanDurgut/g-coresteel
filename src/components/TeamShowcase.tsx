import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Award, 
  GraduationCap, 
  Briefcase,
  Mail,
  Linkedin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const TeamShowcase: React.FC = () => {
  const [currentMember, setCurrentMember] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Mehmet Yılmaz',
      position: 'Chief Technology Officer',
      department: 'Engineering & R&D',
      experience: '15+ years',
      education: 'PhD in Electrical Engineering, ITU',
      specialization: 'Power Systems & Transformer Design',
      achievements: [
        '50+ Published Research Papers',
        'IEEE Senior Member',
        'Patent Holder - Advanced Cooling Systems'
      ],
      bio: 'Leading our technical innovation with extensive experience in power transformer design and advanced cooling technologies.',
      email: 'mehmet.yilmaz@g-coresteel.com',
      linkedin: '#',
      avatar: 'MY'
    },
    {
      id: 2,
      name: 'Eng. Sarah Johnson',
      position: 'Head of Quality Assurance',
      department: 'Quality Control',
      experience: '12+ years',
      education: 'MSc in Materials Engineering, MIT',
      specialization: 'Quality Systems & Testing Protocols',
      achievements: [
        'ISO 9001 Lead Auditor',
        'Six Sigma Black Belt',
        'Quality Excellence Award 2023'
      ],
      bio: 'Ensuring the highest quality standards through rigorous testing protocols and continuous improvement initiatives.',
      email: 'sarah.johnson@g-coresteel.com',
      linkedin: '#',
      avatar: 'SJ'
    },
    {
      id: 3,
      name: 'Eng. Ahmed Al-Rashid',
      position: 'Senior Project Manager',
      department: 'Project Management',
      experience: '10+ years',
      education: 'BSc in Industrial Engineering, AUB',
      specialization: 'Large-Scale Project Delivery',
      achievements: [
        'PMP Certified',
        '100+ Successful Projects',
        'On-Time Delivery Rate: 98%'
      ],
      bio: 'Managing complex transformer projects from conception to delivery with exceptional attention to detail and timeline management.',
      email: 'ahmed.alrashid@g-coresteel.com',
      linkedin: '#',
      avatar: 'AA'
    },
    {
      id: 4,
      name: 'Dr. Elena Petrov',
      position: 'R&D Director',
      department: 'Research & Development',
      experience: '18+ years',
      education: 'PhD in Power Electronics, TU Delft',
      specialization: 'Smart Grid Technologies',
      achievements: [
        '30+ International Patents',
        'Innovation Award Winner',
        'Smart Grid Pioneer'
      ],
      bio: 'Driving innovation in smart transformer technologies and sustainable energy solutions for the future.',
      email: 'elena.petrov@g-coresteel.com',
      linkedin: '#',
      avatar: 'EP'
    }
  ];

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-700 mb-6">
              Meet Our Engineering Excellence Team
            </h2>
            <p className="text-xl text-primary-600 font-inter max-w-3xl mx-auto">
              World-class engineers and specialists driving innovation in transformer technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Team Member Cards */}
            <div className="lg:col-span-4">
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      currentMember === index
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        : 'bg-accent-50 hover:bg-accent-100 text-primary-700'
                    }`}
                    onClick={() => setCurrentMember(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center font-poppins font-bold text-lg ${
                        currentMember === index
                          ? 'bg-white/20 text-white'
                          : 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white'
                      }`}>
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg">
                          {member.name}
                        </h3>
                        <p className={`font-inter text-sm ${
                          currentMember === index ? 'text-white/80' : 'text-primary-600'
                        }`}>
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Member Details */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMember}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 border border-accent-200/50"
                >
                  {(() => {
                    const member = teamMembers[currentMember];
                    return (
                      <>
                        {/* Member Header */}
                        <div className="flex items-start gap-6 mb-8">
                          <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                            <span className="text-white font-poppins font-bold text-2xl">
                              {member.avatar}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h2 className="text-3xl font-poppins font-bold text-primary-700 mb-2">
                              {member.name}
                            </h2>
                            <p className="text-xl text-secondary-600 font-inter font-semibold mb-2">
                              {member.position}
                            </p>
                            <p className="text-primary-600 font-inter">
                              {member.department}
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <motion.button
                              className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center text-primary-600 hover:text-secondary-600 hover:shadow-xl transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Mail className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                              className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center text-primary-600 hover:text-secondary-600 hover:shadow-xl transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Linkedin className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>

                        {/* Member Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                              <Briefcase className="w-5 h-5 text-primary-600" />
                              <span className="font-poppins font-semibold text-primary-700">Experience</span>
                            </div>
                            <p className="text-primary-600 font-inter">{member.experience}</p>
                          </div>

                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                              <GraduationCap className="w-5 h-5 text-primary-600" />
                              <span className="font-poppins font-semibold text-primary-700">Education</span>
                            </div>
                            <p className="text-primary-600 font-inter text-sm">{member.education}</p>
                          </div>

                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                              <Award className="w-5 h-5 text-primary-600" />
                              <span className="font-poppins font-semibold text-primary-700">Specialization</span>
                            </div>
                            <p className="text-primary-600 font-inter text-sm">{member.specialization}</p>
                          </div>
                        </div>

                        {/* Bio */}
                        <div className="mb-8">
                          <h4 className="font-poppins font-semibold text-primary-700 mb-3">About</h4>
                          <p className="text-primary-600 font-inter leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="font-poppins font-semibold text-primary-700 mb-4">Key Achievements</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {member.achievements.map((achievement, index) => (
                              <motion.div
                                key={index}
                                className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-secondary-500"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <p className="text-primary-600 font-inter text-sm font-semibold">
                                  {achievement}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevMember}
                  className="flex items-center gap-2 px-6 py-3 bg-white shadow-lg rounded-lg text-primary-600 hover:text-secondary-600 hover:shadow-xl transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                <div className="flex gap-2">
                  {teamMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMember(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentMember
                          ? 'bg-secondary-500 scale-125'
                          : 'bg-accent-300 hover:bg-accent-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextMember}
                  className="flex items-center gap-2 px-6 py-3 bg-white shadow-lg rounded-lg text-primary-600 hover:text-secondary-600 hover:shadow-xl transition-all duration-300"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;