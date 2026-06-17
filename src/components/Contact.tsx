"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFallback, setIsFallback] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in text area
      gsap.fromTo(
        ".contact-info-animate",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".contact-info-animate",
            start: "top 80%",
          },
        }
      );

      // Fade in form area
      gsap.fromTo(
        ".contact-form-animate",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".contact-form-animate",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("sending");

    // EmailJS Environment Configuration
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const isConfigured =
      serviceId && serviceId !== "your_service_id_here" &&
      templateId && templateId !== "your_template_id_here" &&
      publicKey && publicKey !== "your_public_key_here";

    if (isConfigured) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject || "Artwork Inquiry",
            message: formData.message,
          },
          publicKey
        );
        setIsFallback(false);
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          window.location.href = "https://www.instagram.com/ramprasad.hs/";
        }, 2000);
      } catch (err: any) {
        console.error("EmailJS Error:", err);
        const recipient = "ramprasadhs30.rp@gmail.com";
        const subject = encodeURIComponent(formData.subject || "Artwork Inquiry");
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n\n` +
          `Message:\n${formData.message}`
        );

        const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

        setMailtoUrl(mailto);
        setIsFallback(true);
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        window.open(gmailUrl, "_blank");
        setTimeout(() => {
          window.location.href = "https://www.instagram.com/ramprasad.hs/";
        }, 2000);
      }
    } else {
      const recipient = "ramprasadhs30.rp@gmail.com";
      const subject = encodeURIComponent(formData.subject || "Artwork Inquiry");
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );

      const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

      setMailtoUrl(mailto);
      setIsFallback(true);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      window.open(gmailUrl, "_blank");
      setTimeout(() => {
        window.location.href = "https://www.instagram.com/ramprasad.hs/";
      }, 2000);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 px-6 md:px-12 bg-neutral-950 relative overflow-hidden border-t border-neutral-900"
    >
      {/* Background Ambience */}
      <div className="absolute top-[40%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-amber-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-indigo-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Panel: Contact details */}
          <div className="contact-info-animate lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-white mb-6">
                  GET IN TOUCH
                </h2>
                <div className="h-1 w-20 bg-amber-500 mb-6" />
                <p className="text-neutral-400 text-base leading-relaxed">
                  Looking for custom artwork? From handcrafted décor pieces and temple models to school projects, event displays, and creative installations, let's turn your ideas into beautiful artistic creations.
                </p>
              </div>

              {/* Quick Contacts cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5">
                  <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-bold tracking-wider uppercase">Email Me</span>
                    <a href="mailto:ramprasadhs30.rp@gmail.com" className="text-sm font-semibold text-white hover:text-amber-500 transition-colors">
                      ramprasadhs30.rp@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5">
                  <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-bold tracking-wider uppercase">Call/WhatsApp</span>
                    <a href="tel:+919901738448" className="text-sm font-semibold text-white hover:text-amber-500 transition-colors">
                      +91 9611646587
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5">
                  <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-bold tracking-wider uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">
                      Bangalore, Karnataka, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Medias & Avatar */}
            <div className="border-t border-neutral-900/60 pt-8 mt-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-neutral-800 glass">
                  <Image
                    src="/images/artist_profile.jpg"
                    alt="Ramprasad H.S. profile thumbnail"
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white tracking-wide">
                    Ramprasad H.S.
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    Creative Designer & Fine Artist
                  </p>
                </div>
              </div>

              {/* Social Channels Link Row */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/ramprasad.hs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass border border-white/5 text-neutral-400 hover:text-amber-500 hover:scale-105 transition-all duration-300"
                  title="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://www.facebook.com/share/1BscZxwcvE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass border border-white/5 text-neutral-400 hover:text-amber-500 hover:scale-105 transition-all duration-300"
                  title="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Panel: The actual message form */}
          <div className="contact-form-animate lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl glass-card relative">
              <h3 className="text-xl font-serif font-bold text-white tracking-wide mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-neutral-400 tracking-wider uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      className="bg-neutral-950/60 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors w-full"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-neutral-400 tracking-wider uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      className="bg-neutral-950/60 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors w-full"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-neutral-400 tracking-wider uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className="bg-neutral-950/60 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors w-full"
                    placeholder="Project inquiry, custom painting, etc."
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-neutral-400 tracking-wider uppercase">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className="bg-neutral-950/60 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors w-full resize-none"
                    placeholder="Describe your design project, size of artwork, media preference, and any deadlines..."
                  />
                </div>

                {/* Status Banners */}
                {status === "success" && (
                  <div className="flex flex-col gap-2 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} />
                      <span>
                        {isFallback
                          ? "Opening Gmail and redirecting you to Instagram..."
                          : "Thank you! Your message was sent. Redirecting you to Instagram..."}
                      </span>
                    </div>
                    {isFallback && (
                      <span className="text-xs text-neutral-400 pl-7">
                        If Gmail did not open (e.g. blocked by popup blockers), click here to open in your{" "}
                        <a href={mailtoUrl} className="text-amber-500 underline hover:text-amber-400">
                          default mail client
                        </a>.
                      </span>
                    )}
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 disabled:opacity-55 disabled:cursor-not-allowed text-black font-semibold text-sm tracking-widest py-4 rounded-lg active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
