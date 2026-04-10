import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-sm text-cosmic-300 mb-2 font-body">
        <span>问题 {current} / {total}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-cosmic-950/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-cosmic-500 via-violet-500 to-gold-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
