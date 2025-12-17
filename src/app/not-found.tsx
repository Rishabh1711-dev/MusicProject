import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { Ghost, Home } from 'lucide-react'

// Server Component
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="relative p-10 rounded-2xl bg-card border border-border max-w-xl shadow-2xl">
        <Ghost className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-slow" />
        <h1 className="text-8xl font-extrabold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            404
        </h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Page Not Found
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
            The symphony you were looking for seems to have moved to a different key.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/">
            <Button size="lg" className="flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Go to Home
            </Button>
          </Link>
          <Link href="/courses">
            <Button size="lg" variant="outline">
                Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}