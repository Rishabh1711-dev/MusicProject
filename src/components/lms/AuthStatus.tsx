'use client';

import React from 'react';
import { useClientSession } from "@/lib/auth";
import Link from "next/link";
import { Loader2 } from "lucide-react";

// Component to handle client-side auth status and redirection
// Used to protect client components within a protected route
export const AuthStatus: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { status } = useClientSession();

    if (status === 'loading') {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-white/50">
                <Loader2 className="h-8 w-8 animate-spin text-teal-500" />
                <p className="mt-4">Loading user session...</p>
            </div>
        );
    }

    if (status === 'unauthenticated') { 
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 bg-neutral-900 rounded-xl shadow-2xl border border-neutral-800">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
                    Access Denied
                </h2>
                <p className="text-neutral-400 mb-6 text-center">
                    Please sign in to access your personalized MelodyMind Dashboard.
                </p>
                <Link href="/auth/login" passHref>
                    <button className="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 font-bold transition duration-200">
                        Go to Sign In
                    </button>
                </Link>
            </div>
        );
    }

    return <>{children}</>;
};