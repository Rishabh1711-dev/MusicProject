import HeroSection from "@/components/HeroSection"; // Assuming this is the old component
import Featured from "@/components/Featured"; // Assuming this is the old component
import WhyChooseUs from "@/components/WhyChooseUs"; // Assuming this is the old component
import MusicSchoolTestimonials from "@/components/TestimonialCards"; // Assuming this is the old component
import Instructors from "@/components/Instructors"; // Assuming this is the old component
import UpcomingWebinars from "@/components/UpcomingWebinars"; // Assuming this is the old component
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams"; // Assuming this UI primitive exists

// Refactored Hero Section for the AI Pathfinder focus
function NewHeroSection() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          Music Mastery, Personalized.
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Ditch the rigid curriculum. Our **AI Pathfinder** creates a dynamic, 
          step-by-step learning journey tailored precisely to your goals and skill level. 
          Real-time feedback included.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/login" passHref>
                <button className="px-8 py-3 rounded-full bg-teal-600 hover:bg-teal-700 font-bold text-white transition duration-300 shadow-lg shadow-teal-500/20 flex items-center space-x-2">
                    <span>Start Your AI Path</span>
                    <MoveRight className="h-5 w-5" />
                </button>
            </Link>
            <Link href="/courses" passHref>
                <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition duration-300">
                    Explore All Courses
                </button>
            </Link>
        </div>
      </div>
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full pointer-events-none" />
    </div>
  );
}


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <NewHeroSection/> {/* Use the new focused Hero */}
      <Featured/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
  );
}