import React from 'react';
import { CareerMatch, UserProfile } from '../types';
import { RadarChart } from './RadarChart';
import { dimensions } from '../data/dimensions';

interface ResultCardProps {
  careerMatches: CareerMatch[];
  profile: UserProfile;
  mbtiType: string;
  mbtiDescription: string;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  careerMatches,
  profile,
  mbtiType,
  mbtiDescription,
  onReset,
}) => {
  const topMatch = careerMatches[0];
  const secondaryMatch = careerMatches[1];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-soft-lg p-8 mb-6 text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent-100 rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h1 className="font-display text-3xl font-bold text-soft-800 mb-2">
            你的职业密码
          </h1>
          <p className="text-soft-600 font-body">
            基于 <span className="text-primary-600 font-semibold">{mbtiType}</span> 型人格的深度分析
          </p>
          <p className="text-soft-500 font-body text-sm mt-2 max-w-md mx-auto">
            {mbtiDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-3xl shadow-soft-lg p-6 animate-slide-up">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{topMatch.career.icon}</span>
              <div>
                <div className="text-soft-400 text-sm font-body">最适合你的职业</div>
                <h2 className="font-display text-xl text-soft-800">{topMatch.career.name}</h2>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-soft-500">匹配度</span>
                <span className="text-accent-600 font-semibold">{topMatch.matchPercentage}%</span>
              </div>
              <div className="h-2 bg-soft-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000"
                  style={{ width: `${topMatch.matchPercentage}%` }}
                />
              </div>
            </div>

            <p className="text-soft-600 font-body leading-relaxed mb-4">
              {topMatch.career.description}
            </p>

            <div className="border-t border-soft-100 pt-4">
              <p className="text-soft-600 text-sm font-body">
                {topMatch.analysis}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-soft-lg p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{secondaryMatch.career.icon}</span>
              <div>
                <div className="text-soft-400 text-sm font-body">次优选择</div>
                <h2 className="font-display text-xl text-soft-800">{secondaryMatch.career.name}</h2>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-soft-500">匹配度</span>
                <span className="text-primary-600 font-semibold">{secondaryMatch.matchPercentage}%</span>
              </div>
              <div className="h-2 bg-soft-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-1000"
                  style={{ width: `${secondaryMatch.matchPercentage}%` }}
                />
              </div>
            </div>

            <p className="text-soft-600 font-body leading-relaxed">
              {secondaryMatch.career.description.slice(0, 120)}...
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-soft-lg p-6 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-display text-lg text-soft-800 mb-4 text-center">你的性格雷达图</h3>
          <RadarChart profile={profile} />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {dimensions.slice(0, 5).map((dim) => (
              <div key={dim.key} className="text-center">
                <div className="text-soft-400 text-xs mb-1">{dim.name}</div>
                <div className="text-soft-800 font-semibold">{profile.scores[dim.key].toFixed(1)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-soft-lg p-6 mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-display text-lg text-soft-800 mb-4 text-center">性格特质</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {topMatch.career.traits.map((trait, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 bg-soft-100 text-soft-600 rounded-lg text-sm font-body"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-soft-lg p-6 mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-display text-lg text-soft-800 mb-4 text-center">适合的工作环境</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {topMatch.career.suitableEnvironments.map((env, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 bg-accent-50 text-accent-700 rounded-lg text-sm font-body"
              >
                {env}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-soft-lg p-6 mb-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="font-display text-lg text-soft-800 mb-4 text-center">推荐职业</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {topMatch.career.jobs.map((job, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 bg-warm-100 text-warm-600 rounded-lg text-sm font-body"
              >
                {job}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-soft-lg p-6 mb-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-display text-lg text-soft-800 mb-4 text-center">发展建议</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {topMatch.career.developmentTips.map((tip, i) => (
              <div 
                key={i}
                className="flex items-start gap-3 p-3 bg-soft-50 rounded-xl"
              >
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-soft-600 font-body text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-soft-lg p-6 mb-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <h3 className="font-display text-lg text-soft-800 mb-4 text-center">所有职业匹配度</h3>
          <div className="space-y-3">
            {careerMatches.map((match, i) => (
              <div key={match.career.id} className="flex items-center gap-4">
                <span className="text-xl w-8 text-center">{match.career.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-soft-600 font-body text-sm">{match.career.name}</span>
                    <span className={`font-semibold text-sm ${
                      i === 0 ? 'text-accent-600' : 
                      i === 1 ? 'text-primary-600' : 
                      'text-soft-500'
                    }`}>
                      {match.matchPercentage}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-soft-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        i === 0 ? 'bg-gradient-to-r from-primary-500 to-accent-500' :
                        i === 1 ? 'bg-gradient-to-r from-primary-400 to-primary-600' :
                        'bg-soft-300'
                      }`}
                      style={{ width: `${match.matchPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-white text-soft-600 font-body rounded-xl shadow-soft-lg hover:shadow-soft-xl hover:text-soft-800 transition-all duration-200 cursor-pointer border border-soft-200"
        >
          重新测试
        </button>
      </div>
    </div>
  );
};
