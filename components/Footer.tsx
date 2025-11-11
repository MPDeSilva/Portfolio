'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com/MPDeSilva' },
    { name: 'Work GitHub', href: 'https://github.com/MiliDS-Lewis' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/milinda-de-silva/' },
    { name: 'Email', href: 'mailto:milindapds@hotmail.com' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-8xl mx-auto px-[4vw] py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © {currentYear} Milinda Prasan De Silva. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
