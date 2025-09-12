import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import Instructors from "@/components/Instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
<HeroSection/>
<Featured/>
<WhyChooseUs/>
<MusicSchoolTestimonials/>
<UpcomingWebinars/>
<Instructors/>
</main>
  );
}
