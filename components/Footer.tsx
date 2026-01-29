import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020d24] text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
           <h3 className="text-white font-bold text-lg mb-4">繁花网络</h3>
           <p className="text-slate-400 mb-6 max-w-xs leading-relaxed">
             致力于打造高效、普惠的 AI 工具生态，用技术温暖每一个数字任务。
           </p>
           <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer" aria-label="Github">
                <Github size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
           </div>
        </div>
        
        <div>
            <h4 className="text-white font-semibold mb-6">业务领域</h4>
            <ul className="space-y-4">
                <li><span className="hover:text-blue-400 cursor-pointer transition-colors">多媒体 AI 处理</span></li>
                <li><span className="hover:text-blue-400 cursor-pointer transition-colors">办公效率工具</span></li>
                <li><span className="hover:text-blue-400 cursor-pointer transition-colors">全球 SaaS 发行</span></li>
                <li><span className="hover:text-blue-400 cursor-pointer transition-colors">跨平台应用开发</span></li>
            </ul>
        </div>

        <div>
            <h4 className="text-white font-semibold mb-6">关于公司</h4>
            <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-400 transition-colors">我们的故事</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">文化与愿景</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">人才招聘</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">开源贡献</a></li>
            </ul>
        </div>

        <div>
            <h4 className="text-white font-semibold mb-6">联系我们</h4>
            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    business@fanhua.tech
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    hr@fanhua.tech
                </li>
                <li className="pt-2 text-xs text-slate-500 leading-relaxed">
                    北京市朝阳区核心商务区<br/>繁花网络技术中心
                </li>
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Fanhua Network Technology. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <p>苏ICP备15041529号-3</p>
            <p>Privacy Policy</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;