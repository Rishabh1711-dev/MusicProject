"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

// Define Sort options (Moved from original file)
const SORT_OPTIONS = [
    { label: "Title (A-Z)", value: "title" },
    { label: "Price (Low to High)", value: "price" },
];

interface FilterAndSortProps {
    initialSearch?: string;
    initialSort?: 'title' | 'price' | 'instructor';
}

/**
 * Client Component for the Search and Sort controls.
 * It uses a form submission to update URL query parameters and trigger a server-side re-render.
 */
export default function FilterAndSort({ initialSearch = "", initialSort = "title" }: FilterAndSortProps) {
    
    // Function to handle changes in search/sort fields
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const form = event.currentTarget.form;
        if (form) {
            // Manually submit the form to update the URL and trigger a server component re-render
            form.submit();
        }
    };

    return (
        <div className="mt-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                <input
                    type="search"
                    name="search"
                    placeholder="Search by title or instructor..."
                    className="w-full px-4 py-3 pl-10 rounded-lg border border-neutral-800 bg-neutral-950 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150"
                    defaultValue={initialSearch}
                    // Adding onChange to trigger a form submit as the user types or for change events
                    onChange={handleFormChange} 
                />
            </div>
            
            {/* Sort Dropdown */}
            <div className="relative">
                <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                <select
                    name="sort"
                    defaultValue={initialSort}
                    className="w-full md:w-48 appearance-none px-4 py-3 pl-10 rounded-lg border border-neutral-800 bg-neutral-950 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer transition duration-150"
                    // Use onChange to submit the form immediately after a selection is made
                    onChange={handleFormChange}
                >
                    {SORT_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}