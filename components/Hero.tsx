import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleWhirlpool from './ParticleWhirlpool';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('capabilities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Added pb-32 to create space at bottom for the overlapping card in next section
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020d24] pt-20 pb-32 lg:pt-0 lg:pb-32">
      
      {/* Background Gradients for Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Visual Effect Background - Expanded to full width to prevent background exposure on wide screens */}
      <div className="absolute inset-0 pointer-events-none z-10">
         {/* Fade gradient from left content to right particles. 
             Extended width and opacity to ensure text readability against full-screen particles */}
         <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#020d24] via-[#020d24]/80 to-transparent w-full lg:w-3/4" />
         <ParticleWhirlpool />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-20 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left relative">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-blue-500"></span>
            </span>
            AI TOOL ECOSYSTEM
          </motion.div>

          {/* Headline - White Text */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-10 leading-[1.1] font-sans"
          >
            打造领先的 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-text-shimmer pb-2">
              AI 工具生态
            </span>
          </motion.h1>

          {/* Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-l-4 border-blue-500/30 pl-6 mb-12 max-w-lg"
          >
            <div className="text-base md:text-lg text-slate-400 font-medium leading-loose space-y-2">
              <p>我们相信发展不仅是商业回报，更能承载热爱与成就。</p>
              <p>在长期主义的道路上，始终忠于初心。</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={scrollToContent}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 text-sm font-semibold rounded hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex justify-center"
            >
              了解我们的能力
            </button>
            
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-slate-700 text-sm font-medium rounded hover:bg-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2 group">
              加入我们 
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;