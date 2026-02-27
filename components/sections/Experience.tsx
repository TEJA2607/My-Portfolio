'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/lib/constants';
import { ExperienceItem } from '@/components/ui/ExperienceItem';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Professional Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Experience & Certifications
          </h3>

          <div className="relative">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
