import { getAllInstructors } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Server Component
export default async function InstructorsSection() {
  const instructors = await getAllInstructors();

  return (
    <section className="py-20 bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-primary font-semibold tracking-wider uppercase">The Masters</h2>
        <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
          Meet Our Elite Instructors
        </p>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn from the best in the industry—virtuosos and seasoned professionals dedicated to your success.
        </p>

        <div className="mt-16 flex justify-center">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
            {instructors.map((instructor) => (
              <Link
                key={instructor.id}
                href={`/instructors/${instructor.id}`} // Placeholder route
                className="flex flex-col items-center group relative w-32 h-32 md:w-40 md:h-40"
              >
                {/* Instructor Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-300 transform group-hover:scale-105">
                  <Image
                    src={instructor.image || '/images/default-avatar.jpg'}
                    alt={instructor.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-300" />
                </div>

                {/* Tooltip-like information on hover */}
                <div className="absolute top-[100%] mt-4 py-2 px-4 rounded-xl bg-card border border-border shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-foreground whitespace-nowrap">{instructor.name}</p>
                  <p className="text-xs text-primary">{instructor.instrument}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
            <Link href="/about" passHref>
                <Button variant="outline" size="lg" className="h-12">
                    Meet the Full Team
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}