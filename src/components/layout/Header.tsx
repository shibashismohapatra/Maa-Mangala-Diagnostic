"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Home, Info, MessageCircle, HelpCircle } from "lucide-react";
import { siteConfig } from "../../data/site";

// Updated navigation for Diagnostic Center
const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/gallery", label: "Gallery", icon: Home }, // Using Home icon as a placeholder or could use Image icon if available
  { href: "/testimonials", label: "Reviews", icon: MessageCircle },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-xl border-b border-cyan-100/20"
          : "bg-gradient-to-b from-white/98 to-white/90 backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-28">
          {/* Logo with Brand Name */}
          <Link href="/" className="group flex items-center gap-3 transition-all duration-300 hover:opacity-90">
            {siteConfig.Logo && !logoError ? (
              <div className="relative h-16 w-16 lg:h-24 lg:w-24">
                <Image
                  src={siteConfig.Logo}
                  alt={siteConfig.brandName}
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="(max-width: 1024px) 64px, 96px"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-100 lg:h-24 lg:w-24">
                <span className="text-sm font-bold text-cyan-600">
                  {siteConfig.brandName?.[0] || "L"}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-all duration-300 hover:text-cyan-600"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Phone Button */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="group flex items-center gap-2 rounded-full border border-cyan-200 bg-white/50 px-4 py-2 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-md"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>{siteConfig.phone}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="text-lg">💬</span>
              <span>WhatsApp</span>
            </a>


          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-full p-2 text-zinc-700 transition-all duration-300 hover:bg-cyan-50 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-6 w-6">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                  }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Modern Drawer Style */}
      <div
        className={`fixed inset-x-0 top-20 z-40 transition-all duration-500 ease-in-out lg:hidden ${isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-4"
          }`}
      >
        <div className="mx-4 overflow-hidden rounded-2xl border border-cyan-100 bg-white/98 shadow-2xl backdrop-blur-xl">
          <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 border-b border-zinc-100 px-5 py-4 text-base font-medium text-zinc-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? "slideIn 0.3s ease-out forwards" : "none",
                }}
              >
                <link.icon className="h-5 w-5 text-cyan-500" />
                {link.label}
              </Link>
            ))}

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 p-5 bg-gradient-to-r from-cyan-50 to-teal-50">
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-cyan-700 shadow-md transition-all hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
              >
                <span className="text-lg">💬</span>
                WhatsApp Inquiry
              </a>

            </div>
          </nav>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}