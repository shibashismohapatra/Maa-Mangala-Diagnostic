import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/shared/TestimonialCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

export default function TestimonialsPreview() {
  return (
    <section className="bg-zinc-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Patients Say"
          description="Real experiences from patients who trusted Smiles by Dr. Annu for their dental care."
          centered
        />

        {/* Scrollable on mobile, grid on desktop */}
        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {testimonials.slice(0, 6).map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50"
          >
            Read All Reviews &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
