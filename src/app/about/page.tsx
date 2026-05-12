import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Maa Mangala Diagnostic Center — Diagnostic & Healthcare Services | Puri, Odisha",
  description:
    "Maa Mangala Diagnostic Center in Matiapada, Puri offers blood tests, urine tests, ECG, health packages, and OPD services with Dr. Sisir Kumar Das (Diabetic Consultant) and Dr. Sadasiba Padhy (Pediatrician). Home collection available.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-linear-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6 lg:gap-16 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-cyan-100 via-transparent to-teal-100 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/diagnostic-center/maa-mangala-diagnostic.jpg"
                alt="Maa Mangala Diagnostic Center - Matiapada, Puri"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Welcome to
            </span>
            <h1 className="mt-3 text-4xl font-bold text-zinc-900 md:text-5xl">
              Maa Mangala Diagnostic Center
            </h1>
            <p className="mt-3 text-xl font-medium text-cyan-700">
              Accurate Diagnostics &bull; Trusted Healthcare
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Maa Mangala Diagnostic Center is a trusted diagnostic facility in Puri, Odisha, 
              offering a wide range of pathology services including blood tests, urine tests, 
              ECG, and comprehensive health checkup packages. With experienced visiting doctors 
              and home collection facilities, we make quality healthcare accessible to everyone.
            </p>
            <p className="mt-4 text-base text-zinc-500">
              📍 Matiapada Chhaka, Konark Road, Puri, Odisha – 752002
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Blood Tests",
                "ECG Facility",
                "Home Collection",
                "Health Packages",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="rounded-full bg-linear-to-r from-cyan-500 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40"
              >
                Book Health Package
              </Link>
              <a
                href="tel:+917064821268"
                className="rounded-full border border-cyan-200 px-6 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-zinc-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="Our Doctors"
            title="Visiting Specialists"
            description="Experienced doctors available for OPD consultations at our center."
            centered
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Dr. Sisir Kumar Das */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-3xl">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">Dr. Sisir Kumar Das</h3>
                  <p className="text-cyan-700">MD & Diabetic Consultant</p>
                  <p className="text-sm text-zinc-500">Retired Senior Consultant</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                Specialist in diabetes management and general medical consultation with decades of experience.
              </p>
            </div>

            {/* Dr. Sadasiba Padhy */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-3xl">
                  👶
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">Dr. Sadasiba Padhy</h3>
                  <p className="text-cyan-700">MBBS, MD (Pediatrics)</p>
                  <p className="text-sm text-zinc-500">Child Specialist</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                Provides expert pediatric care for infants, children, and adolescents.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Home Collection Feature */}
      <section className="bg-linear-to-r from-cyan-600 to-teal-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <span className="text-6xl">🏠</span>
            <h2 className="text-3xl font-bold">Home Collection Facility Available</h2>
            <p className="max-w-2xl text-lg text-cyan-100">
              Convenient and hygienic sample collection from your home. 
              Book a test and our phlebotomist will visit you at your preferred time.
            </p>
            <a
              href="tel:+917064821268"
              className="mt-4 rounded-full bg-white px-8 py-3 font-semibold text-cyan-700 transition hover:scale-105 hover:shadow-xl"
            >
              Call to Book Home Collection
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}