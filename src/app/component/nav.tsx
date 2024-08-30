'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
   const closeMenu = () => setIsMenuOpen(false);

   return (
    <header className="bg-blue-500/25 bg-blur-sm shadow-lg shadow-green-500/35">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="devfolio Logo"
              width={70}
              height={20}
              priority
              className="rounded-full on-focus:animate-wiggle"
            />
          </Link>
          <button
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`
            fixed top-0 right-0 bottom-0 
            bg-green-500/20 
            w-64 md:w-auto
            p-4 md:p-0
            transition-transform duration-300 ease-in-out
            md:transition-none
            md:transform-none
            md:static md:bg-transparent
            ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
            md:translate-x-0
          `}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mt-16 md:mt-0">
              <NavItem href="/" onClick={closeMenu}>Home</NavItem>
              <NavItem href="/about" onClick={closeMenu}>About</NavItem>
              <NavItem href="/project" onClick={closeMenu}>Projects</NavItem>
              <NavItem href="/contact" onClick={closeMenu}>Contact</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
   )
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => {
  return (
    <li>
      <Link href={href} className="block text-white md:text-inherit hover:text-blue-300 transition duration-300" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}