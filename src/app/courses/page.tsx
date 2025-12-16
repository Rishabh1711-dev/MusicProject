import React, { Suspense } from "react";
// Remove CardBody, CardContainer, CardItem, Link, Image imports
import { getAllCourses } from "@/lib/data/course-data";
import { Course } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { notFound } from "next/navigation";
import FilterAndSort from "@/components/courses/FilterAndSort";
// New: Import the new CourseCard component
import CourseCard from "@/components/courses/CourseCard";


interface CourseListingProps {
    searchParams: {
        search?: string;
        sort?: 'title' | 'price' | 'instructor';
    };
}

// Server Component to Fetch and Display Courses
async function CourseContent({ search, sort }: { search?: string, sort?: 'title' | 'price' | 'instructor' }) {
    const courses = await getAllCourses(search || "", sort);

    if (courses.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-neutral-300 mb-2">No Courses Found</h2>
                <p className="text-neutral-500">Try a different search term or adjust your filters.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {/* Use the new CourseCard Client Component */}
          {courses.map((course: Course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
    );
}

// Skeleton Loader for the Course Grid
const CourseGridSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 animate-pulse">
        {[...Array(6)].map((_, i) => (
            <div key={i} className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 h-[30rem]">
                <div className="h-6 bg-neutral-800 rounded mb-3 w-3/4"></div>
                <div className="h-4 bg-neutral-800 rounded mb-6 w-full"></div>
                <div className="h-60 bg-neutral-800 rounded-xl mb-6"></div>
                <div className="flex justify-between">
                    <div className="h-8 w-1/4 bg-neutral-800 rounded-xl"></div>
                    <div className="h-8 w-1/4 bg-teal-600/50 rounded-xl"></div>
                </div>
            </div>
        ))}
    </div>
);


export default function CoursesPage({ searchParams }: CourseListingProps) {
  const { search, sort } = searchParams;
  
  return (
    <div className="min-h-screen bg-black py-12 pt-28"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-teal-400 to-blue-500">
            Course Catalog
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg mx-auto">
            Browse our comprehensive collection of music courses, or use the AI Pathfinder for a custom journey.
          </p>
          
          {/* Filter and Sort Form */}
          <form>
            <FilterAndSort initialSearch={search} initialSort={sort} />
          </form>
        </div>

        {/* Course Grid - Uses Suspense to show loader while data is fetched on the server */}
        <Suspense fallback={<CourseGridSkeleton />}>
            <CourseContent search={search} sort={sort} />
        </Suspense>
        
      </div>
    </div>
  );
}