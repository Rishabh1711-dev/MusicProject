import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative">
      <BackgroundBeams />
      <div className="max-w-2xl w-full glass-container p-10 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-neutral-400 text-center mb-10">
          Got questions about MelodyMind? Our team is here to help you harmonize.
        </p>
        
        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-black border border-white/10 rounded-xl p-4 outline-none focus:border-teal-500 transition-colors"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full bg-black border border-white/10 rounded-xl p-4 outline-none focus:border-teal-500 transition-colors"
          />
          <textarea 
            placeholder="Your Message" 
            rows={5}
            className="w-full bg-black border border-white/10 rounded-xl p-4 outline-none focus:border-teal-500 transition-colors"
          />
          <button className="w-full py-4 bg-teal-600 rounded-xl font-bold hover:bg-teal-500 transition-all active:scale-95">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}