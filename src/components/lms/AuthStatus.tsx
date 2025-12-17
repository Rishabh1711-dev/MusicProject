"use client";

import { LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthStatus() {
  // Simulate auth state (true = logged in, for dashboard context)
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const router = useRouter();

  const handleAuth = () => {
    setIsAuthenticated(prev => !prev);
    if (isAuthenticated) {
        // Mocking logout
        router.push('/');
    } else {
        // Mocking login
        router.push('/dashboard');
    }
  };

  return (
    <Button 
        variant={isAuthenticated ? 'secondary' : 'default'} 
        onClick={handleAuth}
        className="flex items-center space-x-2"
        aria-label={isAuthenticated ? 'Sign Out' : 'Sign In'}
    >
        {isAuthenticated ? (
            <>
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
            </>
        ) : (
            <>
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
            </>
        )}
    </Button>
  );
}