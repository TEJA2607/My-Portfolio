'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import { ProjectCard } from '@/components/ui/ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Featured Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected Projects
          </h3>
          <p className="text-lg text-gray-400 mb-16 max-w-3xl">
            A collection of backend-focused projects demonstrating secure architecture, transaction
            management, and scalable system design.
          </p>

          <div className="space-y-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
