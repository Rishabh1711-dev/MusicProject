import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/Spotlight';
import { cn } from '@/lib/utils';

// Server Component
export default function HeroSection() {
  return (
    <div className="h-[90vh] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full">
        {/* Spotlight Effect (Server Component for Static Visual) */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="hsl(var(--primary) / 0.4)" // Vibrant Primary Blue
        />
        <Spotlight
          className="top-[300px] right-20"
          fill="hsl(var(--accent) / 0.3)" // Vibrant Accent Magenta
        />
        
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="mt-20 md:mt-0 text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 drop-shadow-lg">
                Master Your Music.
            </h1>
            <p className="mt-6 font-light text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto">
                Join Axiom Academy and learn from the world's elite musicians and producers. Your journey to mastery starts now.
            </p>
            <div className="mt-10 flex justify-center space-x-6">
                <Link href="/courses">
                    <Button variant="shimmer-border" size="lg" className="h-14 text-lg border-primary/70">
                        Explore Courses
                    </Button>
                </Link>
                <Link href="/pricing">
                    <Button variant="outline" size="lg" className="h-14 text-lg">
                        View Plans
                    </Button>
                </Link>
            </div>
        </div>
      </div>

      {/* Background Gradient overlay for depth */}
      <div className="absolute inset-0 z-0 bg-background/50 pointer-events-none">
        {/* Subtle radial gradient to center the focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

    </div>
  );
}