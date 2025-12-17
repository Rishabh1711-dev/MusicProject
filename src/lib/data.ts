import coursesData from '@/data/courses.json';
import { Course, CourseFilter, Instructor } from './types';
import { sleep } from './utils';


const courses = coursesData as Course[];
const instructors: Instructor[] = [
  { id: 1, name: 'Alex Turner', instrument: 'Guitar & Theory', image: '/images/alex.jpg', bio: 'A world-renowned virtuoso specializing in contemporary guitar and advanced music theory.', courses: 3 },
  { id: 2, name: 'Emily Hayes', instrument: 'Piano & Composition', image: '/images/emily.jpg', bio: 'Master composer and pianist with a passion for teaching classical and film scoring techniques.', courses: 4 },
  { id: 3, name: 'Max Vibe', instrument: 'Electronic Production', image: '/images/max.jpg', bio: 'A chart-topping electronic producer known for his innovative sound design and mixing techniques.', courses: 2 },
  { id: 4, name: 'Sarah Chen', instrument: 'Vocal Coach', image: '/images/sarah.jpg', bio: 'Top-tier vocal coach who has trained artists for major label auditions and world tours.', courses: 2 },
  { id: 5, name: 'Marcus Jones', instrument: 'Drums & Percussion', image: '/images/marcus.jpg', bio: 'A session drummer with decades of experience across rock, funk, and jazz genres.', courses: 1 },
];

/**
 * Fetches and filters/sorts all courses based on the provided criteria.
 * This function simulates a server-side data fetching operation.
 * @param filters - The filter and sort criteria from searchParams.
 * @returns A promise that resolves to an array of filtered/sorted courses.
 */
export async function getAllCourses(filters: CourseFilter = {}): Promise<Course[]> {
  // Simulate network latency for filtering/search operation
  await sleep(filters.query || filters.level || filters.tag || filters.sort ? 300 : 0); 

  let filteredCourses = [...courses];

  // 1. Filter by query
  if (filters.query) {
    const searchLower = filters.query.toLowerCase();
    filteredCourses = filteredCourses.filter(course =>
      course.title.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      course.instructor.toLowerCase().includes(searchLower) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // 2. Filter by level
  if (filters.level) {
    filteredCourses = filteredCourses.filter(course => course.level === filters.level);
  }

  // 3. Filter by tag
  if (filters.tag) {
    filteredCourses = filteredCourses.filter(course => course.tags.includes(filters.tag!));
  }

  // 4. Sort
  if (filters.sort) {
    filteredCourses.sort((a, b) => {
      switch (filters.sort) {
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          // Default: sort by featured status then price descending
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.price - a.price;
      }
    });
  }

  // If no sort specified, default to featured first, then title asc
  if (!filters.sort) {
    filteredCourses.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return a.title.localeCompare(b.title);
    });
  }


  return filteredCourses;
}

export async function getFeaturedCourses(): Promise<Course[]> {
  await sleep(100);
  return courses.filter(course => course.isFeatured).slice(0, 3); // Limit to 3 for featured section
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  await sleep(100);
  return courses.find(course => course.slug === slug) || null;
}

export async function getAllInstructors(): Promise<Instructor[]> {
  await sleep(100);
  return instructors;
}

// Minimal simulated auth state for the dashboard
export async function getDashboardData(userId: string = 'user123'): Promise<{ enrolledCourses: Course[], progress: Record<number, number> } | null> {
  await sleep(200);
  // This simulates a logged-in user with ID 'user123'
  if (userId === 'user123') {
    // Mapping enrolled courses based on ID from the courses array
    const enrolled = courses.filter(c => c.id === 1 || c.id === 4); 
    return {
      enrolledCourses: enrolled,
      progress: {
        1: 65, // Guitar: 65% complete
        4: 100, // Vocals: 100% complete
      }
    };
  }
  // This simulates a logged-out state
  return null;
}