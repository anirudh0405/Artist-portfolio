"use client";

import React from "react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Branding */}
        <div className="flex flex-col gap-1">
          <span className="font-serif text-base font-bold tracking-[0.2em] text-white">
            RAMPRASAD H.S.
          </span>
          <span className="text-[10px] tracking-[0.3em] text-neutral-500 font-sans uppercase">
            Creative Art & Design
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("showcase")}
            className="hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            Artwork
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Social Link Row */}
        <div className="flex items-center gap-4 text-neutral-400">
          <a
            href="https://www.instagram.com/ramprasad.hs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 hover:scale-110 transition-all duration-300"
            title="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://www.facebook.com/share/1BscZxwcvE/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 hover:scale-110 transition-all duration-300"
            title="Facebook"
          >
            <FacebookIcon size={18} />
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-neutral-900/40 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <span>
          &copy; {currentYear} Ramprasad H.S. All rights reserved.
        </span>
        <div className="flex gap-4">
          <span className="hover:underline hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
          <span>&middot;</span>
          <span className="hover:underline hover:text-neutral-400 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
