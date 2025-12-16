import courseData from "@/data/music_courses.json";
import { Course, UserProgress, SkillMetric } from "@/lib/types";

// Mock implementation for server-side data fetching and processing

/**
 * Simulates an async database query for all courses with server-side logic.
 * @param searchTerm Filters by title, instructor, or description.
 * @param sortBy Sorts by a key (e.g., 'title', 'price').
 */
export async function getAllCourses(
  searchTerm: string = "",
  sortBy: keyof Course = "title"
): Promise<Course[]> {
  await new Promise(resolve => setTimeout(resolve, 300));

  let courses: Course[] = courseData.courses as Course[];
  
  const term = searchTerm.toLowerCase();
  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(term) ||
    course.instructor.toLowerCase().includes(term) ||
    course.description.toLowerCase().includes(term)
  );

  const sorted = filtered.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    
    if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.localeCompare(valB);
    }
    if (typeof valA === 'number' && typeof valB === 'number') {
        return valA - valB;
    }
    return 0;
  });

  return sorted;
}

/**
 * Fetches a single course by slug.
 */
export async function getCourseBySlug(slug: string): Promise<Course | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  const course = (courseData.courses as Course[]).find((c) => c.slug === slug);
  return course || null;
}

/**
 * Fetches data for the dashboard. (MOCK)
 */
export async function getUserDashboardData(userId: string): Promise<{ progress: UserProgress[], skills: SkillMetric[] }> {
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        progress: [
            { courseId: 1, lessonsCompleted: 7, totalLessons: 12, masteryScore: 78, lastActive: "2 days ago" },
            { courseId: 3, lessonsCompleted: 3, totalLessons: 8, masteryScore: 55, lastActive: "5 days ago" },
            { courseId: 6, lessonsCompleted: 1, totalLessons: 10, masteryScore: 20, lastActive: "1 week ago" },
        ],
        skills: [
            { skill: 'Rhythm', score: 85 },
            { skill: 'Harmony', score: 60 },
            { skill: 'Improvisation', score: 45 },
            { skill: 'Sight-Reading', score: 70 },
        ]
    };
}