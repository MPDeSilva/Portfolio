'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getProjectBySlug, getNextProject, getPreviousProject } from '@/lib/portfolioData';
import VideoPlayer from '@/components/VideoPlayer';

export default function ProjectPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : params.slug[0];
  const project = getProjectBySlug(slug);
  const nextProject = getNextProject(slug);
  const previousProject = getPreviousProject(slug);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Project not found</h2>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Check if project has a video
  const hasVideo = project.details.video;

  return (
    <div className="min-h-screen bg-white">
      {/* If there's a video, show it first with title below */}
      {hasVideo && (
      <div className=''>
            <>
              {/* Video Player with Plyr */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video bg-gray-100 rounded-sm overflow-hidden mb-12 mx-auto"
              >
                <VideoPlayer videoId={project.details.video || ''} />
        </motion.div>

              {/* Title and Description below video */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center md:max-w-6xl mx-auto px-[4vw]"
        >
                <h1 className="text-3xl md:text-5xl font-light mb-6">
                  {project.title}
                </h1>
                <p className="md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {project.description}
                </p>
        </motion.div>
            </>
         
      </div> 
      )}
      <div className="py-[3vw] px-[4vw]">
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          {/* If no video, show title at top left */}
          {!hasVideo && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-3xl md:text-3xl font-light mb-4">
                {project.title}
              </h1>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                {project.description}
              </p>
          </motion.div>
        )}

          {/* Project Details Section */}
          <div className="max-w-8xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="lg:col-span-2 space-y-8"
              >
                {project.details.challenge && (
                  <div>
            <h3 className="text-xl font-light mb-3">The Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">
              {project.details.challenge}
            </p>
                  </div>
                )}

                {project.details.solution && (
                  <div>
            <h3 className="text-xl font-light mb-3">The Solution</h3>
                    <p className="text-gray-700 leading-relaxed">
              {project.details.solution}
            </p>
                  </div>
                )}

                {project.details.features && project.details.features.length > 0 && (
                  <div>
            <h3 className="text-xl font-light mb-4">Key Features</h3>
                    <ul className="space-y-2">
              {project.details.features.map((feature, index) => (
                        <li
                  key={index}
                          className="flex items-start text-gray-700"
                >
                  <span className="text-gray-400 mr-3">•</span>
                          <span>{feature}</span>
                        </li>
              ))}
            </ul>
                  </div>
                )}
          </motion.div>

              {/* Sidebar */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
                {project.category && (
            <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                      Category
                    </h4>
                    <p className="text-gray-700">{project.category}</p>
                  </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                Technologies
                    </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
                )}

                {(project.liveLink || project.githubLink) && (
                  <div className="space-y-3 pt-4">
              {project.liveLink && (
                      <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="block w-full px-4 py-3 bg-black text-white text-center text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200"
                >
                  View Live Project
                      </a>
              )}
              {project.githubLink && (
                      <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="block w-full px-4 py-3 border border-black text-black text-center text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
                >
                  View on GitHub
                      </a>
              )}
            </div>
                )}
          </motion.div>
        </div>
          </div>

          {/* Masonry Grid for Images */}
          {project.details.images && project.details.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="masonry-grid mb-20"
            >
              {project.details.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="masonry-item"
                >
                  <Image
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-sm"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}


      </motion.section>

        {/* Navigation Section */}
        <section className="border-t border-gray-100 pt-8">
          <div className="flex justify-between items-center text-sm">
            <Link
              href={`/work/${previousProject.slug}`}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
            >
              <span className="text-lg transform group-hover:-translate-x-1 transition-transform duration-200">
                ←
              </span>
              <span>{previousProject.title}</span>
            </Link>

            {/* <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              All Projects
            </Link> */}

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
            >
              <span>{nextProject.title}</span>
              <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
      </section>
        </div>
    </div>
  );
}