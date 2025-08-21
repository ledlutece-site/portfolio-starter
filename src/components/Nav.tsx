'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-base-100/50 border-b border-white/10' : ''}`}>
      <div className="container-g flex items-center justify-between py-4">
        <Link href="#" className="font-semibold tracking-wide">Your Name</Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(item => (
            <a key={item.href} href={item.href} className="text-sm opacity-80 hover:opacity-100">{item.label}</a>
          ))}
        </nav>
        <a href="#contact" className="text-sm px-3 py-2 rounded-xl bg-accent text-black font-medium">Let’s talk</a>
      </div>
    </header>
  );
}
