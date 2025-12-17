/**
 * Unified type definitions for MelodyMind
 */
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
  level: CourseLevel;
  tags: string[];
  duration: string;
  lessons: number;
}

export interface CourseFilter {
  query?: string;
  level?: CourseLevel;
  tag?: string;
  sort?: 'title-asc' | 'price-asc' | 'price-desc';
}

export interface UserSession {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
    skillLevel: CourseLevel;
  };
  status: 'authenticated' | 'unauthenticated' | 'loading';
}

export interface UserProgress {
    courseId: number;
    lessonsCompleted: number;
    totalLessons: number;
    masteryScore: number;
    lastActive: string;
}

export interface SkillMetric {
    skill: string; 
    score: number; 
}