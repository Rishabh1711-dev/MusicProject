"use client";
import React, { useState } from "react";
import ProgressCircle from "@/components/lms/ProgressCircle";
import { useClientSession } from "@/lib/auth";
import { Music, Play, BookOpen, Settings, LayoutDashboard, TrendingUp, Award } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const { session, status } = useClientSession();
  const [activeTab, setActiveTab] = useState("my-courses");

  if (status === "loading") {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white space-y-4">
        <div className="h-12 w-12 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>
        <p className="text-sm font-medium animate-pulse">Initializing AI Pathfinder...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 px-4 md:px-8 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 space-y-2">
          <div className="px-4 py-6 mb-4 glass-container">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center font-bold">
                {session?.user?.name?.[0] || "M"}
              </div>
              <div>
                <p className="text-sm font-bold truncate">{session?.user?.name || "Maestro"}</p>
                <p className="text-[10px] text-teal-500 uppercase font-bold tracking-widest">Premium Member</p>
              </div>
            </div>
          </div>
          
          {[
            { id: "my-courses", label: "My Learning", icon: LayoutDashboard },
            { id: "active", label: "Current Session", icon: Play },
            { id: "theory", label: "Music Theory", icon: BookOpen },
            { id: "stats", label: "Insights", icon: TrendingUp },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                activeTab === tab.id ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20" : "text-neutral-500 hover:bg-white/5 hover:text-neutral-300"
              )}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </aside>

        <main className="flex-grow space-y-8">
          <div className="glass-container p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Award size={120} />
            </div>
            <h1 className="text-3xl font-bold relative z-10">Welcome back, {session?.user?.name?.split(' ')[0] || "Creator"}</h1>
            <p className="text-neutral-400 mt-2 relative z-10">AI Insight: You're in the top 5% of learners this week. Keep up the rhythm!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-container p-6 bg-gradient-to-br from-teal-900/20 to-black border-teal-500/20">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Music className="text-teal-500" /> Resume Learning
              </h2>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg">Advanced Composition</h3>
                  <p className="text-sm text-neutral-400">Next: Modulation & Chord Substitutions</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-teal-500 font-bold">
                    <TrendingUp size={14} />
                    <span>+12% progress today</span>
                  </div>
                </div>
                <ProgressCircle progress={84} size={90} />
              </div>
              <Link href="/courses/composition">
                <button className="w-full mt-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all active:scale-[0.98]">
                  Start Session
                </button>
              </Link>
            </div>

            <div className="glass-container p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-4">Daily Momentum</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-neutral-400">Practice Goal</span>
                      <span className="text-teal-500 font-bold">52 / 60 min</span>
                    </div>
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full w-[86%] rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                    <div className="h-10 w-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">7 Day Streak!</p>
                      <p className="text-xs text-neutral-500">You're on fire. Don't stop now.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-zinc-900 border border-white/10 rounded-xl text-sm font-bold hover:bg-zinc-800 transition-all mt-6">
                View Detailed Stats
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}