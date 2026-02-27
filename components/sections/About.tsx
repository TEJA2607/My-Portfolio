'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '@/lib/constants';
import { GraduationCap, Trophy } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Building Systems That Scale
          </h3>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed mb-12">
            <p>
              I specialize in backend engineering with a strong focus on Java and Spring Boot. My
              work revolves around designing secure, scalable systems that handle complex business
              logic and high-concurrency scenarios.
            </p>
            <p>
              From implementing robust REST APIs to managing distributed transactions, I approach
              every problem with clean architecture principles and a deep understanding of data
              structures and algorithms.
            </p>
            <p>
              My technical foundation is built on practical problem-solving, continuous learning,
              and delivering production-grade solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                  <p className="text-gray-400">{DEVELOPER_INFO.education}</p>
                  <p className="text-sm text-gray-500 mt-1">Computer Science & Engineering</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Trophy className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">DSA Proficiency</h4>
                  <p className="text-gray-400">Strong in Data Structures & Algorithms</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Smart Interviews: {DEVELOPER_INFO.smartInterviewsRank}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
