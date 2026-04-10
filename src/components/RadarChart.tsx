import React from 'react';
import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { UserProfile } from '../types';
import { dimensions } from '../data/dimensions';

interface RadarChartProps {
  profile: UserProfile;
}

export const RadarChart: React.FC<RadarChartProps> = ({ profile }) => {
  const data = dimensions.map((dim) => ({
    dimension: dim.name,
    score: profile.scores[dim.key],
    fullMark: 5,
  }));

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <defs>
            <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <PolarGrid stroke="#334155" strokeOpacity={0.5} />
          <PolarAngleAxis 
            dataKey="dimension" 
            tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'Noto Sans SC' }}
          />
          <Radar
            name="你的特质"
            dataKey="score"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.4}
            strokeWidth={2}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};
