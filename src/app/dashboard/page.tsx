import { Suspense } from 'react';
import { getServerSession } from '@/lib/auth';
import { getUserDashboardData, getAllCourses } from '@/lib/data/course-data';
import { AuthStatus } from '@/components/lms/AuthStatus';
import { ProgressCircle } from '@/components/lms/ProgressCircle';
import { Activity, Clock, Guitar, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { Course, UserProgress, SkillMetric } from '@/lib/types';

// Utility to find course title from ID
const getCourseTitle = (courses: Course[], id: number) => {
    return courses.find(c => c.id === id)?.title || `Course ID ${id}`;
};

// Main Server Component for the Dashboard
async function DashboardContent() {
    const session = await getServerSession();

    if (!session) {
        // This redirect should be handled by middleware/AuthStatus for Client Components
        return <div className="text-center text-neutral-500 py-10">Redirecting to login...</div>;
    }

    const [dashboardData, allCourses] = await Promise.all([
        getUserDashboardData(session.user.id),
        getAllCourses('', 'id')
    ]);

    const { progress, skills } = dashboardData;
    
    // Explicit types added for safety
    const totalProgress = progress.reduce((sum: number, p: UserProgress) => sum + p.masteryScore, 0) / (progress.length || 1);

    return (
        <div className="p-4 md:p-8 bg-black/[0.9] min-h-screen">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-2">
                Welcome back, {session.user.name.split(' ')[0]}
            </h1>
            <p className="text-neutral-400 text-lg mb-10">
                Your personalized learning journey is waiting.
            </p>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card title="Total Mastery" icon={<TrendingUp className="h-6 w-6 text-teal-400" />} value={`${totalProgress.toFixed(0)}%`} description="Average mastery across active courses." />
                <Card title="Skill Level" icon={<Zap className="h-6 w-6 text-blue-400" />} value={session.user.skillLevel} description="Current assessed skill category." />
                <Card title="Active Courses" icon={<Guitar className="h-6 w-6 text-yellow-400" />} value={progress.length.toString()} description="Courses currently in progress." />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Progress & Next Step */}
                <div className="lg:col-span-2 space-y-10">
                    <h2 className="text-3xl font-bold text-white mb-4 border-b border-neutral-800 pb-2">My Learning Path</h2>

                    {/* Progress Overview */}
                    <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 shadow-lg">
                        <div className="flex flex-wrap gap-8 justify-around items-center">
                            <ProgressCircle progress={totalProgress} label="Overall Progress" size={140} strokeWidth={10} />
                            
                            <div className="flex-1 min-w-[200px]">
                                <h3 className="text-xl font-semibold text-white mb-3">Your Next Step</h3>
                                <p className="text-neutral-400 mb-4">
                                    Continue your journey to **Advanced Vocal Techniques**.
                                </p>
                                <Link href={`/learn/3/4`} passHref>
                                    <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 flex items-center space-x-2">
                                        <Activity className="h-5 w-5" />
                                        <span>Start Next Lesson</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Active Courses List */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-4">Active Courses</h3>
                        {progress.map((p: UserProgress) => (
                            <div key={p.courseId} className="p-4 bg-neutral-900/70 rounded-lg flex justify-between items-center hover:bg-neutral-800 transition duration-200 border border-neutral-800">
                                <div className="flex flex-col">
                                    <span className="text-lg font-medium text-white">{getCourseTitle(allCourses, p.courseId)}</span>
                                    <div className="flex items-center space-x-2 text-sm text-neutral-400 mt-1">
                                        <Clock className="h-4 w-4" />
                                        <span>Last Active: {p.lastActive}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-teal-400 font-bold">{p.lessonsCompleted}/{p.totalLessons} Lessons</span>
                                    <div className="h-1.5 w-24 bg-neutral-700 rounded-full mt-1">
                                        <div 
                                            className="h-full bg-teal-500 rounded-full transition-all duration-500" 
                                            style={{ width: `${(p.lessonsCompleted / p.totalLessons) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Skill Graph */}
                <div className="space-y-10">
                    <h2 className="text-3xl font-bold text-white mb-4 border-b border-neutral-800 pb-2">Skill Breakdown</h2>

                    <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 shadow-lg">
                        <p className="text-neutral-400 mb-6">Your current estimated mastery scores based on practice and quiz results.</p>
                        
                        <div className="space-y-4">
                            {skills.sort((a: SkillMetric, b: SkillMetric) => b.score - a.score).map((skill: SkillMetric) => (
                                <div key={skill.skill}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-white font-medium">{skill.skill}</span>
                                        <span className="text-sm font-bold text-teal-400">{skill.score}%</span>
                                    </div>
                                    <div className="h-2 bg-neutral-700 rounded-full">
                                        <div 
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{ 
                                                width: `${skill.score}%`,
                                                backgroundColor: skill.score > 75 ? 'var(--primary)' : skill.score > 50 ? 'rgb(250 204 21)' : 'rgb(59 130 246)'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* CTA to AI Pathfinder */}
                    <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-teal-500/30">
                         <h3 className="text-xl font-semibold text-white mb-3">Optimize Your Path</h3>
                         <p className="text-neutral-400 mb-4 text-sm">Use our AI Pathfinder to generate a custom curriculum based on your weakest skills.</p>
                         <Link href="/ai-pathfinder" passHref>
                            <button className="w-full px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 font-bold transition duration-200">
                                Launch AI Pathfinder
                            </button>
                         </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Simple card component for dashboard stats
const Card = ({ title, icon, value, description }: { title: string, icon: React.ReactNode, value: string, description: string }) => (
    <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 shadow-xl flex items-start space-x-4">
        <div className="p-3 rounded-full bg-neutral-800/50">
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-neutral-400">{title}</p>
            <h3 className="text-3xl font-extrabold text-white mt-1">{value}</h3>
            <p className="text-xs text-neutral-500 mt-1">{description}</p>
        </div>
    </div>
);


export default function DashboardPage() {
    return (
        <AuthStatus>
            <Suspense fallback={<DashboardSkeleton />}> 
                <DashboardContent />
            </Suspense>
        </AuthStatus>
    );
}

const DashboardSkeleton = () => (
    <div className="p-4 md:p-8 bg-black/[0.9] min-h-screen animate-pulse">
         <div className="h-10 bg-neutral-800 w-80 rounded mb-10"></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map(i => (
                <div key={i} className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 shadow-xl h-28">
                    <div className="h-4 bg-neutral-800 w-1/3 mb-4 rounded"></div>
                    <div className="h-6 bg-neutral-700 w-2/3 rounded"></div>
                </div>
            ))}
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
                <div className="h-8 bg-neutral-800 w-60 rounded mb-6"></div>
                <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 shadow-lg h-40">
                    <div className="flex gap-8">
                        <div className="h-28 w-28 rounded-full bg-neutral-800"></div>
                        <div className="flex-1 space-y-3 pt-2">
                            <div className="h-5 bg-neutral-800 w-1/2 rounded"></div>
                            <div className="h-4 bg-neutral-700 w-full rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-10">
                 <div className="h-8 bg-neutral-800 w-40 rounded mb-6"></div>
                 <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 shadow-lg h-72">
                    <div className="h-4 bg-neutral-800 w-full rounded mb-4"></div>
                 </div>
            </div>
         </div>
    </div>
);