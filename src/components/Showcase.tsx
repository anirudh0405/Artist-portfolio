"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-photo-view/dist/react-photo-view.css";

// Category definitions
const CATEGORIES = [
  "All",
  "Custom Commissions",
  "Creative Art Projects",
];

// Artworks data
const ARTWORKS = [
  {
    id: 1,
    title: "Ram mandir Temple Model",
    categories: ["Creative Art Projects", "Custom Commissions"],
    description: "An incredibly detailed model of the Ram Mandir, featuring illuminated interiors, hand-carved shikhara architecture, and a traditional backdrop.",
    src: "/images/project_rammandir_model.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Royal Peetta & Backdrop",
    categories: ["Custom Commissions", "Creative Art Projects"],
    description: "A custom-built 2-step ceremonial throne/pedestal with golden pillars, detailed red velvet backdrops, and a detachable arch.",
    src: "/images/project_custom_peetta.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    title: "Velvet Peacock Backdrop",
    categories: ["Custom Commissions", "Creative Art Projects"],
    description: "A premium semi-circular stage backdrop panel crafted with black velvet and hand-lined golden peacock feather patterns.",
    src: "/images/project_peacock_backdrop.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 4,
    title: "Symmetric Floor Rangoli",
    categories: ["Creative Art Projects"],
    description: "A series of vibrant star-octagram geometric floor patterns rendered with colorful glitter powder for traditional celebrations.",
    src: "/images/project_rangoli_design.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "Ceremonial Chariot & Elephants",
    categories: ["Creative Art Projects", "Custom Commissions"],
    description: "A detailed miniature ceremonial cart guided by three custom-decorated black elephant models carrying traditional golden details.",
    src: "/images/project_elephant_chariot.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 6,
    title: "Handcrafted Decorative Peacocks",
    categories: ["Creative Art Projects", "Custom Commissions"],
    description: "A pair of highly detailed ornamental peacock sculptures decorated with vibrant royal blue body glitter and layered green and gold feather designs.",
    src: "/images/project_peacock_model.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 7,
    title: "Glittering Felt Lotus Base",
    categories: ["Creative Art Projects"],
    description: "A multi-layered ceremonial base/pedestal shaped as a pink lotus flower, decorated with miniature gemstones and a green center panel.",
    src: "/images/project_lotus_base.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 8,
    title: "Modular Marble-Finish Pooja Steps",
    categories: ["Custom Commissions", "Creative Art Projects"],
    description: "A custom 4-tier steps display stand (Golu Peetta) featuring a pristine white marble texture print and traditional red-bordered patterns.",
    src: "/images/project_golu_stand.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 9,
    title: "Colorful Miniature Steam Train",
    categories: ["Creative Art Projects"],
    description: "A vibrant, hand-painted miniature model of a steam train carriage system modeled with colorful glittery cargo compartments labeled 'NWR'.",
    src: "/images/project_toy_train.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 10,
    title: "Intricate Miniature Hoysala Style Temple",
    categories: ["Creative Art Projects", "Custom Commissions"],
    description: "A masterfully carved scale model of a historic Indian temple, exhibiting detailed golden shikhara architecture, pillars, and structural divisions.",
    src: "/images/project_golden_temple.jpg",
    aspect: "aspect-[3/4]",
  },
];

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Filter artworks based on selected category
  const filteredArtworks = ARTWORKS.filter((art) => {
    if (activeCategory === "All") return true;
    return art.categories.includes(activeCategory);
  });

  // Scroll Trigger animation on load
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in section title and description
      gsap.fromTo(
        ".showcase-title-area",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".showcase-title-area",
            start: "top 80%",
          },
        }
      );

      // Fade in filter tabs
      gsap.fromTo(
        ".showcase-filter-tabs",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".showcase-filter-tabs",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Re-run animation when filtered items change
  useEffect(() => {
    const items = galleryRef.current?.querySelectorAll(".gallery-item");
    if (items && items.length > 0) {
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    }
  }, [activeCategory]);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="py-24 px-6 md:px-12 bg-neutral-950 relative overflow-hidden border-t border-neutral-900"
    >
      {/* Background Ambience */}
      <div className="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-amber-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-indigo-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Title and Intro */}
        <div className="showcase-title-area text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-white mb-6">
            PROJECT SHOWCASE
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6" />
          <p className="text-neutral-400 text-base md:text-lg">
            Explore a curated selection of handmade artwork, design commissions, Sketches, Paintings, and creative projects. Click on any piece to view details and zoom.
          </p>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="showcase-filter-tabs flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer ${activeCategory === cat
                ? "bg-amber-500 text-black shadow-lg shadow-amber-500/25"
                : "glass text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <PhotoProvider
          speed={() => 300}
          maskOpacity={0.9}
          loadingElement={
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          }
        >
          <div
            ref={galleryRef}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredArtworks.map((art) => (
              <div
                key={art.id}
                className="gallery-item break-inside-avoid relative group rounded-xl overflow-hidden glass border border-neutral-900 shadow-lg cursor-pointer transform transition-all duration-300"
              >
                <PhotoView src={art.src}>
                  <div>
                    {/* Art Image */}
                    <div className={`relative w-full ${art.aspect} bg-neutral-900 overflow-hidden`}>
                      <Image
                        src={art.src}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.3]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content Overlay (Appears on Hover) */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {art.categories.map((c) => (
                          <span
                            key={c}
                            className="text-[9px] font-bold tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white tracking-wider mb-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {art.description}
                      </p>
                    </div>

                    {/* Subtle border overlay */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-amber-500/30 transition-all duration-300 rounded-xl" />
                  </div>
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500">No artwork found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
