'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';
import { SkillCard } from '@/components/ui/SkillCard';

export const Skills: React.FC = () => {
  const categories = ['Backend', 'Frontend', 'Database', 'Tools'] as const;

  return (
    <section id="skills" className="py-32 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Technical Skills
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Technology Stack
          </h3>

          <div className="space-y-12">
            {categories.map((category, categoryIndex) => {
              const categorySkills = SKILLS.filter((skill) => skill.category === category);

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">{category}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {categorySkills.map((skill, index) => (
                      <SkillCard key={skill.name} name={skill.name} index={index} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
