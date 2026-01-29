import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '核心能力', href: '#capabilities' },
    { name: '品牌理念', href: '#philosophy' },
    { name: '未来愿景', href: '#future' },
  ];

  // Refined variants for stable performance without flickering
  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2 } // Fade out opacity quickly before height collapses
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.1 } // Fade in opacity slightly after height starts expanding
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled 
          ? 'bg-[#020d24]/75 backdrop-blur-lg border-b border-white/5 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative z-50 bg-[#020d24]/0">
        {/* Logo - White */}
        <a href="#" className="flex items-center cursor-pointer group">
          <img 
            src="https://www.fanhua.com.cn/img/logo.png" 
            alt="繁花网络" 
            className="h-12 w-auto object-contain brightness-0 invert" 
          />
        </a>

        {/* Desktop Links - White Text */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-base font-medium text-slate-300 hover:text-white transition-colors tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA - Blue */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
            加入我们
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-20 left-0 w-full bg-[#020d24]/95 backdrop-blur-xl border-t border-slate-800/50 shadow-2xl overflow-hidden"
            // Important: Remove padding from here to prevent height animation jumping
          >
            {/* Inner container handles padding */}
            <div className="p-6 flex flex-col gap-4 pb-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-slate-300 py-3 border-b border-slate-800/50 hover:text-white hover:border-blue-500/30 block text-lg font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="mt-4 w-full py-3.5 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-500 active:scale-95 transition-all"
              >
                加入我们
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;