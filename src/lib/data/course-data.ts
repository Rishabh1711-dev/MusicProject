import courseData from "@/data/music_courses.json";
import { Course, UserProgress, SkillMetric } from "@/lib/types";
import { sleep } from "@/lib/utils";

/**
 * Fetches all courses from JSON with full visibility
 */
export async function getAllCourses(
  searchTerm: string = "",
  sortBy: keyof Course = "title"
): Promise<Course[]> {
  await sleep(300);

  // Cast the raw JSON data to our Course type
  let courses: Course[] = (courseData.courses || []) as Course[];
  
  const term = searchTerm.toLowerCase();
  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(term) ||
    course.instructor.toLowerCase().includes(term) ||
    course.description.toLowerCase().includes(term)
  );

  return filtered.sort((a, b) => {
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
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  await sleep(100);
  const courses = (courseData.courses || []) as Course[];
  return courses.find((c) => c.slug === slug) || null;
}

/**
 * Dynamic dashboard data that maps to all courses found in the JSON
 */
export async function getUserDashboardData(userId: string): Promise<{ progress: UserProgress[], skills: SkillMetric[] }> {
    await sleep(800);
    const courses = (courseData.courses || []) as Course[];

    // Generate progress for all courses to ensure visibility
    const progress = courses.map(course => ({
        courseId: course.id,
        lessonsCompleted: Math.floor(Math.random() * course.lessons),
        totalLessons: course.lessons,
        masteryScore: Math.floor(Math.random() * 100),
        lastActive: "Recent"
    }));

    return {
        progress,
        skills: [
            { skill: 'Rhythm', score: 85 },
            { skill: 'Harmony', score: 60 },
            { skill: 'Improvisation', score: 45 }
        ]
    };
}