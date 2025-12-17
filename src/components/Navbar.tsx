"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Music } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            AXIOM
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-500",
                pathname === link.href ? "text-blue-500" : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/auth/login">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-zinc-400"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/auth/login" onClick={() => setIsOpen(false)}>
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
