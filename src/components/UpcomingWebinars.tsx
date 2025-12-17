"use client";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/button";

const webinars = [
  {
    title: "Mastering the Mix",
    description: "Learn professional mixing techniques from industry veterans.",
    link: "/webinars/mastering-the-mix",
  },
  {
    title: "AI in Music Production",
    description: "Discover how AI is reshaping the way we create sounds.",
    link: "/webinars/ai-music",
  },
  {
    title: "Songwriting Secrets",
    description: "Unlock your creative potential with our storytelling workshop.",
    link: "/webinars/songwriting",
  },
  {
    title: "Live Performance Tech",
    description: "Setting up your digital rig for flawless live shows.",
    link: "/webinars/live-performance",
  },
  {
    title: "Digital Marketing for Artists",
    description: "How to build your audience in the streaming era.",
    link: "/webinars/marketing",
  },
  {
    title: "Vocal Processing Pro",
    description: "Get that radio-ready vocal sound with advanced EQ and compression.",
    link: "/webinars/vocal-pro",
  }
];

export default function UpcomingWebinars() {
  return (
    <div className="p-12 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Live Learning</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
          <HoverEffect items={webinars} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/courses"}>
            <Button variant="outline">View All Webinars</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}