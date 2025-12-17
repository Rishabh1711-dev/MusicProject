import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = {
  products: [
    { name: 'Guitar Courses', href: '/courses?tag=Guitar' },
    { name: 'Production', href: '/courses?tag=Production' },
    { name: 'Theory Deep Dive', href: '/courses?tag=Theory' },
    { name: 'Instructor Spotlight', href: '/about' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Pricing', href: '/pricing' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
};

// Server Component
export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and Newsletter */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-2" aria-label="Axiom Academy Home">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-1 16H8V8h3v10zm4 0h-3V8h3v10zM12 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span className="font-extrabold text-2xl text-foreground">Axiom Academy</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              World-class music education, delivered directly to your device. Master your craft with industry experts.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2" action="#" method="post">
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-lg border border-input bg-background px-4 py-2 text-base text-foreground placeholder-muted-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter your email"
              />
              <Button type="submit" variant="default" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Courses</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:support@axiom.academy" className="hover:text-foreground">support@axiom.academy</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+15551234567" className="hover:text-foreground">+1 (555) 123-4567</a>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-primary mt-1" />
                    <p>100 Vercel St, Suite 101, Cloud City, CA 90210</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Axiom Academy, Inc. All rights reserved. Built with Next.js and Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}