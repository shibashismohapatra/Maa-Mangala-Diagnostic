import Link from "next/link";

import { siteConfig } from "@/data/site";

export default function Hero() {


  return (
    <section className="relative overflow-hidden bg-white pt-24 lg:pt-32">
      {/* Background decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,184,201,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(13,143,158,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left Column — Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50/80 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              Diagnostic Center &bull; Puri, Odisha
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Accurate Diagnostics at{" "}
              <span className="bg-linear-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                {siteConfig.brandName}
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Comprehensive diagnostic services including blood tests, ECG, and health checkup packages. 
              Experienced doctors available for OPD consultations. Home collection facility for your convenience.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="rounded-full bg-linear-to-r from-cyan-500 to-cyan-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40 hover:scale-[1.02]"
              >
                Book Health Package
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-200 bg-white px-7 py-3.5 font-semibold text-cyan-700 transition hover:bg-cyan-50 hover:border-cyan-300"
              >
                WhatsApp Inquiry
              </a>
            </div>

            {/* Trust Badges - Updated for Diagnostic Center */}
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {[
                { label: "Blood Tests", icon: "🩸" },
                { label: "ECG Facility", icon: "❤️" },
                { label: "Home Collection", icon: "🏠" },
                { label: "Health Packages", icon: "📦" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/85 px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Hero Visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-cyan-100 via-white to-teal-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-2xl">
              <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
                {/* Diagnostic Center Image - Replaced Doctor Image */}
                <div className="relative min-h-[320px] xl:min-h-[620px] bg-linear-to-br from-cyan-500 to-teal-600">
                  {/* Placeholder for diagnostic center image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                    <span className="text-7xl mb-4">🏥</span>
                    <h3 className="text-2xl font-bold">{siteConfig.brandName}</h3>
                    <p className="mt-2 text-cyan-100">Accurate & Trusted Diagnostics</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-sm">🔬 Blood Tests</span>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-sm">❤️ ECG</span>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-sm">🏠 Home Collection</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-900/50 via-zinc-900/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="max-w-md rounded-3xl border border-white/20 bg-white/15 p-4 text-white shadow-xl backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                        {siteConfig.brandName}
                      </p>
                      <p className="mt-2 text-base font-semibold md:text-lg">
                        Accurate diagnostic services with home collection facility for your convenience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consultation & Services Info Section */}
                <div className="border-t border-zinc-200 bg-zinc-50 xl:border-l xl:border-t-0">
                  <div className="border-b border-zinc-200 p-5 md:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                      OPD Consultation
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-zinc-900">
                      {siteConfig.consultationDay || "Every Wednesday"}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      <span className="font-semibold text-cyan-700">{siteConfig.consultationTime || "10:00 AM – 1:00 PM"}</span>
                      <br />
                      Experienced doctors available for consultation at our center.
                    </p>
                  </div>

                  <div className="p-4 md:p-5">
                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
                      <div className="p-6 text-center">
                        <div className="mb-4 flex justify-center">
                          <span className="text-5xl">📍</span>
                        </div>
                        <h3 className="font-semibold text-zinc-900">Visit Us At</h3>
                        <p className="mt-2 text-sm text-zinc-600">
                          Maa Mangala Diagnostic Center<br />
                          Matiapada Chhaka, Konark Road<br />
                          Puri, Odisha - 752002
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-3 py-1 text-xs text-cyan-700">
                            📅 {siteConfig.consultationDay || "Every Wednesday"}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-3 py-1 text-xs text-cyan-700">
                            ⏰ {siteConfig.consultationTime || "10 AM - 1 PM"}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                            🏠 Home Collection
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-zinc-500 text-center">
                      Walk-ins available during consultation hours. Home collection available for diagnostic tests.
                    </p>
                    
                    {/* Contact Numbers */}
                    <div className="mt-4 text-center">
                      <p className="text-xs text-zinc-500">Call for appointments:</p>
                      <div className="flex justify-center gap-3 mt-1">
                        <a href={`tel:${siteConfig.phone}`} className="text-sm font-semibold text-cyan-600 hover:text-cyan-700">
                          {siteConfig.phone}
                        </a>
                        {siteConfig.phoneSecondary && (
                          <>
                            <span className="text-zinc-300">|</span>
                            <a href={`tel:${siteConfig.phoneSecondary}`} className="text-sm font-semibold text-cyan-600 hover:text-cyan-700">
                              {siteConfig.phoneSecondary}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}