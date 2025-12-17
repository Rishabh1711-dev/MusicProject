"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressCircleProps {
  progress: number; // 0 to 100
  size?: number;
}

export default function ProgressCircle({ progress, size = 120 }: ProgressCircleProps) {
  const radius = size / 2 - 5; // Reduced radius for thinner stroke
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background Circle */}
        <circle
          stroke="hsl(var(--primary) / 0.15)"
          fill="transparent"
          strokeWidth="6"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress Arc */}
        <motion.circle
          stroke="hsl(var(--primary))"
          fill="transparent"
          strokeWidth="6"
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className={cn(
        "absolute text-xl font-bold",
        progress === 100 ? "text-green-400" : "text-foreground"
      )}>
        {progress}%
      </div>
    </div>
  );
}