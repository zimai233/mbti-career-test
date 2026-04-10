import React from 'react';

interface WelcomeProps {
  onStart: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-950 via-cosmic-900 to-cosmic-950" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-2xl mx-auto animate-fade-in">
        <div className="text-8xl mb-8 animate-float">🔮</div>
        
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-300 via-violet-300 to-cosmic-300 bg-clip-text text-transparent">
          职业密码
        </h1>
        
        <p className="text-xl md:text-2xl text-cosmic-200/80 mb-8 font-body font-light">
          MBTI职业性格测试
        </p>
        
        <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 mb-8">
          <p className="text-cosmic-200/90 font-body leading-relaxed mb-6">
            通过30道精心设计的题目，深入分析你的性格特质，
            <br />
            揭示你最适合的职业方向。
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-cosmic-300/80">
            <div className="flex items-center gap-2 justify-end">
              <span>10个维度深度分析</span>
              <span className="text-gold-400">◆</span>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <span className="text-gold-400">◆</span>
              <span>12种职业类型匹配</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>个性化职业解读</span>
              <span className="text-gold-400">◆</span>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <span className="text-gold-400">◆</span>
              <span>匹配度百分比呈现</span>
            </div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="group relative px-12 py-4 bg-gradient-to-r from-cosmic-600 to-violet-600 hover:from-cosmic-500 hover:to-violet-500 text-white font-display text-lg rounded-full transition-all duration-300 shadow-lg shadow-cosmic-500/25 hover:shadow-cosmic-500/40 hover:scale-105"
        >
          <span className="relative z-10">开始探索</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        </button>

        <p className="mt-8 text-cosmic-500/60 text-sm font-body">
          预计用时 5-8 分钟
        </p>
      </div>
    </div>
  );
};
