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
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis 
            dataKey="dimension" 
            tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'Noto Sans SC' }}
          />
          <Radar
            name="你的特质"
            dataKey="score"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};
