'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll event to add shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? 'bg-blue-500/90 shadow-xl' : 'bg-gradient-to-r from-teal-300 to-indigo-400'
      } transition-all duration-300 ease-in-out`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={20}
              priority
              className="rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <button
            className="md:hidden z-50 text-white hover:text-blue-300 transition duration-300"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } fixed top-0 right-0 bottom-0 bg-teal-800/80 w-64 md:w-auto p-6 md:p-0 transition-transform duration-300 ease-in-out md:transition-none md:transform-none md:static md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-6 md:space-y-0 mt-24 md:mt-0">
              <NavItem href="/" onClick={closeMenu}>Home</NavItem>
              <NavItem href="/about" onClick={closeMenu}>About</NavItem>
              <NavItem href="/contact" onClick={closeMenu}>Contact</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => {
  return (
    <li>
      <Link href={href} className="block text-white md:text-inherit hover:text-teal-200 transition duration-300" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}
