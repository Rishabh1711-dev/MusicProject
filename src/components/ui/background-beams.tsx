// src/components/ui/background-beams.tsx
'use client';

import React from "react";
import { cn } from "@/lib/utils"; 

// Minimal implementation of BackgroundBeams to prevent a component not found error 
// and satisfy the import in src/app/page.tsx.

const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div className={cn(
            "h-full w-full absolute top-0 left-0 overflow-hidden",
            className
        )}>
            {/* Simple visual mock of subtle beams for aesthetics */}
            <div className="absolute inset-0 z-0 opacity-10">
                 <div className="absolute top-[10%] left-[5%] h-64 w-1 bg-teal-500/50 blur-sm animate-pulse-slow"></div>
                 <div className="absolute top-[50%] right-[15%] h-96 w-1 bg-blue-500/50 blur-sm animate-pulse-slow delay-500"></div>
                 <div className="absolute bottom-[20%] left-[30%] h-40 w-1 bg-yellow-500/50 blur-sm animate-pulse-slow delay-1000"></div>
            </div>
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.1; }
                    50% { transform: translateY(-50px) scaleY(1.2); opacity: 0.3; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export { BackgroundBeams };