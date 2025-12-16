import Link from 'next/link';
import { Home, Zap } from 'lucide-react';

// Custom 404 page for a professional look
export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center p-6 bg-black">
      <Zap className="h-20 w-20 text-teal-500 mb-4 animate-bounce" />
      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-white mb-4">
        Page Not Found: Lost in the Rhythm
      </h2>
      <p className="text-lg text-neutral-400 mb-8 max-w-lg">
        It seems the page you&apos;re looking for has either moved to a new key 
        signature or was never composed. Don&apos;t worry, the concert hasn&apos;t ended.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" passHref>
          <button className="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 font-bold text-white transition duration-200 flex items-center space-x-2">
            <Home className="h-5 w-5" />
            <span>Return to Home</span>
          </button>
        </Link>
        <Link href="/courses" passHref>
          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition duration-200">
            Explore Courses
          </button>
        </Link>
      </div>
    </div>
  );
}