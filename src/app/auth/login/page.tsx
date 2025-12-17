"use client";
import React, { useState } from "react";
import { useClientSession } from "@/lib/auth";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Mail, Github, Chrome, ArrowRight, Lock, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { signIn } = useClientSession();
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (provider: string) => {
    setLoading(provider);
    await signIn();
    setLoading(null);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      <BackgroundBeams className="opacity-40" />
      
      <div className="max-w-md w-full glass-container p-10 relative z-10 mx-4 border-white/20">
        <div className="flex justify-center mb-6">
          <div className="h-14 w-14 rounded-2xl bg-teal-600 flex items-center justify-center shadow-xl shadow-teal-600/30 rotate-3">
            <Lock className="text-white" size={28} />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-white mb-2 tracking-tighter">Enter MelodyMind</h2>
        <p className="text-neutral-500 text-center mb-10 text-sm font-medium">Your personalized musical journey awaits.</p>
        
        <div className="space-y-4">
          <button 
            disabled={!!loading}
            onClick={() => handleLogin('google')}
            className="w-full flex items-center justify-center gap-3 bg-white text-black py-3.5 rounded-xl font-bold hover:bg-neutral-200 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading === 'google' ? <Loader2 className="animate-spin" size={20} /> : <Chrome size={20} />}
            Continue with Google
          </button>
          
          <button 
            disabled={!!loading}
            onClick={() => handleLogin('github')}
            className="w-full flex items-center justify-center gap-3 bg-zinc-900 text-white py-3.5 rounded-xl font-bold border border-white/10 hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading === 'github' ? <Loader2 className="animate-spin" size={20} /> : <Github size={20} />}
            Continue with GitHub
          </button>

          <div className="relative py-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-4 text-neutral-600 font-bold tracking-widest">or</span>
            </div>
          </div>

          <form 
            className="space-y-4" 
            onSubmit={(e) => { 
              e.preventDefault(); 
              handleLogin('email'); 
            }}
          >
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 ml-1">Work Email</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-teal-500 transition-colors" size={18} />
                <input 
                  required
                  type="email" 
                  placeholder="alex@example.com" 
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-teal-500/50 focus:bg-zinc-900 transition-all text-sm" 
                />
              </div>
            </div>
            <Button 
              disabled={!!loading}
              className="w-full py-7 text-base font-bold group shadow-teal-600/20 shadow-xl"
            >
              {loading === 'email' ? <Loader2 className="animate-spin mr-2" /> : null}
              Sign In to MelodyMind
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}