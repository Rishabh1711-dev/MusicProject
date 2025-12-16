'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useClientSession } from "@/lib/auth"; // Import mock session utility
import { LogIn, LogOut, LayoutDashboard } from "lucide-react";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const { session, status, signIn, signOut } = useClientSession(); // Use client session hook
    
    // Determine the main navigation link based on auth status
    const dashboardLink = status === 'authenticated' ? '/dashboard' : '/auth/login';
    const authAction = status === 'authenticated' ? { label: 'Sign Out', icon: <LogOut className="h-4 w-4" />, action: signOut } : { label: 'Sign In', icon: <LogIn className="h-4 w-4" />, action: signIn };
    const authLink = status === 'authenticated' ? '/dashboard' : '/auth/login';

  return (
    <div
    className={cn("fixed top-4 md:top-6 inset-x-0 max-w-4xl mx-auto z-50 transition-all duration-300", className)}
    >
        <Menu setActive={setActive} className="border border-neutral-700/50 rounded-full shadow-xl">
            {/* Logo/Home Link */}
            <Link href={"/"}>
              <MenuItem setActive={setActive} active={active} item="MelodyMind">
              
              </MenuItem>
            </Link>
            
            {/* Our Courses Dropdown */}
            <MenuItem
            setActive={setActive} active={active} item="Courses"
            >
               <div className="flex flex-col space-y-3 text-sm p-2">
                 <HoveredLink href="/courses">All Courses</HoveredLink>
                 <HoveredLink href="/courses?search=theory">Basic Music Theory</HoveredLink>
                 <HoveredLink href="/courses?search=composition">Advanced Composition</HoveredLink>
                 <HoveredLink href="/courses?search=production">Music Production</HoveredLink>
               </div>
            </MenuItem>
            
            {/* AI Pathfinder (Feature Link) */}
            <Link href={"/ai-pathfinder"}>
              <MenuItem setActive={setActive} active={active} item="AI Pathfinder">
              </MenuItem>
            </Link>

            {/* Dashboard / Auth Link */}
            <Link href={authLink}>
              <MenuItem setActive={setActive} active={active} item={status === 'authenticated' ? 'Dashboard' : 'Sign In'}>
                {status === 'authenticated' && (
                  <div className="flex flex-col space-y-2 text-sm p-2">
                     <HoveredLink href="/dashboard" className="flex items-center space-x-2">
                        <LayoutDashboard className="h-4 w-4 text-teal-400"/>
                        <span>My Dashboard</span>
                     </HoveredLink>
                     <button 
                        onClick={(e) => { e.preventDefault(); signOut(); }}
                        className="text-neutral-500 hover:text-red-400 transition duration-200 text-left flex items-center space-x-2"
                     >
                        {authAction.icon}
                        <span>{authAction.label}</span>
                     </button>
                  </div>
                )}
              </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar