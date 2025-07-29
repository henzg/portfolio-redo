'use client';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={
        `fixed left-0 right-0 z-50 transition-all duration-300 ` +
        (scrolled
          ? 'top-0 bg-[var(--color-accent-black)]/90 text-white shadow-md px-6 py-3 flex gap-5 items-center justify-center backdrop-blur-md'
          : 'top-8 bg-white/80 text-[var(--color-accent-black)] shadow-lg rounded-full mx-auto w-fit px-10 py-4 flex gap-8 items-center justify-center backdrop-blur-md')
      }
      style={{
        margin: scrolled ? 0 : '0 auto',
        left: scrolled ? 0 : '50%',
        transform: scrolled ? 'none' : 'translateX(-50%)',
        maxWidth: scrolled ? '100vw' : '600px',
      }}
    >
      <a href="#hero" className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition">Home</a>
      <a href="#about" className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition">About</a>
      <a href="#projects" className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition">Projects</a>
      <a href="#blog" className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition">Blog</a>
      <a href="#contact" className="font-semibold text-lg hover:text-[var(--color-accent-coral)] transition">Contact</a>
    </nav>
  );
}