'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-900/50 border border-gray-800/50 rounded-xl p-8 hover:border-gray-700 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/0 via-gray-800/0 to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

        <div className="space-y-2 mb-6">
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 shrink-0" />
              <p className="text-sm text-gray-400">{highlight}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
