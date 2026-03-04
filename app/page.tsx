'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { portfolioDataDesc } from '@/lib/portfolioData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Projects Grid */}
      <section className="max-w-8xl mx-auto py-[6vw] px-[6vw] md:py-[3.3vw] md:px-[4vw]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {portfolioDataDesc.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </section>

      {/* Hero Section */}
      <section className="max-w-8xl mx-auto px-[6vw] md:px-[4vw] pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            Hello. I'm a developer
            <span className="text-gray-600"> crafting digital experiences</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            I specialize in building web applications, tools, and digital products 
            that combine beautiful design with robust functionality.
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-light mb-4">
              Let's work together
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}