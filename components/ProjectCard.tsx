'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  slug: string;
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}

      className="group cursor-pointer"
    >
      <Link href={`/work/${project.slug}`}>
        <div className="relative overflow-hidden bg-gray-100 aspect-square rounded-sm">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="w-full h-full relative"
          >
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
              priority={index < 6}
              quality={90}
            />
          </motion.div>
        </div>
        
        <div className="mt-4 mx-auto text-center">
          <h2 className="text-lg font-light tracking-wide group-hover:text-gray-700 transition-colors duration-200">
            {project.title}
          </h2>
          {project.category && (
            <p className="text-sm text-gray-500 mt-1 mb-0">
              {project.category}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
