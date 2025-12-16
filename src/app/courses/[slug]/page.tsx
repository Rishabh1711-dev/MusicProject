import { getCourseBySlug } from "@/lib/data/course-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // FIX: Import Link from next/link
import { CheckCircle, Clock, DollarSign } from "lucide-react";


export default async function CourseDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // MOCK LESSONS - for dynamic curriculum visibility
  const mockLessons = [
    { id: 1, title: "Module 1: Instrument Setup & Fundamentals", duration: "15 mins", isCompleted: true },
    { id: 2, title: "Module 2: Basic Chords and Scales", duration: "20 mins", isCompleted: true },
    { id: 3, title: "Module 3: Rhythm and Timing Mastery", duration: "25 mins", isCompleted: false },
    { id: 4, title: "Module 4: Introduction to Improvisation", duration: "30 mins", isCompleted: false },
    { id: 5, title: "Module 5: Performance Techniques", duration: "40 mins", isCompleted: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               <Image 
                 src={course.image} 
                 alt={course.title} 
                 fill 
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-end p-6">
                 <span className="px-3 py-1 bg-teal-600/80 text-white text-sm font-semibold rounded-full backdrop-blur-md">
                    {course.isFeatured ? 'Featured Course' : 'Available'}
                 </span>
               </div>
            </div>

            {/* Course Curriculum/Lessons */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6 border-b border-neutral-800 pb-3">Syllabus ({mockLessons.length} Modules)</h2>
                <div className="space-y-3">
                    {mockLessons.map((lesson) => (
                    <div 
                        key={lesson.id} 
                        className={`p-4 rounded-lg flex justify-between items-center transition-all duration-300 ${
                            lesson.isCompleted 
                                ? 'bg-neutral-800/50 border-l-4 border-teal-500' 
                                : 'bg-neutral-900/50 border-l-4 border-neutral-700 hover:bg-neutral-800'
                        }`}
                    >
                        <div className="flex items-center space-x-3">
                            <span className={`font-semibold ${lesson.isCompleted ? 'text-teal-400' : 'text-neutral-300'}`}>
                                {lesson.id}. {lesson.title}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                            <span className="text-neutral-500 flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{lesson.duration}</span>
                            </span>
                            {lesson.isCompleted && <CheckCircle className="h-5 w-5 text-teal-500" />}
                        </div>
                    </div>
                    ))}
                </div>
                
                {/* Simulated Lesson Access Link - protected */}
                <Link href={`/dashboard`} passHref>
                    <button className="mt-8 px-6 py-3 rounded-full border border-teal-600 hover:bg-teal-600/20 text-teal-400 font-semibold transition duration-200">
                        View Your Learning Progress
                    </button>
                </Link>

            </div>
          </div>

          {/* Right Column: Enrollment Card */}
          <div className="lg:col-span-1">
            <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 sticky top-28 shadow-xl">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
                    Course Summary
                </h2>

                <p className="text-neutral-400 text-base mb-6">
                  {course.description}
                </p>
                
                <div className="space-y-4 mb-8 border-t border-neutral-800 pt-4">
                    <div className="flex items-center space-x-2 justify-between">
                        <span className="text-teal-500 font-semibold flex items-center space-x-2">Instructor:</span>
                        <span className="text-white font-medium">{course.instructor}</span>
                    </div>
                    <div className="flex items-center space-x-2 justify-between">
                        <span className="text-teal-500 font-semibold flex items-center space-x-2">
                             <DollarSign className="h-5 w-5"/> Price:
                        </span>
                        <span className="text-3xl font-extrabold text-white">${course.price}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <button className="w-full px-8 py-3 rounded-full bg-teal-600 hover:bg-teal-700 font-bold transition duration-200 shadow-md shadow-teal-500/30">
                        Enroll Now
                    </button>
                    <button className="w-full px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition duration-200">
                        Watch Trailer
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}