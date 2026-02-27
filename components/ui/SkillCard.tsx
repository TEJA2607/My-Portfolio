'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-lg text-center hover:border-gray-700 transition-all duration-300 cursor-default"
    >
      <span className="text-sm text-gray-300">{name}</span>
    </motion.div>
  );
};
