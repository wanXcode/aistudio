import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const storyGroups = [
  {
    title: "专注与深耕",
    content: [
      "在互联网领域，我们始终专注于一件事——用技术解决真实问题，并把能量尽可能传递给更多用户。",
      "从最早的多媒体处理，到如今的 AI 驱动数字工具，我们没有追逐热点，而是在一个又一个具体场景里，把工具做到更高效、更可靠、更普惠。"
    ]
  },
  {
    title: "性格与信仰",
    content: [
      "这条路不算轻松，但它塑造了我们的性格：务实、耐心、深耕、少说多做。",
      "我们相信，一个能真正服务海量用户的工具，不仅需要营销，更依靠产品力本身。也相信，让复杂的任务变得简单，就是最朴素、最持久的价值。"
    ]
  },
  {
    title: "未来愿景",
    content: [
      "未来，AI 将重塑所有数字任务，而我们希望成为那一批：把技术变成“人人可用的能力”的建设者。"
    ]
  }
];

const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      <motion.div style={{ opacity, scale }} className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-3 block"
          >
            Our Story
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            品牌故事
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line - Light Gray */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0">
            {storyGroups.map((group, groupIndex) => (
              <motion.div 
                key={groupIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${
                  groupIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot (Desktop) - White with Blue Border */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-md z-10 hidden md:block mt-8"></div>

                {/* Content Block */}
                <div className={`flex-1 w-full ${groupIndex % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3 md:block">
                    <span className="w-8 h-[2px] bg-blue-600 md:hidden"></span>
                    {group.title}
                    <span className="w-8 h-[2px] bg-blue-600 md:hidden"></span>
                  </h3>
                  <div className="space-y-4">
                    {group.content.map((text, i) => (
                      <p key={i} className="text-base md:text-lg leading-relaxed text-slate-600">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 md:mt-32 text-center max-w-2xl mx-auto"
        >
            <div className="w-12 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed font-sans">
              “让复杂的任务变得简单，<br className="md:hidden" />就是最朴素、最持久的价值。”
            </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Story;