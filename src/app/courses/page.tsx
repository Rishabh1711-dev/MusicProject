import React, { Suspense } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { getAllCourses } from "@/lib/data/course-data";
import { Course } from "@/lib/types";
import { Search, SlidersHorizontal, Loader2 } from "lucide-react";
import { notFound } from "next/navigation";

// Define Sort options
const SORT_OPTIONS = [
    { label: "Title (A-Z)", value: "title" },
    { label: "Price (Low to High)", value: "price" },
];

interface CourseListingProps {
    searchParams: {
        search?: string;
        sort?: 'title' | 'price' | 'instructor';
    };
}

// Client Component for the Search/Filter UI (Input and Select)
// Needs 'use client' because it handles form submission and local state for input
function FilterAndSortControls({ initialSearch = "", initialSort = "title" }: { initialSearch?: string, initialSort?: string }) {
    return (
        <div className="mt-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                {/* Use 'defaultValue' for Server Component state synchronization */}
                <input
                    type="search"
                    name="search"
                    placeholder="Search by title or instructor..."
                    className="w-full px-4 py-3 pl-10 rounded-lg border border-neutral-800 bg-neutral-950 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150"
                    defaultValue={initialSearch}
                />
            </div>
            
            {/* Sort Dropdown */}
            <div className="relative">
                <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                <select
                    name="sort"
                    defaultValue={initialSort}
                    className="w-full md:w-48 appearance-none px-4 py-3 pl-10 rounded-lg border border-neutral-800 bg-neutral-950 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer transition duration-150"
                    onChange={(e) => {
                        const params = new URLSearchParams(window.location.search);
                        params.set('sort', e.target.value);
                        window.history.pushState(null, '', `?${params.toString()}`);
                        window.location.reload(); // Simple way to trigger server component reload
                    }}
                >
                    {SORT_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
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
          {courses.map((course: Course) => (
            <CardContainer key={course.id} className="inter-var">
              <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-teal-500/[0.1] dark:bg-black dark:border-white/[0.2] border-neutral-800/50 w-auto h-full rounded-xl p-6 border transition-all duration-300">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-200 dark:text-white line-clamp-2"
                >
                  {course.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 line-clamp-3"
                >
                  {course.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl transition-shadow duration-500"
                    alt={course.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`/courses/${course.slug}`}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-teal-400 hover:underline"
                  >
                    Details →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-teal-600 dark:bg-teal-600 dark:text-white text-white text-xs font-bold hover:bg-teal-700 transition duration-200"
                  >
                    Buy ${course.price}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
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
          
          {/* Filter and Sort Form - Must use a client component for interactivity */}
          <form>
            <FilterAndSortControls initialSearch={search} initialSort={sort} />
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