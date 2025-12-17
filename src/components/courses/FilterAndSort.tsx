"use client";

import { CourseFilter, CourseLevel, CourseTag } from "@/lib/types";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";

const levels: CourseLevel[] = ['Beginner', 'Intermediate', 'Advanced'];
const tags: CourseTag[] = ['Guitar', 'Piano', 'Vocals', 'Production', 'Theory', 'Drums'];
const sortOptions: { label: string, value: CourseFilter['sort'] }[] = [
    { label: 'Title (A-Z)', value: 'title-asc' },
    { label: 'Price (Low to High)', value: 'price-asc' },
    { label: 'Price (High to Low)', value: 'price-desc' },
];

export default function FilterAndSort({ initialFilters }: { initialFilters: CourseFilter }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [localQuery, setLocalQuery] = useState(initialFilters.query || '');

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    return params.toString();
  };

  const handleFilterChange = (name: string, value: string) => {
    startTransition(() => {
      const queryString = createQueryString(name, value);
      router.push(`${pathname}?${queryString}`, { scroll: false });
    });
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFilterChange('query', localQuery.trim());
  };

  return (
    <div className="sticky top-[80px] z-30 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-2xl mb-10">
        
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex space-x-2 w-full mb-6">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                    type="search"
                    value={localQuery}
                    onChange={(e) => setLocalQuery(e.target.value)}
                    placeholder="Search courses by title, instructor, or tag..."
                    className="w-full h-12 pl-10 pr-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    aria-label="Search courses"
                />
            </div>
            <Button type="submit" disabled={isPending} className="h-12">
                {isPending ? 'Searching...' : 'Search'}
            </Button>
        </form>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Level Filters */}
            <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-foreground mr-2">Level:</span>
                {levels.map((level) => (
                    <motion.div key={level} whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
                        <Button
                            variant={initialFilters.level === level ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleFilterChange('level', initialFilters.level === level ? '' : level)}
                            disabled={isPending}
                        >
                            {level}
                        </Button>
                    </motion.div>
                ))}
            </div>

            {/* Tag Filter (Dropdown/Select) */}
            <div className="flex items-center space-x-2">
                <label htmlFor="tag-filter" className="text-sm font-medium text-foreground">Tag:</label>
                <select
                    id="tag-filter"
                    value={initialFilters.tag || ''}
                    onChange={(e) => handleFilterChange('tag', e.target.value)}
                    className="h-10 px-3 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    disabled={isPending}
                >
                    <option value="">All Instruments</option>
                    {tags.map((tag) => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
            
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
                <label htmlFor="sort-select" className="text-sm font-medium text-foreground">Sort By:</label>
                <select
                    id="sort-select"
                    value={initialFilters.sort || ''}
                    onChange={(e) => handleFilterChange('sort', e.target.value)}
                    className="h-10 px-3 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    disabled={isPending}
                >
                    <option value="">Default (Featured)</option>
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
        
        {/* Loading Indicator for Transition */}
        {isPending && (
            <div className="absolute inset-0 flex items-center justify-center bg-card/80 rounded-xl">
                <svg className="animate-spin h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        )}
    </div>
  );
}