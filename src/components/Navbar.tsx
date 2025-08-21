'use client';

import Link from "next/link"

import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#education", label: "Education" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-10 backdrop-blur-sm shadow-md bg-[var(--surface)]/80 dark:bg-[var(--surface-dark)]/80">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--primary)]">My Portfolio</h1>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex justify-between items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 font-medium text-[#2563eb] transition-colors hover:text-[#10b981]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none border border-[var(--primary)]"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-[var(--primary)] mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[var(--accent)] mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[var(--primary)] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>
            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-[var(--surface)] dark:bg-[var(--surface-dark)] shadow-lg px-6 py-4 flex flex-col items-center animate-fade-in-down">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block w-full text-center py-2 text-lg font-medium text-[#2563eb] transition-colors hover:text-[#10b981]"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

Navbar.displayName = "Navbar";
export default Navbar;