'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Purse Manufacturer', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-dark sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" aria-label="Purse Manufacturer" className="py-2">
          <Image
            src="/images/logo.png"
            alt="Purse Manufacturer"
            width={64}
            height={64}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-sans font-medium hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+18188555821"
            className="text-white text-sm font-sans font-semibold hover:text-gold transition-colors"
          >
            (818) 855-5821
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-dark border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white text-sm font-sans py-3 border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+18188555821"
            className="block text-gold text-sm font-sans font-semibold py-3"
          >
            (818) 855-5821
          </a>
        </nav>
      )}
    </header>
  );
}
