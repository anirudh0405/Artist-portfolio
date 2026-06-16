"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation for navbar
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
      );
    }
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection("hero")}
          className="flex flex-col cursor-pointer group"
        >
          <span className="font-serif text-lg md:text-xl font-bold tracking-[0.2em] text-white group-hover:text-amber-500 transition-colors duration-300">
            RAMPRASAD H.S.
          </span>
          <span className="text-[9px] tracking-[0.35em] text-neutral-400 font-sans uppercase">
            Creative Art & Design
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium tracking-wider text-neutral-300 hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("showcase")}
            className="text-sm font-medium tracking-wider text-neutral-300 hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            ARTWORK
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="text-sm font-medium tracking-wider text-neutral-300 hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            ACHIEVEMENTS
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-sm font-medium tracking-wider text-neutral-300 hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            REVIEWS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium tracking-wider text-neutral-300 hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            CONTACT
          </button>
        </nav>

        {/* Social Quick Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/ramprasad.hs/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-amber-500 hover:scale-110 transition-all duration-300"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="mailto:ramprasadhs30.rp@gmail.com"
            className="p-2 text-neutral-400 hover:text-amber-500 hover:scale-110 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-white hover:text-amber-500 transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-neutral-950/95 border-b border-neutral-900 backdrop-blur-lg flex flex-col py-6 px-8 gap-6 z-40 transition-all duration-300">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-left text-base font-semibold tracking-widest text-neutral-200 hover:text-amber-500 transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("showcase")}
            className="text-left text-base font-semibold tracking-widest text-neutral-200 hover:text-amber-500 transition-colors"
          >
            ARTWORK
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="text-left text-base font-semibold tracking-widest text-neutral-200 hover:text-amber-500 transition-colors"
          >
            ACHIEVEMENTS
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-left text-base font-semibold tracking-widest text-neutral-200 hover:text-amber-500 transition-colors"
          >
            REVIEWS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left text-base font-semibold tracking-widest text-neutral-200 hover:text-amber-500 transition-colors"
          >
            CONTACT
          </button>

          <div className="flex gap-4 border-t border-neutral-900 pt-6">
            <a
              href="https://www.instagram.com/ramprasad.hs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-amber-500"
            >
              <InstagramIcon size={18} /> Instagram
            </a>
            <a
              href="mailto:ramprasadhs30.rp@gmail.com"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-amber-500"
            >
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
