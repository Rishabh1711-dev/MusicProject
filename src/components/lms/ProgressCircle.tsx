// src/components/lms/ProgressCircle.tsx
'use client';

import React from 'react';

interface ProgressCircleProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  label: string;
}

// A reusable, animated progress circle for the dashboard
export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,
  size = 120,
  strokeWidth = 8,
  label,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  // Calculate the offset for the arc based on the progress percentage
  const offset = circumference - (progress / 100) * circumference;

  const color = progress >= 75 ? 'text-teal-400' : progress >= 50 ? 'text-yellow-400' : 'text-blue-400';

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <svg
        height={size}
        width={size}
        viewBox={`0 0 ${size} ${size}`}
        className={`transform -rotate-90 transition-all duration-1000 ease-out`}
      >
        {/* Background Circle */}
        <circle
          stroke="#333333"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="opacity-20"
        />

        {/* Foreground Arc */}
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          // strokeDasharray needs to be a string formatted with spaces
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset: offset }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className={`transition-all duration-1000 ease-out ${color}`}
        />
      </svg>
      
      {/* Percentage Text */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className={`text-3xl font-bold ${color}`}>{Math.round(progress)}%</span>
      </div>
      
      <p className="text-sm text-neutral-400 mt-2">{label}</p>
    </div>
  );
};