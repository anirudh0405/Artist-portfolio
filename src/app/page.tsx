import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Achievements from "@/components/Achievements";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
        <Hero />
        <Showcase />
        <Achievements />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
