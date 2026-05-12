import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/shared/SectionHeading";
import AppointmentForm from "@/components/shared/AppointmentForm";

export const metadata: Metadata = {
  title: "Contact Us — Maa Mangala Diagnostic Center, Puri",
  description:
    "Contact Maa Mangala Diagnostic Center in Matiapada, Puri, Odisha. Call us at 7064821268 or 8280600348, email us, or book a home collection for diagnostic tests.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-linear-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="Contact Us"
            title="Get in Touch"
            description="We're here to help. Reach out via phone, WhatsApp, or visit our diagnostic center in Matiapada, Puri."
            centered
          />
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">
              Diagnostic Center Information
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Address</p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Maa Mangala Diagnostic Center
                    <br />
                    Matiapada Chhaka, Konark Road
                    <br />
                    Puri, Odisha – 752002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Phone Numbers</p>
                  <div className="mt-1 space-x-3">
                    <a
                      href="tel:+917064821268"
                      className="text-sm text-cyan-600 hover:text-cyan-700"
                    >
                      7064821268
                    </a>
                    <span className="text-zinc-300">|</span>
                    <a
                      href="tel:+918280600348"
                      className="text-sm text-cyan-600 hover:text-cyan-700"
                    >
                      8280600348
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Email</p>
                  <a
                    href="mailto:maamangaladiagnostic6@gmail.com"
                    className="mt-1 text-sm text-cyan-600 hover:text-cyan-700"
                  >
                    maamangaladiagnostic6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">WhatsApp</p>
                  <a
                    href="https://wa.me/917064821268"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-sm text-green-600 hover:text-green-700"
                  >
                    Chat with us on WhatsApp (7064821268)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Consultation Hours</p>
                  <p className="mt-1 text-sm text-zinc-600">
                    <span className="font-medium">OPD Consultation:</span> Every Wednesday, 10:00 AM – 1:00 PM
                  </p>
                  <p className="text-sm text-zinc-500">
                    <span className="font-medium">Diagnostic Services:</span> Mon - Sat: 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-sm text-zinc-500">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Home Collection Notice */}
            <div className="mt-6 rounded-2xl bg-green-50 p-4 border border-green-100">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <p className="font-semibold text-green-800">Home Collection Available</p>
                  <p className="text-sm text-green-700">
                    Convenient sample collection from your home. Call to book an appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Matiapada+Chhaka+Konark+Road+Puri+Odisha&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maa Mangala Diagnostic Center Location - Matiapada, Puri"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">
              Send us a Message
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Fill in your details and we will get back to you via WhatsApp or phone.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex gap-3">
              <a
                href="tel:+917064821268"
                className="flex-1 rounded-full bg-linear-to-r from-cyan-500 to-cyan-600 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/917064821268"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-green-200 bg-green-50 py-3 text-center font-semibold text-green-700 transition hover:bg-green-100"
              >
                💬 WhatsApp
              </a>
            </div>

       
          </div>
        </div>
      </section>
    </main>
  );
}