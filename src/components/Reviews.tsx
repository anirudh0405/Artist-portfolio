"use client";

import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TESTIMONIALS = [
  {
    name: "Roopashri",
    project: "Peacock Pair",
    rating: 5,
    text: "This peacock pair is absolutely stunning and instantly grabs attention with its vibrant colors and intricate feather detailing. The craftsmanship is elegant and balanced, making it a perfect statement piece for home décor, exhibitions, or gifting. It reflects creativity, precision, and artistic excellence.",
  },
  {
    name: "Karthik R.",
    project: "Toy Train Organizer",
    rating: 5,
    text: "This colorful train organizer is both creative and functional. The vibrant design, neat finishing, and playful concept make it attractive for all age groups. It is a unique piece that beautifully combines utility with artistic charm.",
  },
  {
    name: "Vikram Nair",
    project: "Temple Set",
    rating: 5,
    text: "This grand structure is truly impressive and instantly creates a premium visual impact. The lighting effect enhances the architectural details beautifully, resulting in a majestic and elegant display that showcases outstanding craftsmanship.",
  },
  {
    name: "Sangeetha K.",
    project: "Veena Wall Art",
    rating: 5,
    text: "A graceful tribute to Indian classical music, this veena artwork is elegant and beautifully detailed. The decorative elements and refined finish make it a sophisticated piece that adds cultural richness and artistic beauty to any space.",
  },
  {
    name: "Meera Deshmukh",
    project: "Lotus Decorative Bowl",
    rating: 5,
    text: "The lotus design is elegant, vibrant, and beautifully crafted. Its bright colors and decorative embellishments create a festive and cheerful appearance. This piece combines functionality with artistic beauty, making it a lovely addition to any décor.",
  },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in section on scroll
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reviews-title-area",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".reviews-title-area",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    // Set up marquee movement
    const track = trackRef.current;
    if (track) {
      // Calculate half width of the track (since it contains two sets of cards)
      const halfWidth = track.scrollWidth / 2;

      tweenRef.current = gsap.to(track, {
        x: -halfWidth,
        ease: "none",
        duration: 30, // speed
        repeat: -1,
        runBackwards: false,
      });
    }

    return () => {
      ctx.revert();
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      // Smoothly slow down to pause
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5 });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      // Smoothly accelerate back to normal speed
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
    }
  };

  return (
    <section
      id="reviews"
      ref={containerRef}
      className="py-24 bg-neutral-950 relative overflow-hidden border-t border-neutral-900"
    >
      {/* Background radial glows */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] rounded-full bg-indigo-950/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Title and Intro */}
        <div className="reviews-title-area text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-white mb-6">
            CLIENT REVIEWS
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6" />
          <p className="text-neutral-400 text-base md:text-lg">
            Hear from art collectors, school project clients, and custom commission buyers who have trusted Ramprasad H.S. with their creative visions.
          </p>
        </div>
      </div>

      {/* Testimonial Marquee Slider Container */}
      <div className="relative w-full overflow-hidden py-6 select-none">

        {/* Left and Right blur covers for gradient fading edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div
          ref={trackRef}
          className="flex gap-6 w-max"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Render cards twice for seamless loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((review, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[380px] p-6 sm:p-8 rounded-2xl glass-card flex flex-col justify-between flex-shrink-0 whitespace-normal"
            >
              <div>
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 border border-neutral-800 rounded-full px-3 py-1 uppercase bg-neutral-950/50">
                    {review.project}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-neutral-900/60 pt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-wide">
                    {review.name}
                  </span>
                  <span className="text-[11px] text-neutral-500">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
