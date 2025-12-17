import React from "react";
import Link from "next/link";
import { getAllCourses } from "@/lib/data/course-data";
import { CourseCard } from "@/components/courses/CourseCard";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default async function Featured() {
  const allCourses = await getAllCourses();
  const featuredCourses = allCourses.filter(course => course.isFeatured).slice(0, 3);

  return (
    <section className="py-24 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-500 text-xs font-bold tracking-widest uppercase">
              <Sparkles size={14} /> Elite Selection
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured Programs
            </h3>
          </div>
          <Link href="/courses" className="mt-8 md:mt-0">
            <Button variant="outline" className="group border-neutral-800 hover:border-teal-500/50 hover:bg-teal-500/5 transition-all duration-300">
              View full catalog <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div key={course.id} className="relative">
              <CourseCard course={course} />
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-teal-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-2xl flex items-center gap-1 uppercase tracking-tighter ring-1 ring-white/20">
                  Must Learn
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}