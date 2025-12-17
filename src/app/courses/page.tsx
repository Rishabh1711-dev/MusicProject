import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import courseData from "@/data/music_courses.json";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-center text-gradient mb-12">
          Explore All Courses
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.courses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
                <Link href={`/courses/${course.slug}`} className="mt-4 block">
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Learn More </span>
                    <span className="bg-zinc-700 rounded-full text-[10px] px-2 py-0.5">
                      $ {course.price}
                    </span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}