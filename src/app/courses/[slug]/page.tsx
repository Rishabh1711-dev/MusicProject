import courseData from "@/data/music_courses.json";
import { notFound } from "next/navigation";
import Image from "next/image";
async function getCourse(slug: string) {
  return courseData.courses.find((c) => c.slug === slug);
}

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 pt-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Column: Image */}
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-white/10">
               <Image 
                 src={course.image} 
                 alt={course.title} 
                 fill 
                 className="object-cover"
               />
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
              {course.title}
            </h1>
            <p className="text-neutral-400 text-lg mb-6">
              {course.description}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-teal-500 font-semibold">Instructor:</span>
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-teal-500 font-semibold">Price:</span>
                <span className="text-2xl font-bold">${course.price}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="px-8 py-3 rounded-full bg-teal-600 hover:bg-teal-700 font-bold transition duration-200">
                Enroll Now
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition duration-200">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-4 bg-neutral-900/50 rounded-lg border border-white/5 flex justify-between items-center">
                <span className="text-neutral-300">Module {item}: Introduction to concepts</span>
                <span className="text-neutral-500 text-sm">15 mins</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}