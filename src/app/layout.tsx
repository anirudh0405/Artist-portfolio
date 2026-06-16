import type { Metadata } from "next";
import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramprasad H.S. | Creative Artist & Designer",
  description: "Official portfolio of Ramprasad H.S. - Freelance creative artist and designer specializing in paintings, charcoal sketches, custom commissions, and art projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cinzel.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
