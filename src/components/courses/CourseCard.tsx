"use client";
import React from "react";
import Link from "next/link";
import { Course } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Clock, BookOpen, User } from "lucide-react";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link 
      href={`/courses/${course.slug}`} 
      className="group block h-full p-6 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-teal-500/50 hover:bg-neutral-900 transition-all duration-300 relative overflow-hidden"
    >
      {/* Decorative Gradient Background (No Image) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col h-full space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-teal-500 uppercase tracking-widest px-2 py-1 rounded bg-teal-500/10">
              {course.level}
            </span>
            <span className="text-lg font-bold text-white">
              {formatPrice(course.price)}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </div>

        <p className="text-sm text-neutral-400 line-clamp-3 flex-grow">
          {course.description}
        </p>

        <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <User size={14} className="text-teal-500" />
            <span className="truncate">{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Clock size={14} className="text-teal-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <BookOpen size={14} className="text-teal-500" />
            <span>{course.lessons} Lessons</span>
          </div>
        </div>
      </div>
    </Link>
  );
}