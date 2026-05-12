import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import AppointmentForm from "@/components/shared/AppointmentForm";
import SectionHeading from "@/components/shared/SectionHeading";
import { Phone, Clock, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: `Book your dental appointment at ${siteConfig.brandName}. Fill in your details and we'll confirm via WhatsApp.`,
};

const trustItems = [
  { icon: ShieldCheck, text: "Painless & gentle care" },
  { icon: Clock, text: "Flexible timings" },
  { icon: Phone, text: "Quick WhatsApp confirmation" },
  { icon: MapPin, text: siteConfig.city },
];

export default function BookAppointmentPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-700 px-4 pb-16 pt-32 text-center text-white sm:pt-36">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="Book Your Visit"
            title="Schedule an Appointment"
            description="Fill in your details and we'll confirm your appointment instantly via WhatsApp."
            centered
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {trustItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm text-cyan-100"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-zinc-50 px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-zinc-900">
              Why Choose {siteConfig.brandName}?
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "State-of-the-art digital equipment",
                "Painless procedures with modern anesthesia",
                "Personalized treatment plans",
                "Affordable dental care",
                "4.9★ rated by 1000+ patients",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                  <span className="text-sm text-zinc-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900">Clinic Hours</h3>
              <div className="mt-2 space-y-2">
                <p className="text-sm text-zinc-600">
                  <span className="font-medium">OPD:</span> {siteConfig.timings.opd}
                </p>
                <p className="text-sm text-zinc-600">
                  <span className="font-medium">Diagnostic:</span> {siteConfig.timings.diagnostic}
                </p>
                <p className="text-sm text-zinc-600">
                  <span className="font-medium">Sunday:</span> {siteConfig.timings.sunday}
                </p>
              </div>
              <h3 className="mt-6 font-semibold text-zinc-900">Call Us</h3>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-1 block text-sm font-medium text-cyan-600 hover:underline"
              >
                {siteConfig.phone}
              </a>
              <h3 className="mt-6 font-semibold text-zinc-900">Location</h3>
              <p className="mt-1 text-sm text-zinc-600">
                {siteConfig.address}
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
