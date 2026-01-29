import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Future: React.FC = () => {
  return (
    <section id="future" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">面向未来的<br/>AI 工具生态</h2>
                <p className="text-slate-600 max-w-md">我们在构建一个由智能驱动、覆盖全球、连接创作与生活的数字基础设施。</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mt-8 md:mt-0 font-medium">
                查看发展路线图 <ArrowUpRight size={20} />
            </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {[
                {
                    step: "01",
                    title: "通用工具能力平台",
                    desc: "整合文本、图像、音频、视频等多模态 AI 能力，打造标准化的 API 与 SDK 服务层。",
                    gradient: "from-blue-500 to-cyan-400"
                },
                {
                    step: "02",
                    title: "全球多媒体基础设施",
                    desc: "构建低延迟、高并发的全球处理网络，让地球另一端的创作即刻完成。",
                    gradient: "from-indigo-500 to-purple-500"
                },
                {
                    step: "03",
                    title: "规模化工具创新体系",
                    desc: "基于数据洞察的敏捷研发流，快速孵化满足细分场景需求的 AI 垂直应用。",
                    gradient: "from-emerald-500 to-teal-400"
                }
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    className="p-8 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                >
                    <div className={`text-5xl font-bold mb-6 font-sans text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                        {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Future;