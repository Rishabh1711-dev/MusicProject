"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function AIPathfinder() {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center relative">
      <BackgroundBeams />
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">AI PATHFINDER</h1>
        <div className="glass-container p-8 max-w-2xl border-teal-500/50">
          <p className="text-xl text-neutral-400 mb-8">Analyzing your playstyle to generate a custom curriculum...</p>
          <div className="flex justify-center mb-8">
            <div className="h-24 w-24 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>
          </div>
          <p className="text-sm text-neutral-500 uppercase tracking-widest">System Status: Scanning Frequency</p>
        </div>
      </div>
    </div>
  );
}