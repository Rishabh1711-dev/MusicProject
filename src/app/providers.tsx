'use client';

import React from 'react';
// import { SessionProvider } from 'next-auth/react'; // Uncomment for real NextAuth setup

// Client-side wrapper for context providers (simulating NextAuth SessionProvider)
// Ensures that children are rendered within the provider context.
export default function Providers({ children }: { children: React.ReactNode }) {
  // Use a mock provider until NextAuth is fully configured
  return (
    // <SessionProvider> 
    <div data-testid="MockSessionProvider">
      {children}
    </div>
    // </SessionProvider>
  );
}