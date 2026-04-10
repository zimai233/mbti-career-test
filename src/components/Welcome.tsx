import React from 'react';

interface WelcomeProps {
  onStart: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-3xl shadow-soft-lg p-10 text-center animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center">
            <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          
          <h1 className="font-display text-3xl font-bold text-soft-800 mb-3">
            职业密码
          </h1>
          
          <p className="text-lg text-soft-500 mb-8 font-body">
            MBTI 职业性格测试
          </p>
          
          <p className="text-soft-600 font-body leading-relaxed mb-8">
            通过 30 道精心设计的题目，深入分析你的性格特质，
            揭示你最适合的职业方向。
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-soft-600 mb-8">
            <div className="flex items-center gap-2 justify-end">
              <span>10 个维度深度分析</span>
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
              <span>12 种职业类型匹配</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>个性化职业解读</span>
              <span className="w-1.5 h-1.5 bg-accent-400 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <span className="w-1.5 h-1.5 bg-accent-400 rounded-full"></span>
              <span>匹配度百分比呈现</span>
            </div>
          </div>

          <button
            onClick={onStart}
            className="px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium text-lg rounded-xl transition-colors duration-200 cursor-pointer shadow-soft hover:shadow-soft-lg"
          >
            开始探索
          </button>

          <p className="mt-6 text-soft-400 text-sm font-body">
            预计用时 5-8 分钟
          </p>
        </div>
      </div>
    </div>
  );
};
