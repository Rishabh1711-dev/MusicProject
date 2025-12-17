"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type WavyBackgroundProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  speed = "slow",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const containerRef = React.useRef(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={cn(
        "h-full relative isolate flex flex-col items-center justify-center antialiased",
        containerClassName
      )}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
        {...props}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v28h-352z"
          />
        </defs>
        <g className={cn("animate-wave", speed === "slow" ? "[&>use]:duration-[30s]" : "[&>use]:duration-[20s]")}>
          {colors.map((color, index) => (
            <motion.use
              key={index}
              href="#gentle-wave"
              x={index * 10}
              y={index * 2 + 6}
              fill={color}
              fillOpacity={waveOpacity * (1 - index * 0.2)}
              style={{
                transform: `translate3d(0,0,0)`,
                animationDelay: `-${index * 5}s`,
              }}
              // This component is purely visual. For the sake of not adding custom CSS, 
              // I will use a non-motion technique (CSS animation in tailwind.config.js)
              // and ensure the animation keyframe is correct. The motion component will be
              // used to manage the x/y offset for the different waves.
              // We will rely on the CSS 'animate-wave' from tailwind.config.js.
            />
          ))}
        </g>
      </svg>
      <div className={cn("relative z-20 w-full", className)}>{children}</div>
    </div>
  );
};