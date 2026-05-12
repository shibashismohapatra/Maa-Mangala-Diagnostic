"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating Buttons — right side */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:shadow-green-500/50"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 transition-all hover:scale-110 hover:shadow-cyan-600/50"
          aria-label="Call Clinic"
        >
          <Phone className="h-6 w-6" />
        </a>
        <Link
          href="/book-appointment"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 text-white shadow-lg shadow-cyan-600/30 transition-all hover:scale-110 hover:shadow-cyan-600/50"
          aria-label="Book Appointment"
        >
          <CalendarCheck className="h-6 w-6" />
        </Link>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex flex-col items-center gap-1 py-3 text-cyan-700 transition active:bg-cyan-50"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-semibold">Call</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 border-x border-zinc-200 py-3 text-green-600 transition active:bg-green-50"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
          <Link
            href="/book-appointment"
            className="flex flex-col items-center gap-1 py-3 text-cyan-700 transition active:bg-cyan-50"
          >
            <CalendarCheck className="h-5 w-5" />
            <span className="text-xs font-semibold">Book</span>
          </Link>
        </div>
      </div>
    </>
  );
}
