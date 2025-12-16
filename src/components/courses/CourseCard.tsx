"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/lib/types"; 

interface CourseCardProps {
    course: Course;
}

/**
 * Client component to render a single course card.
 * This isolates the UI components (like CardItem) and interactive props (like as={Link})
 * within the client environment, resolving the serialization error.
 */
export default function CourseCard({ course }: CourseCardProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-teal-500/[0.1] dark:bg-black dark:border-white/[0.2] border-neutral-800/50 w-auto h-full rounded-xl p-6 border transition-all duration-300">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-200 dark:text-white line-clamp-2"
                >
                    {course.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 line-clamp-3"
                >
                    {course.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={course.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl transition-shadow duration-500"
                        alt={course.title}
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                    <CardItem
                        translateZ={20}
                        as={Link} // This is now safe because CourseCard is a Client Component
                        href={`/courses/${course.slug}`}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-teal-400 hover:underline"
                    >
                        Details →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-teal-600 dark:bg-teal-600 dark:text-white text-white text-xs font-bold hover:bg-teal-700 transition duration-200"
                    >
                        Buy ${course.price}
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}