import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-700 py-16 lg:py-24">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
          Ready to Connect?
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Book Your Appointment Today
        </h2>
      

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/book-appointment"
            className="rounded-full bg-white px-8 py-4 font-semibold text-cyan-700 shadow-lg transition hover:bg-cyan-50 hover:scale-[1.02]"
          >
            Book Appointment
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            WhatsApp Consultation
          </a>
        </div>

   
      </div>
    </section>
  );
}
