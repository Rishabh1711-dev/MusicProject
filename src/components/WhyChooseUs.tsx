import { Music3, Zap, GraduationCap, Users } from 'lucide-react';
import { WavyBackground } from '@/components/ui/WavyBackground';

const features = [
  { icon: Music3, title: 'Industry-Elite Instructors', description: 'Learn directly from Grammy-winning producers and world-touring musicians.' },
  { icon: Zap, title: 'Highly Interactive Learning', description: 'Hands-on projects, live Q&A sessions, and instant feedback loops for accelerated progress.' },
  { icon: GraduationCap, title: 'Structured Path to Mastery', description: 'Follow a proven curriculum designed to take you from novice to professional.' },
  { icon: Users, title: 'Global Creative Community', description: 'Connect, collaborate, and grow with thousands of aspiring and established artists worldwide.' },
];

// Server Component
export default function WhyChooseUs() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* WavyBackground is a Client Component but is safe to use here as a visual wrapper */}
      <WavyBackground className="max-w-7xl mx-auto py-20">
        <div className="text-center relative z-10">
          <h2 className="text-primary font-semibold tracking-wider uppercase">Why Axiom?</h2>
          <p className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Beyond Traditional Education
          </p>
          <p className="mt-4 text-xl text-neutral-300 max-w-3xl mx-auto">
            We merge cutting-edge technology with unparalleled human expertise.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card/70 backdrop-blur-sm border border-primary/20 shadow-2xl hover:border-primary transition-all duration-500 transform hover:scale-[1.02]"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </WavyBackground>
    </div>
  );
}