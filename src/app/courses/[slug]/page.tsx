import { getCourseBySlug } from "@/lib/data";
import { ArrowRight, Clock, DollarSign, FileText, LayoutList, CheckCircle, Circle, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

interface CourseSlugPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CourseSlugPageProps) {
    const course = await getCourseBySlug(params.slug);

    if (!course) {
        return {
            title: "Course Not Found | Axiom Academy",
        }
    }

    return {
        title: `${course.title} | Axiom Academy`,
        description: course.description,
        keywords: [...course.tags, course.level, course.instructor, "course", "music"],
    };
}

// Server Component
export default async function CourseSlugPage({ params }: CourseSlugPageProps) {
  const course = await getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              {course.title}
            </h1>
            <p className="mt-2 text-xl text-primary font-medium">
              Taught by: <span className="text-foreground">{course.instructor}</span>
            </p>
            
            <div className="relative mt-6 w-full h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={course.image || '/images/default-course.jpg'}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Overview */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-foreground mb-4 border-b border-border pb-2">Course Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {course.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
                {course.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/40">
                        {tag}
                    </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/40">
                    {course.level}
                </span>
              </div>
            </section>

            {/* Course Curriculum */}
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 border-b border-border pb-2">What You'll Learn ({course.lessons} Lessons)</h2>
              <div className="space-y-4">
                {course.path.map((lesson, index) => (
                  <details key={index} className="rounded-xl border border-border bg-card/70 p-4 group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <div className="flex items-center space-x-3">
                        {lesson.isCompleted ? (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" aria-label="Completed" />
                        ) : (
                            <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" aria-label="Not Started" />
                        )}
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          Lesson {index + 1}: {lesson.title}
                        </span>
                      </div>
                      <span className="text-muted-foreground group-open:hidden"><ArrowDown className="w-4 h-4" /></span>
                      <span className="text-primary hidden group-open:inline-block"><ArrowUp className="w-4 h-4" /></span>
                    </summary>
                    <p className="mt-3 pl-8 text-muted-foreground text-sm border-l border-border ml-2">
                      {lesson.description}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (Purchase Card) */}
          <aside className="lg:col-span-1 sticky top-[100px] h-fit">
            <div className="p-6 rounded-2xl bg-card border border-primary/30 shadow-2xl shadow-primary/10">
              <h3 className="text-3xl font-extrabold text-foreground flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-primary" />
                {formatPrice(course.price)}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">One-time payment for lifetime access.</p>

              <div className="mt-6 space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Duration: <strong className="text-foreground">{course.duration}</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <LayoutList className="w-5 h-5 text-primary" />
                  <span>Lessons: <strong className="text-foreground">{course.lessons}</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Materials: <strong className="text-foreground">HD Video, MIDI, & Projects</strong></span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/dashboard" passHref>
                    <Button className="w-full h-12 text-lg" variant="default">
                      Enroll Now <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </Link>
                <p className="mt-3 text-xs text-center text-muted-foreground">
                  30-Day Money-Back Guarantee
                </p>
              </div>
            </div>
            {/* Ad for Instructor */}
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30 text-center">
                <p className="font-semibold text-primary">
                    Interested in the instructor, {course.instructor}?
                </p>
                <Link href="/about" className="text-sm text-primary/80 hover:underline">
                    View instructor profile & philosophy &rarr;
                </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}