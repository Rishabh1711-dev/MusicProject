import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const testimonials = [
  { quote: "Axiom Academy revolutionized my approach to sound design. The lessons are practical, engaging, and taught by true masters.", name: "Ethan Hunt", title: "Professional Producer" },
  { quote: "I went from zero knowledge to recording my own songs in six months. The piano course structure is flawless.", name: "Sophia Lee", title: "Aspiring Songwriter" },
  { quote: "The jazz harmony modules are unparalleled. It truly is world-class content that pushed my improvisation skills to a new level.", name: "Marcus 'MJ' Jones", title: "Jazz Musician" },
  { quote: "The community aspect is incredible. I've found collaborators and mentors who genuinely care about my musical journey.", name: "Chloe Davis", title: "Guitarist & Composer" },
  { quote: "The production course gave me the confidence to finally release my first EP. Worth every penny.", name: "Alex Ramirez", title: "Electronic Artist" },
];

// Server Component wrapper for the Client Component effect
export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-primary font-semibold tracking-wider uppercase">The Proof Is In The Progress</h2>
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            Trusted by Creators Worldwide
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our students are achieving every day.
          </p>
        </div>

        <div className="mt-12">
          {/* Client Component for the infinite scroll effect */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}
