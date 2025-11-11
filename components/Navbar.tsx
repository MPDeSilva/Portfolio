'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'Work', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 bg-white"
      >
        <div className="max-w-8xl mx-auto py-[6vw] px-[6vw] md:py-[3vw] md:px-[4vw]">
          <div className="flex center items-center justify-between md:justify-normal md:mt-2">
            {/* Logo - Responsive text sizing */}
            <Link href="/" className="flex items-center z-50">
              <motion.h1
                className="text-[7.0vw] sm:text-2xl md:text-3xl font-light tracking-wide leading-tight"
              >
                Milinda Prasan De Silva
              </motion.h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 ml-10">
              {navItems.map((item) => {
                const isActive = item.name === 'Work' 
                  ? (pathname === item.href || pathname.startsWith('/work/'))
                  : pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group"
                  >
                    <span
                      className={`text-lg tracking-wide transition-colors duration-200 ${
                        isActive
                          ? 'text-black font-medium'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-black"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
            </Link>
                );
              })}
          </div>

            {/* Mobile Menu Button - Better positioning */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 relative w-8 h-8 flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-3 relative flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    translateY: isMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[2px] w-full bg-black origin-center"
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    translateY: isMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[2px] w-full bg-black origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu panel - slides from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[80%] max-w-md bg-white z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu header with close area */}
                <div className="h-20 sm:h-24"></div>
                
                {/* Navigation items */}
                <nav className="flex-1 px-8 sm:px-12">
                  {navItems.map((item, index) => {
                    const isActive = item.name === 'Work' 
                      ? (pathname === item.href || pathname.startsWith('/work/'))
                      : pathname === item.href;
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="border-b border-gray-100 last:border-0"
                      >
            <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-6"
                        >
                          <span
                            className={`text-2xl sm:text-3xl font-light tracking-wide transition-colors duration-200 ${
                              isActive
                                ? 'text-black'
                                : 'text-gray-600'
                            }`}
                          >
                            {item.name}
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="mobile-indicator"
                              className="h-[2px] w-16 bg-black mt-2"
                              initial={false}
                              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                          )}
            </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Footer with social links */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="px-8 sm:px-12 py-8 border-t border-gray-100"
                >
                  <p className="text-sm text-gray-500 mb-4">Get in touch</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="mailto:your.email@example.com"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Email
                    </a>
          </div>
                </motion.div>
        </div>
            </motion.div>
          </>
      )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;