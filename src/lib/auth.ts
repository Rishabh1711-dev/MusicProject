// src/lib/auth.ts
// Mock for NextAuth utility functions until full implementation is added.
// In a production app, this would be `import { getServerSession } from "next-auth";` etc.

import { UserSession } from "@/lib/types";

// Mock session data
const mockUser: UserSession = {
  user: {
    id: "user_12345",
    name: "Alex Maestro",
    email: "alex.maestro@melodymind.com",
    image: "/avatars/alex.jpg",
    skillLevel: 'Intermediate',
  },
  expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
};


/**
 * Simulates fetching the session from the server (Server Component use).
 */
export async function getServerSession(): Promise<UserSession | null> {
    // Simulate user being signed in for LMS pages
    // In production, this checks the actual session cookie.
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockUser; 
}


/**
 * Client-side mock for checking session status.
 */
export function useClientSession() {
  // In production, this would be:
  // const { data: session, status } = useSession();
  
  const status = 'authenticated'; // 'authenticated' | 'unauthenticated' | 'loading'
  const session = mockUser;

  const signIn = async () => console.log('Mock sign in called');
  const signOut = async () => console.log('Mock sign out called');

  return { session, status, signIn, signOut };
}