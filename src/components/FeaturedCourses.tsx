"use client";
import React from "react";
import { Button } from "./ui/button";

const courses = [
  { id: 1, title: "Electronic Music 101", desc: "Start your journey in DAW based production.", price: "$99" },
  { id: 2, title: "Modern Jazz Theory", desc: "Advanced scales and improvisation techniques.", price: "$149" },
  { id: 3, title: "The Art of Vocal Mix", desc: "Learn how to make vocals sit perfectly in the mix.", price: "$129" },
];

export default function FeaturedCourses() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">Featured Courses</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With The Best
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="p-8 rounded-3xl glass hover:border-blue-500/50 transition-all flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
            <p className="text-zinc-400 mb-6 flex-grow">{course.desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-bold text-white">{course.price}</span>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}