import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Cpu, Layers, Globe2, Users, Download, Globe, Trophy } from 'lucide-react';

const stats = [
  { label: "累计服务用户", value: "3.5亿+", icon: Users },
  { label: "覆盖每日流量", value: "3000W+", icon: Globe },
  { label: "旗下优质产品", value: "10+", icon: Trophy },
  { label: "日均分发能力", value: "10W+", icon: Download },
];

const capabilities = [
  {
    icon: Wand2,
    title: "多媒体智能处理",
    desc: "极致的音视频编解码与格式转换技术，融合 AI 增强修复，让创作无门槛。",
    tags: ["FFmpeg", "Super-Res", "Denoise", "Codec"],
    color: "text-blue-600",
    gradient: "from-blue-500 to-cyan-400",
    bgIcon: "bg-blue-50",
    shadow: "group-hover:shadow-blue-500/10"
  },
  {
    icon: Cpu,
    title: "大模型工具化",
    desc: "将复杂的 LLM 能力封装为直观、易用的生产力工具，赋能每一个工作流。",
    tags: ["Transformers", "RAG", "Prompt Eng", "Agents"],
    color: "text-purple-600",
    gradient: "from-purple-500 to-pink-500",
    bgIcon: "bg-purple-50",
    shadow: "group-hover:shadow-purple-500/10"
  },
  {
    icon: Layers,
    title: "全平台工程化",
    desc: "跨 Windows, macOS, Mobile 及 Web 的统一架构，极速响应，稳定可靠。",
    tags: ["Rust", "Flutter", "Electron", "WASM"],
    color: "text-orange-600",
    gradient: "from-orange-500 to-amber-500",
    bgIcon: "bg-orange-50",
    shadow: "group-hover:shadow-orange-500/10"
  },
  {
    icon: Globe2,
    title: "全球化运营增长",
    desc: "深入 100+ 国家与地区的用户洞察，构建本地化的产品体验与增长体系。",
    tags: ["Localization", "SEO/ASO", "Growth", "Data"],
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-400",
    bgIcon: "bg-emerald-50",
    shadow: "group-hover:shadow-emerald-500/10"
  }
];

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="bg-slate-50/50 relative pb-32 pt-10">
      
      {/* Background Pattern to break monotony */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

      {/* 1. Data Trust Bar - Overlapping the Hero section */}
      <div className="relative -mt-24 z-20 mb-24 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-slate-200/50 border border-white/50 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 ring-1 ring-slate-900/5"
        >
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center text-center ${index % 2 !== 0 ? 'border-l md:border-l-0 border-slate-100 pl-4 md:pl-0' : ''}`}>
              <div className="mb-3 p-3 bg-blue-50 text-blue-600 rounded-full inline-flex ring-4 ring-blue-50/50">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div>
              <motion.span 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-2 block"
              >
                Core Capabilities
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">核心能力矩阵</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
           </div>
           <p className="text-slate-600 max-w-lg text-sm md:text-base leading-relaxed bg-white/50 p-4 rounded-xl border border-slate-100/50 backdrop-blur-sm">
             构建从底层算法到全球分发的全链路闭环，为每一个微小的需求提供工业级的大规模解决方案。
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-2xl ${item.shadow} transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.gradient} transform origin-left scale-x-100 transition-transform duration-500`} />

              {/* Background Watermark Icon - Adds Richness */}
              <item.icon className="absolute -bottom-6 -right-6 w-40 h-40 text-slate-50 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:text-slate-100 pointer-events-none" strokeWidth={1} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl ${item.bgIcon} border ${item.color.replace('text', 'border')}/20 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>

                {/* Tech Tags - Enhanced */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-200 group-hover:bg-white group-hover:shadow-sm transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;