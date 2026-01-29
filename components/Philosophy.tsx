import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, ShieldCheck } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor - Light Mode */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 -skew-x-12 translate-x-32 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-bold mb-8 tracking-wide shadow-sm">
            我们的理念
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            技术应该<br/>服务每一个人。
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            我们不追求炫技，也不堆砌功能。我们相信 AI 的终极意义是让复杂变简单，让每个人都能平等地享受科技带来的效率红利。
          </p>

          <div className="space-y-8">
            {[
              { title: "极致极简", desc: "把复杂留给代码，把简单留给用户。", icon: Zap, color: "bg-amber-50 text-amber-600 border-amber-100" },
              { title: "有温度的工具", desc: "不仅仅是冷冰冰的效率，更是创作的伙伴。", icon: Heart, color: "bg-rose-50 text-rose-600 border-rose-100" },
              { title: "长期主义", desc: "做经得起时间考验的产品，而非昙花一现。", icon: ShieldCheck, color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
            ].map((feature, i) => (
              <div key={i} className="flex gap-5 group">
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${feature.color} border flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                  <feature.icon size={22} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">{feature.title}</h4>
                  <p className="text-slate-500 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual - Abstract Representation in Light Mode */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative h-[600px] w-full bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 flex items-center justify-center overflow-hidden"
        >
           {/* Soft Blue Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent"></div>

           {/* Floating Cards Animation - Light UI */}
           <div className="relative z-10 w-72">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-lg mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                     <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-100">A</div>
                     <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full mb-2"></div>
                <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-lg ml-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    <Zap size={16} className="text-emerald-500" />
                  </div>
                  <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
                </div>
                <div className="h-20 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-slate-400">Processing...</span>
                </div>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;