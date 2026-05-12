import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

// Doctors data
const doctors = [
  {
    name: "Dr. Sisir Kumar Das",
    title: "MD & Diabetic Consultant",
    tagline: "Retired Senior Consultant",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop",
    location: "Maa Mangala Diagnostic Center, Puri",
    bio: "Dr. Sisir Kumar Das is a highly experienced physician with expertise in diabetes management and general medical consultation. As a retired senior consultant, he brings decades of clinical experience to provide compassionate and comprehensive care for patients with diabetes, hypertension, and other chronic conditions.",
    highlights: [
      "MD in Medicine",
      "Diabetic Consultant",
      "Retired Senior Consultant",
      "Chronic Disease Management",
    ],
    specialization: "Diabetes & General Medicine",
  },
  {
    name: "Dr. Sadasiba Padhy",
    title: "MBBS, MD Pediatrics",
    tagline: "Child Specialist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop",
    location: "Maa Mangala Diagnostic Center, Puri",
    bio: "Dr. Sadasiba Padhy is a dedicated pediatrician committed to providing expert medical care for children from infancy through adolescence. With an MBBS and MD in Pediatrics, he specializes in newborn care, childhood vaccinations, growth monitoring, and management of pediatric illnesses.",
    highlights: [
      "MBBS, MD Pediatrics",
      "Newborn & Infant Care",
      "Childhood Vaccination",
      "Growth & Development",
    ],
    specialization: "Pediatrics",
  },
];

export default function DoctorSection() {
  return (
    <section className="bg-zinc-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Our Specialists
          </span>
          <h2 className="mt-3 text-3xl font-bold text-zinc-900 md:text-4xl">
            Meet Our Experienced Doctors
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Expert medical professionals dedicated to your familys health and well-being
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className="grid md:grid-cols-2">
                {/* Doctor Image */}
                <div className="relative min-h-[300px] md:min-h-[400px]">
                  <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-cyan-100 via-transparent to-teal-100 blur-xl opacity-0 transition group-hover:opacity-100" />
                  <div className="relative h-full w-full overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="inline-block rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                        {doctor.specialization}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-zinc-900">{doctor.name}</h3>
                  <p className="mt-1 text-lg font-medium text-cyan-700">
                    {doctor.title}
                  </p>
                  <p className="text-sm text-zinc-500">{doctor.tagline}</p>
                  
                  <p className="mt-4 text-sm leading-6 text-zinc-600 line-clamp-4">
                    {doctor.bio}
                  </p>
                  
                  <p className="mt-3 text-xs font-medium text-zinc-500 flex items-center gap-1">
                    📍 {doctor.location}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doctor.highlights.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/book-appointment"
                      className="flex-1 rounded-full bg-linear-to-r from-cyan-500 to-cyan-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:scale-[1.02]"
                    >
                      Book Consultation
                    </Link>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-full border border-cyan-200 px-4 py-2.5 text-center text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about availability */}
        <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-100 p-4 text-center">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">📅 Consultation Hours:</span> Every Wednesday, 10:00 AM – 1:00 PM
            <br />
            <span className="text-xs">Other days by prior appointment. Please call to confirm doctor availability.</span>
          </p>
        </div>
      </div>
    </section>
  );
}