"use client";

import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItem {
  name: string;
  href: string;
}

export default function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        className="text-foreground hover:text-primary"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm p-4 pt-20"
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={toggleMenu}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl font-semibold text-lg transition-colors",
                      isActive ? "bg-primary text-primary-foreground shadow-lg" : "text-foreground hover:bg-card hover:text-primary"
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-5 h-5 opacity-50" />
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button className="w-full text-lg h-12" onClick={toggleMenu} asChild>
                    <Link href="/dashboard">Get Started</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}