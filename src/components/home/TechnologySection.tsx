"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Diagnostic Services Data
const diagnosticServices = [
  {
    title: "Blood Tests",
    description: "Complete blood count (CBC), blood sugar, thyroid function tests, and various other blood parameters for accurate diagnosis.",
    benefit: "Fast results with high accuracy using automated analyzers",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=300&fit=crop",
  },
  {
    title: "ECG (Electrocardiogram)",
    description: "Records the electrical activity of the heart to detect cardiac abnormalities and monitor heart health.",
    benefit: "Painless, non-invasive, and quick heart assessment",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=300&fit=crop",
  },
  {
    title: "Thyroid Profile",
    description: "Comprehensive thyroid function tests including T3, T4, and TSH levels for thyroid disorder diagnosis.",
    benefit: "Early detection of thyroid imbalances",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=300&fit=crop",
  },
  {
    title: "Kidney Function Test",
    description: "Evaluates kidney health through blood and urine tests including creatinine, urea, and uric acid levels.",
    benefit: "Monitor kidney health and detect issues early",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=300&fit=crop",
  },
  {
    title: "Liver Function Test",
    description: "Assesses liver health through enzyme levels, protein levels, and bilirubin counts.",
    benefit: "Detect liver disorders and monitor treatment",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=300&fit=crop",
  },
  {
    title: "Lipid Profile",
    description: "Measures cholesterol levels including HDL, LDL, and triglycerides for cardiovascular risk assessment.",
    benefit: "Heart health monitoring and risk prevention",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=300&fit=crop",
  },
  {
    title: "HbA1c Test",
    description: "Measures average blood sugar levels over the past 2-3 months for diabetes management.",
    benefit: "Long-term diabetes control monitoring",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=300&fit=crop",
  },
  {
    title: "Urine & Stool Tests",
    description: "Microscopic and chemical analysis of urine and stool samples for infection and disease detection.",
    benefit: "Non-invasive diagnostic for various conditions",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=300&fit=crop",
  },
  {
    title: "Home Collection Service",
    description: "Convenient sample collection from your home by trained phlebotomists.",
    benefit: "No need to visit the lab - we come to you",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=300&fit=crop",
  },
];

// Service Card Component
function ServiceCard({ service }: { service: typeof diagnosticServices[0] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500">
        {!imageError ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-6xl text-white/50">🔬</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-zinc-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 line-clamp-3">
          {service.description}
        </p>
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-cyan-50 p-2">
          <span className="text-sm text-cyan-600">✓</span>
          <p className="text-xs font-medium text-cyan-700">{service.benefit}</p>
        </div>
      </div>
    </div>
  );
}

export default function TechnologySection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Diagnostic Services We Offer"
          description="Comprehensive diagnostic services with advanced equipment and experienced professionals. Accurate results, timely reports, and patient-centric approach."
          centered
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diagnosticServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50 hover:shadow-md"
          >
            View All Services
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}