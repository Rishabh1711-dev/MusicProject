// This version is a static visual element, safe to be a Server Component
import { cn } from '@/lib/utils';
import React from 'react';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = ({ className, fill = 'white' }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        'animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0',
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 3787"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="1924.71"
          rx="1924.71"
          ry="1924.71"
          fill={fill}
          fillOpacity="0.4"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0"
          width="3787"
          height="3787"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="150"
            result="effect1_foregroundBlur_3593_74136"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};