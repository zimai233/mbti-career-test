import React from 'react';
import { CareerMatch, UserProfile } from '../types';
import { RadarChart } from './RadarChart';
import { dimensions } from '../data/dimensions';

interface ResultCardProps {
  careerMatches: CareerMatch[];
  profile: UserProfile;
  mbtiType: string;
  mbtiDescription: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  careerMatches,
  profile,
  mbtiType,
  mbtiDescription,
}) => {
  const topMatch = careerMatches[0];
  const secondaryMatch = careerMatches[1];

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-950 via-cosmic-900 to-cosmic-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-300 via-violet-300 to-cosmic-300 bg-clip-text text-transparent">
            你的职业密码
          </h1>
          <p className="text-cosmic-300 font-body text-lg">
            基于 {mbtiType} 型人格的深度分析
          </p>
          <p className="text-cosmic-400/70 font-body text-sm mt-2">
            {mbtiDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{topMatch.career.icon}</span>
              <div>
                <div className="text-gold-400 text-sm font-body mb-1">最适合你的职业</div>
                <h2 className="font-display text-2xl text-white">{topMatch.career.name}</h2>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-cosmic-300">匹配度</span>
                <span className="text-gold-400 font-bold">{topMatch.matchPercentage}%</span>
              </div>
              <div className="h-3 bg-cosmic-900/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cosmic-500 to-gold-500 rounded-full transition-all duration-1000"
                  style={{ width: `${topMatch.matchPercentage}%` }}
                />
              </div>
            </div>

            <p className="text-cosmic-200/80 font-body leading-relaxed mb-6">
              {topMatch.career.description}
            </p>

            <div className="border-t border-cosmic-700/30 pt-4">
              <p className="text-cosmic-300 text-sm font-body">
                {topMatch.analysis}
              </p>
            </div>
          </div>

          <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{secondaryMatch.career.icon}</span>
              <div>
                <div className="text-violet-400 text-sm font-body mb-1">次优选择</div>
                <h2 className="font-display text-2xl text-white">{secondaryMatch.career.name}</h2>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-cosmic-300">匹配度</span>
                <span className="text-violet-400 font-bold">{secondaryMatch.matchPercentage}%</span>
              </div>
              <div className="h-3 bg-cosmic-900/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-cosmic-500 rounded-full transition-all duration-1000"
                  style={{ width: `${secondaryMatch.matchPercentage}%` }}
                />
              </div>
            </div>

            <p className="text-cosmic-200/80 font-body leading-relaxed">
              {secondaryMatch.career.description.slice(0, 150)}...
            </p>
          </div>
        </div>

        <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-display text-xl text-white mb-6 text-center">你的性格雷达图</h3>
          <RadarChart profile={profile} />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {dimensions.slice(0, 5).map((dim) => (
              <div key={dim.key} className="text-center">
                <div className="text-cosmic-400 text-xs mb-1">{dim.name}</div>
                <div className="text-white font-bold">{profile.scores[dim.key].toFixed(1)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-display text-xl text-white mb-6 text-center">性格特质</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topMatch.career.traits.map((trait, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-cosmic-800/50 border border-cosmic-600/30 rounded-full text-cosmic-200 text-sm font-body"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="font-display text-xl text-white mb-6 text-center">适合的工作环境</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topMatch.career.suitableEnvironments.map((env, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-violet-900/30 border border-violet-700/30 rounded-full text-violet-200 text-sm font-body"
              >
                {env}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-display text-xl text-white mb-6 text-center">推荐职业</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topMatch.career.jobs.map((job, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-gold-900/30 border border-gold-700/30 rounded-full text-gold-200 text-sm font-body"
              >
                {job}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <h3 className="font-display text-xl text-white mb-6 text-center">发展建议</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {topMatch.career.developmentTips.map((tip, i) => (
              <div 
                key={i}
                className="flex items-start gap-3 p-4 bg-cosmic-900/30 rounded-xl"
              >
                <span className="text-gold-400 text-lg">◆</span>
                <span className="text-cosmic-200 font-body">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cosmic-900/80 to-violet-900/80 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-display text-xl text-white mb-6 text-center">所有职业匹配度</h3>
          <div className="space-y-3">
            {careerMatches.map((match, i) => (
              <div key={match.career.id} className="flex items-center gap-4">
                <span className="text-2xl w-12 text-center">{match.career.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-cosmic-200 font-body">{match.career.name}</span>
                    <span className={`font-bold ${
                      i === 0 ? 'text-gold-400' : 
                      i === 1 ? 'text-violet-400' : 
                      'text-cosmic-400'
                    }`}>
                      {match.matchPercentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-cosmic-900/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        i === 0 ? 'bg-gradient-to-r from-gold-500 to-cosmic-500' :
                        i === 1 ? 'bg-gradient-to-r from-violet-500 to-cosmic-500' :
                        'bg-cosmic-600'
                      }`}
                      style={{ width: `${match.matchPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-cosmic-800/50 border border-cosmic-600/30 text-cosmic-200 font-body rounded-full hover:bg-cosmic-700/50 transition-all"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>
  );
};
