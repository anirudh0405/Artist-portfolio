"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow pulse animation
      gsap.to(".bg-glow-indigo", {
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".bg-glow-amber", {
        scale: 1.15,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      // Split typography and elements entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(".hero-intro-label", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.5 })
        .fromTo(".hero-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.6")
        .fromTo(".hero-tagline", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.8")
        .fromTo(".hero-description", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
        .fromTo(".hero-contact-item", { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.15, duration: 0.8 }, "-=0.7")
        .fromTo(".hero-btn", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, stagger: 0.15, duration: 0.8 }, "-=0.6")
        .fromTo(".hero-image-wrapper", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }, "-=1.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-neutral-950"
    >
      {/* Premium Ambient Background Light Effects */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-indigo-950/20 blur-[120px] bg-glow-indigo pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] rounded-full bg-amber-950/10 blur-[150px] bg-glow-amber pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

        {/* Left Content Side */}
        <div ref={textContainerRef} className="lg:col-span-7 flex flex-col justify-center text-left">

          <div className="hero-intro-label inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass w-fit text-xs font-semibold tracking-[0.25em] text-amber-500 mb-6 uppercase">
            <span>Portfolio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          </div>

          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-wider text-white leading-[1.1] mb-4">
            RAMPRASAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-300 to-indigo-400">H.S.</span>
          </h1>

          <p className="hero-tagline text-xl sm:text-2xl font-sans tracking-[0.15em] font-medium text-neutral-300 mb-6 uppercase">
            Creative Artist & Designer
          </p>

          <p className="hero-description text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Creating unique artwork and models using polyurethane foam, thermocol, MDF boards, SUN boards, and other materials. Providing creative solutions for <span className="text-white font-semibold">school and college projects</span>, <span className="text-white font-semibold">event decorations</span>, <span className="text-white font-semibold">stage props</span>, <span className="text-white font-semibold">exhibitions</span>, and <span className="text-white font-semibold">custom art installations</span>. Delivering innovative designs and quality craftsmanship to bring ideas to life.
          </p>

          {/* Quick Contact Row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-neutral-400 mb-8 border-b border-neutral-900 pb-8 max-w-xl">
              <a href="mailto:ramprasadhs30.rp@gmail.com" className="hero-contact-item flex items-center gap-3 hover:text-amber-500 transition-colors duration-300">
                <Mail size={16} className="text-amber-500" />
                <span>ramprasadhs30.rp@gmail.com</span>
              </a>
              <a href="tel:+919901738448" className="hero-contact-item flex items-center gap-3 hover:text-amber-500 transition-colors duration-300">
                <Phone size={16} className="text-amber-500" />
                <span>+91 9611646587</span>
              </a>
              <div className="hero-contact-item flex items-center gap-3">
                <MapPin size={16} className="text-amber-500" />
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <button
                onClick={() => scrollToSection("showcase")}
                className="hero-btn group cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-sm tracking-widest px-8 py-4 rounded-lg hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              >
                VIEW MY WORK
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hero-btn cursor-pointer glass inline-flex items-center text-white font-semibold text-sm tracking-widest px-8 py-4 rounded-lg hover:bg-white/5 active:scale-95 transition-all duration-300"
              >
                CONTACT ME
              </button>
            </div>
        </div>

        {/* Right Artist Photo Side */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            ref={imageContainerRef}
            className="hero-image-wrapper relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]"
          >
            {/* Elegant Glow Border Ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-transparent to-indigo-500/30 blur-sm pointer-events-none scale-105" />

            {/* The main profile picture container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass border border-neutral-800 shadow-2xl">
              <Image
                src="/images/artist_profile.jpg"
                alt="Ramprasad H.S. - Artist Portrait"
                fill
                priority
                className="object-cover object-top transition-all duration-700 ease-out"
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 420px"
              />
            </div>

            {/* Float Badge overlay */}
            <div className="absolute -bottom-4 -left-4 bg-neutral-950/90 backdrop-blur-md px-5 py-3.5 rounded-xl border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center gap-3.5 z-20">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-amber-500 font-extrabold tracking-[0.2em] uppercase">Available for</span>
                <span className="text-xs text-white font-bold tracking-wide">Custom Projects</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
