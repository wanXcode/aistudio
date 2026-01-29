import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-3xl" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            准备好开启<br className="md:hidden" />与繁花的新篇章了吗？
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            无论您是寻求合作的企业伙伴，还是渴望挑战的顶尖人才，繁花网络都期待与您共同探索 AI 的无限边界。
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
              加入我们
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-700/50 text-white font-semibold rounded-xl border border-blue-400/30 hover:bg-blue-700 hover:border-blue-400 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <Mail size={20} />
              联系商务合作
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;