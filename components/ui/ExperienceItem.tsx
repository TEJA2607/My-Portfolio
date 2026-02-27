'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/lib/types';

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 w-px h-full bg-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
      </div>

      <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
            <p className="text-sm text-gray-400">{experience.organization}</p>
          </div>
          <span className="text-sm text-gray-500">{experience.period}</span>
        </div>
        {experience.description && (
          <p className="text-sm text-gray-400 leading-relaxed">{experience.description}</p>
        )}
      </div>
    </motion.div>
  );
};
