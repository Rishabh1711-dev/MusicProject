// Defines core interfaces for type safety across the application

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

export interface UserSession {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
    skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  };
  expires: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string; // e.g., "15 mins"
  videoUrl: string;
  isCompleted: boolean;
}

export interface UserProgress {
    courseId: number;
    lessonsCompleted: number;
    totalLessons: number;
    masteryScore: number;
    lastActive: string;
}

export interface SkillMetric {
    skill: string; // e.g., 'Rhythm', 'Harmony', 'Improvisation'
    score: number; // 0-100
}