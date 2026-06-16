"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Trophy, Award, Paintbrush, Heart, Eye, Check } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-photo-view/dist/react-photo-view.css";

const STATS = [
  {
    id: 1,
    value: "500+",
    label: "Artworks Delivered",
    description: " Creative Artworks for clients delivered worldwide.",
    icon: Paintbrush,
  },
  {
    id: 2,
    value: "100%",
    label: "Satisfied Clients",
    description: "Highly rated custom artworks and corporate commissions.",
    icon: Heart,
  },
];

const CERTIFICATES = [
  {
    id: 1,
    title: "Foam Rangoli Art Award",
    issuer: "Show Your Talent (SYT) International Group",
    src: "/images/cert_syt_foam_rangoli.jpg",
    aspect: "aspect-[3/4]",
    style: "hover:-translate-y-2 shadow-[0_15px_30px_rgba(236,72,153,0.08)] hover:shadow-[0_25px_50px_rgba(236,72,153,0.18)]",
  },
  {
    id: 2,
    title: "Winner Recognition (Pooja Room Design Selection)",
    issuer: "Show Your Talent (SYT) International Group",
    src: "/images/cert_syt_winner_likes.jpg",
    aspect: "aspect-[3/4]",
    style: "hover:-translate-y-2 shadow-[0_15px_30px_rgba(139,92,246,0.08)] hover:shadow-[0_25px_50px_rgba(139,92,246,0.18)]",
  },
  {
    id: 3,
    title: "Golden Award Winner (Thermocol Pooja Room)",
    issuer: "Show Your Talent (SYT) International Group",
    src: "/images/cert_syt_gold_pooja.jpg",
    aspect: "aspect-[3/4]",
    style: "hover:-translate-y-2 shadow-[0_15px_30px_rgba(245,158,11,0.08)] hover:shadow-[0_25px_50px_rgba(245,158,11,0.18)]",
  },
  {
    id: 4,
    title: "Best Artist Award (Thermocol Tabla Model)",
    issuer: "Show Your Talent (SYT) International Group",
    src: "/images/cert_syt_best_artist_tabla.jpg",
    aspect: "aspect-[3/4]",
    style: "hover:-translate-y-2 shadow-[0_15px_30px_rgba(20,184,166,0.08)] hover:shadow-[0_25px_50px_rgba(20,184,166,0.18)]",
  },
  {
    id: 5,
    title: "Foam Rangoli Award (Symmetrical Design)",
    issuer: "Show Your Talent (SYT) International Group",
    src: "/images/cert_syt_foam_rangoli_2.jpg",
    aspect: "aspect-[3/4]",
    style: "hover:-translate-y-2 shadow-[0_15px_30px_rgba(16,185,129,0.08)] hover:shadow-[0_25px_50px_rgba(16,185,129,0.18)]",
  },
  {
    id: 6,
    title: "Excellent Artist Award (Thermocol Art WHEEL)",
    issuer: "Show Your Talent (SYT) International Group",
    src: "/images/cert_syt_excellent_thermocol_wheel.jpg",
    aspect: "aspect-[3/4]",
    style: "hover:-translate-y-2 shadow-[0_15px_30px_rgba(244,63,94,0.08)] hover:shadow-[0_25px_50px_rgba(244,63,94,0.18)]",
  },
  {
    id: 7,
    title: "Excellent Artist Award (Pencil Waste Art)",
    issuer: "Show Your Talent (SYT) International Group",
    src: "/images/cert_syt_excellent_pencil_art.jpg",
    aspect: "aspect-[3/4]",
    style: "hover:-translate-y-2 shadow-[0_15px_30px_rgba(249,115,22,0.08)] hover:shadow-[0_25px_50px_rgba(249,115,22,0.18)]",
  },
  {
    id: 8,
    title: "Emerging Artist Award (All India National Art Contest)",
    issuer: "Art Chitrakala All India Contest 2023",
    src: "/images/cert_art_chitrakala_2023.jpg",
    aspect: "aspect-[3/4]",
    style: "hover:-translate-y-2 shadow-[0_15px_30px_rgba(14,165,233,0.08)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.18)]",
  },
];

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in title area
      gsap.fromTo(
        ".achievements-title-area",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".achievements-title-area",
            start: "top 80%",
          },
        }
      );

      // Stats cards stagger animation
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
          },
        }
      );

      // Floating certificate cards entry animation
      gsap.fromTo(
        ".floating-cert-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".certificates-container",
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="py-24 px-6 md:px-12 bg-neutral-950 relative overflow-hidden border-t border-neutral-900"
    >
      {/* Premium Background Ambience */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-950/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-amber-950/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="achievements-title-area text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-white mb-6">
            AWARDS & RECOGNITIONS
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6" />
          <p className="text-neutral-400 text-base md:text-lg">
            Celebrating key milestones, industry credentials, and appreciations from prestigious art exhibitions and corporate clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-container grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-28">
          {STATS.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="stat-card p-6 md:p-8 rounded-xl glass border border-white/5 shadow-xl hover:border-amber-500/30 transition-all duration-500 group text-center sm:text-left"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="p-3.5 rounded-lg bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 ease-out">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-2">
                      {stat.value}
                    </span>
                    <span className="text-sm font-semibold tracking-wider text-amber-500 uppercase mb-2">
                      {stat.label}
                    </span>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Certificates & Appreciations Showcase */}
        <div className="certificates-container max-w-7xl mx-auto">
          <h3 className="text-xl font-serif font-semibold text-white tracking-widest text-center uppercase mb-16">
            Certificates & Appreciations
          </h3>

          <PhotoProvider
            speed={() => 300}
            maskOpacity={0.9}
            loadingElement={
              <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pt-8 pb-12">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  className={`floating-cert-card group rounded-xl overflow-hidden glass border border-neutral-800 cursor-pointer transform transition-all duration-500 ease-out max-w-md w-full mx-auto ${cert.style}`}
                >
                  <PhotoView src={cert.src}>
                    <div>
                      {/* Image Frame */}
                      <div className={`relative w-full ${cert.aspect} bg-neutral-900 overflow-hidden`}>
                        <Image
                          src={cert.src}
                          alt={cert.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-50"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />

                        {/* Interactive Zoom Overlay Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="p-4 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-500 backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-500">
                            <Eye size={24} />
                          </div>
                        </div>
                      </div>

                      {/* Info Panel */}
                      <div className="p-6 border-t border-neutral-900 bg-neutral-950/80 backdrop-blur-md relative z-10">
                        <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase block mb-1">
                          {cert.issuer}
                        </span>
                        <h4 className="font-serif text-sm font-semibold text-white tracking-wide leading-snug">
                          {cert.title}
                        </h4>
                      </div>
                    </div>
                  </PhotoView>
                </div>
              ))}
            </div>
          </PhotoProvider>

          <p className="text-center text-xs text-neutral-500 mt-12 italic">
            * Click on any certificate to expand and view in high resolution.
          </p>
        </div>
      </div>
    </section>
  );
}
