import { Project, Skill, Experience } from './types';

export const DEVELOPER_INFO = {
  name: 'Morla Teja',
  role: 'Backend Engineer | Java & Spring Boot',
  location: 'Andhra Pradesh, India',
  email: 'tejamorla217@gmail.com',
  intro: 'I build secure, scalable backend systems using Java and Spring Boot. Focused on clean architecture, RESTful APIs, transaction management, concurrency handling, and distributed systems fundamentals.',
  education: 'B.Tech CSE (2022–2026)',
  smartInterviewsRank: '13795 / 47252 (Top ~29%)',
};

export const SKILLS: Skill[] = [
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'JPA / Hibernate', category: 'Backend' },
  { name: 'JWT', category: 'Backend' },
  { name: 'Kafka', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Git', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Maven', category: 'Tools' },
  { name: 'AWS (Basics)', category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Ticket Booking System',
    description: 'Enterprise-grade ticket booking platform with robust concurrency control and transaction management. Features role-based access control for admin and user operations with secure seat locking mechanisms.',
    highlights: [
      'JWT authentication & authorization',
      'Role-based access control (Admin/User)',
      'Concurrency-safe seat locking mechanism',
      'ACID-compliant transaction management',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'JPA'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Personal Expense Tracker',
    description: 'Full-stack expense management application built with layered architecture principles. Implements secure CRUD operations with proper data validation and relationship mapping.',
    highlights: [
      'Clean layered architecture',
      'Secure RESTful CRUD APIs',
      'JPA relational mapping',
      'React-based responsive frontend',
    ],
    technologies: ['Spring Boot', 'React', 'MySQL', 'JPA', 'Tailwind'],
    githubUrl: 'https://github.com/TEJA2607/expense-companion',
  },
  {
    title: 'Kafka Microservice (JPMorgan Simulation)',
    description: 'Event-driven microservice simulating financial transaction processing. Integrates Kafka for message streaming with external REST API consumption and persistent transaction storage.',
    highlights: [
      'Kafka message streaming integration',
      'Real-time transaction validation',
      'JPA with H2 in-memory persistence',
      'External REST API integration',
    ],
    technologies: ['Kafka', 'Spring Boot', 'H2', 'REST APIs'],
    githubUrl: '#',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Software Engineering Virtual Experience',
    organization: 'JPMorgan Chase & Co.',
    period: '2024',
    description: 'Completed practical tasks involving financial data processing, microservices, and Kafka integration.',
  },
  {
    title: 'CS50P: Introduction to Programming with Python',
    organization: 'HarvardX',
    period: '2023',
    description: 'Comprehensive foundation in programming concepts, algorithms, and problem-solving.',
  },
  {
    title: 'Android Development Internship',
    organization: 'AICTE',
    period: '2023',
    description: 'Developed mobile applications using Android SDK and Java.',
  },
  {
    title: 'AI/ML Internship',
    organization: 'AICTE',
    period: '2023',
    description: 'Explored machine learning algorithms and AI fundamentals.',
  },
];
