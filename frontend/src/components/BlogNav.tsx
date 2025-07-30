'use client';
import Link from 'next/link';

export default function BlogNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-accent-black)]/90 text-white shadow-md px-6 py-3 backdrop-blur-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition flex items-center gap-2"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Portfolio
        </Link>
        <div className="flex gap-6">
          <Link href="/#about" className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition">
            About
          </Link>
          <Link href="/#projects" className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition">
            Projects
          </Link>
          <Link href="/#contact" className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 