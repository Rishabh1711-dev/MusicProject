import React from "react";
import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black antialiased overflow-hidden">
      <BackgroundBeams className="z-0" />
      
      <div className="relative z-10">
        <HeroSection />
        <Featured />
        <WhyChooseUs />
        <TestimonialCards />
        <UpcomingWebinars />
        <Instructors />
        
        <footer className="py-20 border-t border-white/10 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} MelodyMind AI. Reshaping Music Education.</p>
        </footer>
      </div>
    </main>
  );
}